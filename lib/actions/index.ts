"use server"
import { revalidatePath } from "next/cache";

import  UnrealSpeechAPI  from "unrealspeech";
import { useCallback,useState } from "react";
import { connectToDB } from "../mongoose";
import { scrapeFullNovel } from "../scrapper";
import { url } from "inspector";
// import Product from "../models/novels.model";
import allNovels from "../models/novels.model";
import axios from "axios";

export async function scrapeNovels(novelUrl: string){
    if(!novelUrl) return;

    try {
        connectToDB();

        const scrapedNovels = await scrapeFullNovel(novelUrl);

        if(!scrapedNovels) return;

        let novel = scrapedNovels;

        const existingNovels = await allNovels.findOne({ url: scrapedNovels.url });

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
        console.log(chapters)
        return chapters

    } catch (error) {
        console.log(error)
    }
}


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


// export async function textToSpeech(novelText: string) {

//     const [text, setText] = useState<string>("");
//     const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
//     const [isPaused, setIsPaused] = useState<boolean>(false);
//     const [isResumed, setIsResumed] = useState<boolean>(false);
//     const [isEnded, setIsEnded] = useState<boolean>(false);



//     if(!novelText) return;

//     const speak = useCallback(() => {
//         var msg = new SpeechSynthesisUtterance();
    
//         msg.text = <string>text;
//         function speak() {
//           window.speechSynthesis.speak(msg);
//         }
//         speak();
//         setIsSpeaking(true);
//         setIsEnded(false);
//       }, [text]);

// }


// actions/index.tsx


  

