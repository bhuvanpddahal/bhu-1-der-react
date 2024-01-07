import express from 'express';

import auth from '../middleware/authentication.js';
import {
    createBlog,
    getBlogs
} from '../controllers/blogs.controller.js';

const router = express.Router();

router.post('/', auth, createBlog);
router.get('/', auth, getBlogs);

export default router;