import express from 'express';

import auth from '../middleware/authentication.js';
import {
    createBlog,
    getBlogs,
    getBlogById
} from '../controllers/blogs.controller.js';

const router = express.Router();

router.post('/', auth, createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlogById);

export default router;