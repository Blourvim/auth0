import express from 'express';
import authenticated from '../middleware/security.js';


const achivementRouter = express.Router();

achivementRouter.get('/',authenticated)

export default feedbackRouter;