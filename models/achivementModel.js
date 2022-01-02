import mongoose from 'mongoose';

const achivementSchema = new mongoose.Schema({
description: String,
img:{
    data: Buffer,
    contentType: String
    },

createdAt: { type: Date, default: Date.now },

})

export default mongoose.model('Achivement', achivementSchema);