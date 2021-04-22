import { Router } from 'express';
import { TempController } from '../controllers/TempController';

const router = Router();
const tempControler = new TempController();

router.get('/', tempControler.temp);

export default router;