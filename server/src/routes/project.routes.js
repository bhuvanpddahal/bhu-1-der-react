import express from 'express';

import auth from '../middleware/authentication.js';
import {
    addProject,
    getProjects
} from '../controllers/projects.controller.js';

const router = express.Router();

router.post('/', auth, addProject);
router.get('/', getProjects);

export default router;