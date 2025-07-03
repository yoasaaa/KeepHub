import { Router } from 'express';
import {
  getAllResources,
  getResource,
  createResource,
  updateResource,
  deleteResource,
  showStats,
  getAllTags,
} from '../controllers/resourceController.js';
import {
  validateResourceInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/').get(getAllResources).post(validateResourceInput, createResource);

router.route('/stats').get(showStats);
router.route('/tags').get(getAllTags);

router
  .route('/:id')
  .get(validateIdParam, getResource)
  .patch(checkForTestUser, validateResourceInput, validateIdParam, updateResource)
  .delete(checkForTestUser, validateIdParam, deleteResource);

export default router; 