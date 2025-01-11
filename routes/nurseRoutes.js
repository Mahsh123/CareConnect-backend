import { Router } from 'express';
import { addNurse, getNurses } from '../controller/nurseController.js';
const router = Router();

router.post('/', addNurse);
router.get('/', getNurses);

export default router;