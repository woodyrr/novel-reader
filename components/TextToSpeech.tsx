"use client"
import { getAllNovels } from '@/lib/actions';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
// import { UnrealSpeech } from "react-native-unrealspeech";
// const unrealSpeech = new UnrealSpeech(`${process.env.UNREAL_SPEECH_API_KEY}`);
const TextToSpeech = async () => {
    
    const allChapters = await getAllNovels();
    // const concatenatedText = allChapters?.map((chapter) => chapter.novelText).join(' ') || '';

  return (
        // <div>
        //     <Button onClick={handleGenerateSpeech} disabled={isLoading}>
        //     {isLoading ? 'Generating Speech...' : 'Generate Speech'}
        //     </Button>
        //     {audioUrl && <audio src={audioUrl} controls autoPlay />}
        // </div>
        <div>
            {/* <button onClick={handleGenerateSpeech}></button> */}
            hey
        </div>
  )
}

export default TextToSpeech

