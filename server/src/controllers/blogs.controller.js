import { ObjectId } from 'mongodb';

import User from '../models/User.js';
import Blog from '../models/Blog.js';

export const createBlog = async (req, res) => {
    try {
        const { userId } = req;
        const { title, description } = req.body;
        const user = await User.findById(userId);
        if(user.type !== "admin") return res.status(403).json({ message: "Admin permissions required" });
        const newBlog = await Blog.create({ title, description });
        res.status(200).json(newBlog);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const getBlogs = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const skip = (Number(page) - 1) * limit;
        const totalBlogs = await Blog.countDocuments({}, { hint: "_id_" });
        const blogs = await Blog.find().sort({ _id: -1 }).limit(limit).skip(skip);
        const totalPages = Math.ceil(totalBlogs / limit);
        res.status(200).json({ blogs, totalPages, page: Number(page) + 1 });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;
        if(!ObjectId.isValid(id)) return res.status(404).json({ message: "Blog not found" });
        const blog = await Blog.findById(id);
        if(!blog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(blog);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const editBlog = async (req, res) => {
    try {
        const { userId } = req;
        const { id: blogId } = req.params;
        const { title, description } = req.body;
        const user = await User.findById(userId);
        if(user.type !== "admin") return res.status(403).json({ message: "Admin permissions required" });
        if(!ObjectId.isValid(blogId)) return res.status(404).json({ message: "Blog not found" });
        const blog = await Blog.findById(blogId);
        if(!blog) return res.status(404).json({ message: "Blog not found" });
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, { title, description }, { new: true });
        res.status(200).json(updatedBlog);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const deleteBlog = async (req, res) => {
    try {
        const { userId } = req;
        const { id: blogId } = req.params;
        const user = await User.findById(userId);
        if(user.type !== "admin") return res.status(403).json({ message: "Admin permissions required" });
        if(!ObjectId.isValid(blogId)) return res.status(404).json({ message: "Blog not found" });
        const blog = await Blog.findById(blogId);
        if(!blog) return res.status(404).json({ message: "Blog not found" });
        await Blog.findByIdAndDelete(blogId);
        res.status(200).json({ message: "Blog deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};