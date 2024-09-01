"use server"
import { revalidatePath } from "next/cache";

import { connectToDB } from "../mongoose";
import { scrapeFullNovel } from "../scrapper";
import { url } from "inspector";
// import Product from "../models/novels.model";
import allNovels from "../models/novels.model";

export async function scrapeNovels(novelUrl: string){
    if(!novelUrl) return;

    try {
        connectToDB();

        const scrapedNovels = await scrapeFullNovel(novelUrl);

        if(!scrapedNovels) return;

        let novel = scrapedNovels;

        const existingNovels = await allNovels.findOne({ url: scrapedNovels.url });

        // if(existingNovels){
        //     novel = {
        //         ...scrapeNovels,
        //         title: chapTitle,
        //         novelText,
        //         novelName,
        //         url
        //     }
        // }
        const newNovel = await allNovels.findOneAndUpdate(
            {url:scrapedNovels.url}, {novel},
            //  product ,
              {upsert: true, new :true} 
            )
            console.log(`newNovel: ${newNovel}`)
            
        revalidatePath(`/novels/${newNovel._id}`)

    } catch (error: any) {
        throw new Error(`failed to save/upload novel: ${error.message}`)
    }

    
}

export async function getAllNovels() {
    try {

        connectToDB();

        const chapters = await allNovels.find()
        // const newChapter = JSON.parse(JSON.stringify(chapters))
        // const prop= {JSON.parse(JSON.stringify(chapters))}
        // return newChapter
        return chapters

        // const transformedChapters = chapters.map((chapter) => ({
        //     ...chapter.toObject(), // Convert Mongoose document to plain object
        //     _id: chapter._id.toString(), // Convert _id to string
        // }));

        // return transformedChapters;

    } catch (error) {
        console.log(error)
    }
}

// export async function getAllNovels() {
//     try {
//         // Ensure you call connectToDB() correctly
//         await connectToDB();

//         // Fetch all novels with a longer timeout
//         let chapters = await allNovels.find().exec(); // .exec() to get a promise

//         // Transform each document
//         const transformedChapters = chapters.map((chapter) => ({
//             ...chapter.toObject(), // Convert Mongoose document to plain object
//             _id: chapter._id.toString(), // Convert _id to string
//         }));

//         return transformedChapters;

//     } catch (error) {
//         console.error('Failed to fetch novels:', error);
//         throw new Error(`Failed to fetch novels: ${error}`);
//     }
// }

export async function getAllNovelsById(productId: string) {
    try {

        connectToDB();

        const chapters = await allNovels.findOne({_id: productId})

        if(!chapters) return null;
        
        return chapters

    } catch (error) {
        console.log(error)
    }
}


