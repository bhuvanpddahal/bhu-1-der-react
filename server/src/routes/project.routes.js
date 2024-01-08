import express from 'express';

import auth from '../middleware/authentication.js';
import {
    addProject,
    getProjects,
    getProjectById
} from '../controllers/projects.controller.js';

const router = express.Router();

router.post('/', auth, addProject);
router.get('/', getProjects);
router.get('/:id', getProjectById);

export default router;