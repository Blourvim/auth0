import Feedback from '../models/feedbackModel.js';

export const createFeedback = async(req,res) =>{
const {rating,text} = req.body
const doc = await Feedback.create({
rating,
text,
user:req.user._id
})

res.json(doc)
}
export const getFeedbacks = async(req,res)=>{
    const docs = await Feedback.find({})
    res.json(docs)
}

export const deleteFeedback = async(req,res)=>{
    const {_id}  = req.params;
    if (!req.user.admin){
        const docs = await Feedback.find({_id})
        if(docs.user !== req.user._id) return res.status(200).send('Yetersiz İzin')
    } 
    const resonse = await Feedback.deleteOne({_id});

    res.status(200).send('Başarılı olarak silinmiştir');
}

export const updateFeedback = async(req,res)=>{
    const {_id} = req.params;
    const {text,rating} = req.body;
    if (!req.user.admin){
        const docs = await Feedback.find({_id})
        if(docs.user !== req.user._id) return res.status(200).send('Yetersiz İzin')
    } 
    const doc = await Feedback.updateOne(
        {_id},
        {text,rating}
        )
        res.status(200).json(doc)
}