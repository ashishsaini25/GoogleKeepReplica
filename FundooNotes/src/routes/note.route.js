import express from 'express';
import * as notecontroller from '../controllers/notecontroller';
import { userAuth } from '../middlewares/auth.middleware';
import { cache_memory } from '../middlewares/redismiddleware';
const router = express.Router();
router.post('/create',userAuth,notecontroller.newNote);
router.get('/retriveAll',userAuth,cache_memory,notecontroller.retriveAllNotes);
router.get('/retrive/:_id',userAuth,notecontroller.retriveParticularNote);
router.put('/update/:_id',userAuth,notecontroller.updateParticularNote);
router.delete('/delete/:_id',userAuth,notecontroller.deleteParticularNote);
router.put('/archive/:_id',userAuth,notecontroller.updateArchieve);
router.put('/trash/:_id',userAuth,notecontroller.updateTrash);
router.put('/color/:_id',userAuth,notecontroller.updateColor);



export default router;