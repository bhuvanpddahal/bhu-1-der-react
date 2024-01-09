import express from 'express';

import auth from '../middleware/authentication.js';
import {
    addProject,
    getProjects,
    getProjectById,
    editProject,
    deleteProject
} from '../controllers/projects.controller.js';

const router = express.Router();

router.post('/', auth, addProject);
router.get('/', getProjects);
router.get('/:id', getProjectById);
router.patch('/:id', auth, editProject);
router.delete('/:id', auth, deleteProject);

export default router;