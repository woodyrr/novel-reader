"use server"
import { revalidatePath } from "next/cache";
import allNovels from "../models/novels.model";
import { connectToDB } from "../mongoose";
import { scrapeFullNovel } from "../scrapper";

export async function scrapeNovels(novelUrl: string){
    if(!novelUrl) return;

    try {
        connectToDB();

        const novels = await scrapeFullNovel(novelUrl);

        if(!novels) return;

        let currentNovels = novels;

        const existingNovels = await allNovels.findOne({url: novels.url});

        if(!existingNovels){

            // currentNovels = {
            //     ...scrapeFullNovel,

            // }
        }

        const newNovel = await allNovels.findOneAndUpdate({url:novels.url, text: novels.text, title:novels.title, name:novels.name })
        revalidatePath(`/novels/${newNovel._id}`)

    } catch (error: any) {
        throw new error(`failed to save/upload novel: ${error.message}`)
    }
}