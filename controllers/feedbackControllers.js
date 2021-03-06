import Feedback from '../models/feedbackModel.js';

export const createFeedback = async(req,res) =>{

    const user = await req.user.sub
console.log(typeof(req.user.sub))

const {rating,text} = req.body
const doc = await Feedback.create({
rating,
text,
user
})

res.json(doc)
}
export const getFeedbacks = async(req,res)=>{
    console.log('yay')
    const docs = await Feedback.find({})
    res.json(docs)
}

export const deleteFeedback = async(req,res)=>{
    const {_id}  = req.params;
    if (!req.user.admin){
        const docs = await Feedback.find({_id})
        if(docs.user !== req.user._id) return res.status(401)
    } 
    const resonse = await Feedback.deleteOne({_id});

    res.status(200).send('Başarılı olarak silinmiştir');
}

export const updateFeedback = async(req,res)=>{
    const {_id} = req.params;
    const {text,rating} = req.body;
    if (!req.user.admin){
        const docs = await Feedback.find({_id})
        if(docs.user !== req.user._id) return res.status(401)
    } 
    const doc = await Feedback.updateOne(
        {_id},
        {text,rating}
        )
        res.status(200).json(doc)
}