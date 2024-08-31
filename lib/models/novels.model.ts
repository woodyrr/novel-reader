import mongoose from "mongoose";

// interface INovel extends mongoose.Document {
//     url: string;
//     chapTitle: string[]; // Changed from string to string[]
//     novelName: string[];
//     novelText: string[];
// }

// const NovelSchema: Schema = new mongoose.Schema({
//     url: { type: String, required: true, unique: true },
//     chapTitle: { type: [String], required: true }, // Changed to array of strings
//     novelName: { type: [String], required: true }, // Changed to array of strings
//     novelText: { type: [String], required: true }, // Changed to array of strings
// });

// const allNovels = mongoose.models.allNovels || mongoose.model<INovel>('allNovels', NovelSchema);
// export default allNovels
const novelSchema = new mongoose.Schema({
    url:{type: String, required: true, unique: true},
    title:{type: String, required: true, unique: true},
    text:{type: String, required: true, unique: true},
    name:{type: String, required: true, unique: true}
})

// const allNovels = mongoose.models.allNovels || mongoose.model('allnovels', novelSchema);
const allNovels = mongoose.models.allNovels || mongoose.model('allNovels', novelSchema);
export default allNovels