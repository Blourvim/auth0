import Achivement from "../models/achivementModel";
import User from '../models/userModel';

const getAllAchivements =async(req,res)=>{

    const docs = await Achivement.find({})
    res.status(200).json(docs)
}

const getAchivedOfUser = async(req,res)=>{
    const userId = req.user.sub
    const user = await User.find({sub:userId})

    if(user) return res.status(200).json(user.achivements)
             return res.status(400)
}
