import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

sub:String,
createdAt: { type: Date, default: Date.now },
achivements:[String],
})

export default mongoose.model('User', userSchema);