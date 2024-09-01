import React from 'react'
import Link from "next/link";
import { allNovels } from '@/types';
import { getAllNovelsById } from '@/lib/actions';
import { redirect } from 'next/navigation';
// import styles from '@/components/Playtext.module.css';
import styles from '@/components/Playtext.module.css';
import { Button } from '@/components/ui/button';


type Props = {
  params: { id: string }
}
const ChapterDetails = async ({params: {id}}: Props) => {
  const novel: allNovels = await getAllNovelsById(id);
  console.log('Fetched novel:', novel);  // Debugging line
  if(!novel) redirect('/')
  return (
    <div className='bg-gray-400 text-black w-full max-h-screen'>
        
            <div className='sm:max-w-[80%] md:max-w-[75%] xl:max-w-[50%] h-[96%] sm:h-[90%]'>
                <head>ReadOn</head>
                <section className='flex flex-col gap-3'>
                    <h1 className='text-base font-semibold'>{novel.name}</h1>
                    <h3 className='text-lg font-bold'>{novel.title}</h3>
                </section>
                <div className={`max-h-[80%] 2xl:max-h-[30%] ${styles.scrollContainer} px-[3%]`}>
                    <div className={styles.novelText}>
                    {novel.text}
                    </div>
                </div>
                <Button className="bg-green-300 hover:bg-green-200 w-[50%] sm:w-auto">
                    
                    hey
                </Button>
            </div>
        
        
        
        
      {/* <DialogOverlay> */}
                {/* <DialogTrigger asChild>
                    <Button 
                    disabled={userInput === ''}
                    variant="outline" type="submit"
                    className="bg-black/80 active:bg-black text-white font-semibold">
                            {isLoading ? 'ReadOn...' : 'ReadOn'}
                            
                    </Button>
                </DialogTrigger> */}
            


                {/* <DialogContent className="sm:max-w-[80%] md:max-w-[75%] xl:max-w-[50%] h-[96%] sm:h-[90%]">
                    <DialogHeader className="text-center flex flex-col">
                      <DialogTitle className="text-center md:text-xl">ReadOn</DialogTitle>
                      <DialogDescription className='flex flex-col gap-3'>
                          <h1 className='text-base font-semibold'>{novel.name}</h1>
                          <h3 className='text-lg font-bold'>{novel.title}</h3>
                      </DialogDescription>
                    </DialogHeader>
                    {/* quote.novelText */}
                    {/* <div className={`max-h-[80%] 2xl:max-h-[90%] ${styles.scrollContainer}`}>
                        <div className={styles.novelText}>
                        {novel.text}
                        </div>
                    </div> */}

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
                {/* </DialogContent> */}
            {/* </DialogOverlay> */}
    </div>
  )
}

export default ChapterDetails