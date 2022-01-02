import express from 'express';
import authenticated from '../middleware/security.js';
import {getAllAchivements,getAchivedOfUser} from '../controllers/achivementControllers.js';


const achivementRouter = express.Router();

achivementRouter.get('/',authenticated,getAllAchivements)
achivementRouter.get('/:id',authenticated,getAchivedOfUser)


export default achivementRouter;