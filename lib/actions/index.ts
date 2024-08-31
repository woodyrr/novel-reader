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

        const novels = await scrapeFullNovel(novelUrl);

        if(!novels) return;


        const existingNovels = await allNovels.findOne({ url: novels.url });

        const newNovel = await allNovels.findOneAndUpdate(
            {url:novelUrl}, {...novels},
            //  product ,
              {upsert: true, new :true} 
            )

        revalidatePath(`/novels/${newNovel._id}`)

    } catch (error: any) {
        throw new Error(`failed to save/upload novel: ${error.message}`)
    }

    
}

export async function getAllNovels() {
    try {

        connectToDB;

        let allchapters = await allNovels.find()
        const chapters = allchapters.map((chapter) => ({
            ...chapter.toObject(), // Convert Mongoose document to plain object
            _id: chapter._id.toString(), // Convert _id to string
        }));
        return chapters;

    } catch (error) {
        console.log(error)
    }
}

export async function getAllNovelsById(productId: string) {
    try {

        connectToDB;

        const chapters = await allNovels.findOne({_id: productId})

        if(!chapters) return null;
        
        return chapters

    } catch (error) {
        console.log(error)
    }
}