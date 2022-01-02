import express from 'express';
import authenticated from '../middleware/security.js';
import {createFeedback, getFeedbacks,updateFeedback,deleteFeedback} from '../controllers/feedbackControllers.js';
const feedbackRouter = express.Router()


feedbackRouter.get('/',getFeedbacks);
feedbackRouter.post('/',authenticated,createFeedback);
feedbackRouter.put('/:_id',authenticated,updateFeedback);
feedbackRouter.delete('/:_id',authenticated,deleteFeedback);


export default feedbackRouter;