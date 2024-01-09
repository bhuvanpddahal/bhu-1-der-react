import express from 'express';

import auth from '../middleware/authentication.js';
import {
    createBlog,
    getBlogs,
    getBlogById,
    editBlog
} from '../controllers/blogs.controller.js';

const router = express.Router();

router.post('/', auth, createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.patch('/:id', auth, editBlog);

export default router;