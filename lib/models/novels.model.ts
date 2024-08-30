import mongoose from "mongoose";

const novelSchema = new mongoose.Schema({
    // title:chapTitle,
    //         text:novelText,
    //         name:novelName
    url:{type: String, required: true, unique: true},
    title:{type: String, required: true, unique: true},
    text:{type: String, required: true, unique: true},
    name:{type: String, required: true, unique: true}
})

const allNovels = mongoose.models.allNovels || mongoose.model('allnovels', novelSchema);

export default allNovels