import express from 'express';

import auth from '../middleware/authentication.js';
import {
    createBlog,
    getBlogs,
    getBlogById,
    editBlog,
    deleteBlog,
    commentOnBlog
} from '../controllers/blogs.controller.js';

const router = express.Router();

router.post('/', auth, createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.patch('/:id', auth, editBlog);
router.delete('/:id', auth, deleteBlog);
router.post('/comment/:id', auth, commentOnBlog);

export default router;