import express from 'express';

import auth from '../middleware/authentication.js';
import {
    createBlog
} from '../controllers/blogs.controller.js';

const router = express.Router();

router.post('/', auth, createBlog);

export default router;