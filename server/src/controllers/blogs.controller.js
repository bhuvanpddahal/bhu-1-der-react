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