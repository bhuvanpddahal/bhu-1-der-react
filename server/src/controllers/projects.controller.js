import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import { ObjectId } from 'mongodb';

import User from '../models/User.js';
import Project from '../models/Project.js';

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const addProject = async (req, res) => {
    let networkError = true;

    try {
        const { userId } = req;
        const { title, image, description } = req.body;
        const user = await User.findById(userId);
        if(user.type !== "admin") return res.status(403).json({ message: "Admin permissions required" });
        const imageUrl = (await cloudinary.uploader.upload(image)).secure_url;
        networkError = false;
        const newProject = await Project.create({ title, image: imageUrl, description });
        res.status(200).json(newProject);

    } catch (error) {
        if(networkError) return res.status(400).json({ message: "Network error" });
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const getProjects = async (req, res) => {
    try {
        const { page, limit } = req.query;
        const skip = (Number(page) - 1) * limit;
        const totalProjects = await Project.countDocuments({}, { hint: "_id_" });
        const projects = await Project.find().sort({ _id: -1 }).limit(limit).skip(skip);
        const totalPages = Math.ceil(totalProjects / limit);
        res.status(200).json({ projects, totalPages, page: Number(page) + 1 });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        if(!ObjectId.isValid(id)) return res.status(404).json({ message: "Project not found" });
        const project = await Project.findById(id);
        if(!project) return res.status(404).json({ message: "Project not found" });
        res.status(200).json(project);

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const editProject = async (req, res) => {
    let networkError = true;

    try {
        const { userId } = req;
        const { id: projectId } = req.params;
        const { title, description, image } = req.body;
        const user = await User.findById(userId);
        if(user.type !== "admin") return res.status(403).json({ message: "Admin permissions required" });
        if(!ObjectId.isValid(projectId)) return res.status(404).json({ message: "Project not found" });
        const project = await Project.findById(projectId);
        if(!project) return res.status(404).json({ message: "Project not found" });
        let imageUrl = project.image;
        if(image !== imageUrl) imageUrl = (await cloudinary.uploader.upload(image)).secure_url;
        networkError = false;
        const updatedProject = await Project.findByIdAndUpdate(projectId, { title, description, image: imageUrl }, { new: true });
        res.status(200).json(updatedProject);

    } catch (error) {
        console.log(error.message);
        if(networkError) return res.status(400).json({ message: "Network error" });
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const { userId } = req;
        const { id: projectId } = req.params;
        const user = await User.findById(userId);
        if(user.type !== "admin") return res.status(403).json({ message: "Admin permissions required" });
        if(!ObjectId.isValid(projectId)) return res.status(404).json({ message: "Project not found" });
        const project = await Project.findById(projectId);
        if(!project) return res.status(404).json({ message: "Project not found" });
        await Project.findByIdAndDelete(projectId);
        res.status(200).json({ message: "Project deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};