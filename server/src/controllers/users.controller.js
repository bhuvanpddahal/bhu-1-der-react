import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User with this email already exists" });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const type = email === process.env.ADMIN ? "admin" : "user";
        const pictureIndex = type === "user" ? Math.floor(Math.random() * 6) : 6;
        const newUser = await User.create({ username, email, password: hashedPassword, type, pictureIndex });
        const token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY);
        res.status(200).json({ user: newUser, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });
        const passwordIsMatching = await bcrypt.compare(password, user.password);
        if (!passwordIsMatching) return res.status(400).json({ message: "Password is not matching" });
        const token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY);
        res.status(200).json({ user, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const loginWithToken = async (req, res) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_KEY);
        res.status(200).json({ user, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};