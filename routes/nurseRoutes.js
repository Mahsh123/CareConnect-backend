import { Router } from 'express';
import { addNurse, getNurses, deleteNurse } from '../controller/nurseController.js';
const router = Router();

router.post('/', addNurse);
router.get('/', getNurses);
router.delete('/:nurseId', deleteNurse);

export default router;