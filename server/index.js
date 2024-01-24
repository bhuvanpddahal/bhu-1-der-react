// LIBRARY IMPORTS
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// LOCAL IMPORTS
import './src/mongodb/connection.js';
import userRouter from './src/routes/user.routes.js';
import blogRouter from './src/routes/blog.routes.js';
import projectRouter from './src/routes/project.routes.js';

// CONFIGURATIONS
dotenv.config();

// VARIABLES
const app = express();
const port = process.env.PORT || 5000;

// MIDDLEWARES
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: ["https://bhu-1-der.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true
}));

// ROUTES
app.use('/api/users', userRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/projects', projectRouter);

// SERVER
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});