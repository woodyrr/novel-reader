import playText from '@/components/PlayText'
import NavBar from '@/components/Navbar'
import Searchbar from '@/components/Searchbar'
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import PlayText from '@/components/PlayText'
import { getAllNovels } from '@/lib/actions'
import NovelCard from '@/components/NovelCard'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import styles from '@/components/Playtext.module.css'
import TextToSpeech from '@/components/TextToSpeech'
import { useState } from 'react'


const home = async () => {
  const allChapters = await getAllNovels();
  
  // const text = allChapters.map((chapter: any) => chapter.novelText).join(' ');

// Now, 'text' contains just the combined novelText of all chapters
  // setText(text);

  
  
  return (
    <>
    <section className="bg-gray-100 min-h-screen w-full flex flex-col gap-5">
      <header className="text-center font-bold text-[25px] border py-3 border-gray-300 bg-green-200">ReadOn</header>
      <div className="px-[6%] flex gap-2 w-full">
        <Searchbar />
      </div>
      <section className="">
        <h2 className="section-text">Trending</h2>
        {allChapters?.map((chapter) => (
          <Dialog key={chapter._id}>
            <DialogTrigger className='flex flex-col gap-3' asChild>
              <Button variant="outline" className="bg-black/80 active:bg-black text-white font-semibold flex flex-col gap-5">
                <div>
                  <div>{chapter.name}</div>
                  <h3 className="product-title">{chapter.title}</h3>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[80%] md:max-w-[75%] xl:max-w-[50%] h-[96%] sm:h-[90%]">
              <DialogHeader className="text-center flex flex-col">
                <DialogTitle className="text-center md:text-xl">ReadOn</DialogTitle>
                <DialogDescription>
                  <div className="max-h-[80%] 2xl:max-h-[90%] font-serif">
                    <div className="leading-[1.6] font-medium text-[#333] bg-green-200 rounded-md">
                      <div className='flex flex-col text-center'>
                        <h1 className="product-title">{chapter.name}</h1>
                        <h3 className="product-title">{chapter.title}</h3>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[80%] 2xl:max-h-[90%] overflow-y-scroll p-[20px] bg-[#f9f9f9] border border-[#ddd] rounded-md font-serif">
                <div className="leading-[1.6] font-[18px] text-[#333] flex flex-col gap-5 w-full">
                  <p className='mb-[1em]'>{chapter.text}</p>
                </div>
              </div>
              <DialogFooter className="flex flex-row gap-1">
                {/* Add your buttons or additional content here */}
                <button>Additional Action</button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </section>
    </section>
    
    </>
  )
}

export default home
