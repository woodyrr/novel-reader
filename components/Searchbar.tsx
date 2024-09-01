"use client"
import React, { FormEvent, useState } from 'react'
import styles from './PlayText.module.css';
import { Input } from './ui/input'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { getAllNovels, scrapeNovels } from '@/lib/actions'
import NovelText from './NovelText';
const isvalidNovelURL = (url: string) =>{
    try {
        const parseURl = new URL(url)
        const hostname = parseURl.hostname;

        // if(hostname.includes('https://novelfull.net/') || hostname.includes('https://novelbin.com/') || hostname.includes('https://novelbin.com/'))
        if(hostname.includes('https://novelfull.net/') || hostname.includes("novelfull")){
            return true
        }
    }
    catch (error){
        return false;
    }

    return false
}
const Searchbar = () => {
    const [userInput, setuserInput] = useState("")
    const [isLoading, setisLoading] = useState(false)
    // const allChapters = await getAllNovels()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isvalidLink = isvalidNovelURL(userInput)

        // alert(isvalidLink ? 'Valid Link' : 'Invalid Link');
        if(!isvalidLink) return alert("Please provide a valid novelfull link")

        try {
            setisLoading(true);
            const product = await scrapeNovels(userInput)
            
        } catch (error) {

            console.log(error);

        }finally{
            setisLoading(false)
        }
    }


  return (
    <form
        className='flex gap-3 w-full'
        onSubmit={handleSubmit}>
        <Input
          value={userInput}
          onChange={(e) => setuserInput(e.target.value)}
          
          className="border border-gray-300 ring-0 outline-none outline-0 focus-visible:ring-green-300 w-full"
            type="text" 
            placeholder="Enter/paste novel link here" />
            <Dialog>
                <DialogTrigger asChild>
                    <Button 
                    disabled={userInput === ''}
                    variant="outline" type="submit"
                    className="bg-black/80 active:bg-black text-white font-semibold">
                            {isLoading ? 'ReadOn...' : 'ReadOn'}
                            
                    </Button>
                </DialogTrigger>
            


                <DialogContent className="sm:max-w-[80%] md:max-w-[75%] xl:max-w-[50%] h-[96%] sm:h-[90%]">
                    <DialogHeader className="text-center flex flex-col">
                    <DialogTitle className="text-center md:text-xl">ReadOn</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                    </DialogHeader>
                    {/* quote.novelText */}
                    <div className={`max-h-[80%] 2xl:max-h-[90%] ${styles.scrollContainer}`}>
                        <div className={styles.novelText}>
                        {/* {allChapters.map((novel) => (
                            <div>{novel.title}</div>
                        )
                        ) } */}

                        
                                {/* {allChapters?.map((product) => (
                                <div key={product._id}>product={product.text}</div>
                                ))} */}
                            
                            
                        
                        {isLoading && (
                            <p className="flex gap-1 text-center items-center justify-center text-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-rotate-cw animate-spin text-lg"
                            >
                                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                                <path d="M21 3v5h-5"/>
                            </svg>
                                Loading
                            </p>
                        )}
                        </div>
                    </div>

                    {/* <DialogFooter className="flex flex-row gap-1">
                    {audioUrl && (
                        <audio src={audioUrl} controls autoPlay></audio>
                    )}
                    <Button className="bg-green-300 hover:bg-green-200 w-[50%] sm:w-auto">
                        {isPlaying ? (
                        <div className="flex gap-1 text-black items-center">
                            <div>pause</div>
                            {isLoading && (
                            <p className="flex gap-1 text-center items-center text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rotate-cw animate-spin"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                                Loadings...
                                
                            </p>
                            )}
                        </div>
                        ) : (
                        <div className="flex gap-1 text-black items-center">
                            <div>play</div>
                            {isLoading && (
                            <p className="flex gap-1 text-center items-center text-xl">
                                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
                                Loading... 
                            </p>
                            )}
                        </div>
                        )}
                    </Button>
                    </DialogFooter> */}
                </DialogContent>
            </Dialog>
        </form>
    
  )
}

export default Searchbar

//   <Input v-model="userInput" class="border border-gray-300 ring-0 outline-none outline-0 focus-visible:ring-green-300" type="text" placeholder="Enter/paste novel link here" />