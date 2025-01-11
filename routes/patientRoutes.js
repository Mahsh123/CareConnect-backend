import { Router } from 'express';
import { addPatient, getPatient } from '../controller/patientController.js';
const router = Router();

router.post('/', addPatient);
router.get('/', getPatient);

export default router;