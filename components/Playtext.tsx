import React, { useState } from 'react';
import Searchbar from './Searchbar';
// import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import styles from './PlayText.module.css';
import { Input } from './ui/input';
import { getAllNovels } from '@/lib/actions';
const PlayText: React.FC = () => {

  const fetchNovel = () => {}

  const isLoading = false; 
  const isPlaying = false;
  const novel = null; // Replace with actual state logic
  const audioUrl = ''; // Replace with actual state logic

// const fetchQuote = async () => {
//   try {
//     const response = await fetch(/api/novel?url=${encodeURIComponent(userInput.value)}, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const data = await response.json();
//     if (data.error) {
//       console.error(data.error);
//     } else {
//       quote.value = data;
//     }
//   } catch (error) {
//     console.error('Error fetching quote:', error);
//   }
// };

  return (
    <section className='flex w-full gap-3'>
      {/* <div className="flex gap-3 w-full"> */}
        <Searchbar />
        {/* <form
        className=''
        onSubmit={handleSubmit}>
        <Input
          value={userInput}
          onChange={(e) => setuserInput(e.target.value)}
          
          className="border border-gray-300 ring-0 outline-none outline-0 focus-visible:ring-green-300 w-full"
            type="text" 
            placeholder="Enter/paste novel link here" />
            <DialogTrigger asChild>
            <Button variant="outline" className="bg-black/80 active:bg-black text-white font-semibold">
              ReadOn
            </Button>
          </DialogTrigger>
        </form> */}

        <Dialog>
          {/* <DialogTrigger asChild>
            <Button variant="outline" className="bg-black/80 active:bg-black text-white font-semibold">
              ReadOn
            </Button>
          </DialogTrigger> */}
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
              {novel && <p>{novel}sss</p>}
              {isLoading && (
                <p className="flex gap-1 text-center items-center justify-center text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rotate-cw animate-spin text-lg"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                      Loading
                </p>
              )}
              </div>
            </div>

            <DialogFooter className="flex flex-row gap-1">
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
            </DialogFooter>
          </DialogContent>
        </Dialog>
      {/* </div> */}
    </section>
  );
};

export default PlayText;






// {/* <script setup>
// import {ref, onMounted} from "vue"
// import { Button } from '@/components/ui/button'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@/components/ui/dialog'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// let isLoading = ref(false)
// let isPlaying = ref(false)


// const userInput = ref('');
// const audioUrl = ref('');
// const quote = ref(null);


// const fetchQuote = async () => {
//   try {
//     const response = await fetch(/api/novel?url=${encodeURIComponent(userInput.value)}, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     const data = await response.json();
//     if (data.error) {
//       console.error(data.error);
//     } else {
//       quote.value = data;
//     }
//   } catch (error) {
//     console.error('Error fetching quote:', error);
//   }
// };



// let ttsData = ref('')
// // async function generateSpeech
// async function generateSpeech () {
//   try {
//     isLoading.value = true;

//     if (quote.value && quote.value.novelText) {
//       const response = await fetch('/api/speech', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           text: ${quote.value.novelText}, // Ensure quote.value.novelText is correctly accessed
//           voiceId: 'Scarlett',
//           bitrate: '192k',
//           speed: 1,
//           pitch: 1.0,
//         }),
//       });

//       const data = await response.json();

//       if (data.error) {
//         throw new Error(data.error);
//       }

//       ttsData.value = data.status;
//       // isPlaying.value = !isPlaying.value;

//       // Checking if the synthesis task completed and contains the OutputUri (audio file URL)
//       if (ttsData.value && ttsData.value.OutputUri) {
//         audioUrl.value = ttsData.value.OutputUri[0];
        
//         // Play the audio
//         const audio = new Audio(audioUrl.value);
//         audio.play().catch(error => {
//           console.error('Audio playback failed:', error);
//         });

//       } else {
//         throw new Error('Failed to generate TTS audio.');
//       }
//     } else {
//       console.error('Failed to fetch the quote or the quote is empty.');
//     }

//   } catch (error) {
//     console.error('Error generating TTS:', error);
//   } finally {
//     isLoading.value = false;
//   }
// }


// <template>
//   <Input v-model="userInput" className="border border-gray-300 ring-0 outline-none outline-0 focus-visible:ring-green-300" type="text" placeholder="Enter/paste novel link here" />
//   <Dialog>
//     <DialogTrigger as-child>
//       <Button @click="fetchQuote" variant="outline" className="bg-black/80 active:bg-black text-white font-semibold" >
//         ReadOn
//       </Button>
//     </DialogTrigger>
//     <DialogContent className="sm:max-w-[80%] md:max-w-[75%] xl:max-w-[50%] h-[96%] sm:h-[90%] ">
//       <DialogHeader className="text-center flex flex-col">
//         <DialogTitle className="text-center md:text-xl">ReadOn</DialogTitle>
//         <DialogDescription>
//           Make changes to your profile here. Click save when you're done.
//         </DialogDescription>
//       </DialogHeader>

//       <div className="scroll-container max-h-[80%] 2xl:max-h-[90%]" >
//         <div className="novel-text">
//           <div v-if="quote">
//             <p>{{ quote.novelText }}</p>
//           </div>
//           <div v-if="isLoading">
//             <p className="flex gap-1 text-center items-center text-xl" ><svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>Loading...</p>
//           </div>

//         </div>
//       </div>
        
//       <DialogFooter className="flex flex-row gap-1">
  
//         <audio v-if="audioUrl" :src="audioUrl" controls autoplay></audio>
//         <Button className="bg-green-300 hover:bg-green-200 w-[50%] sm:w-auto" @click=" generateSpeech" >
//             <div className="flex gap-1 text-black items-center" v-if="isPlaying">
//                 <div>pause</div>
//                 <!-- <Icon name="uil:pause"  style="color: black" /> -->
//                 <p v-if="isLoading" className="flex gap-1 text-center items-center text-xl" ><svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>Loading...</p>
//             </div>
//             <div className="flex gap-1 text-black items-center" v-else>
//                 <div>play</div>
//                 <!-- <Icon name="uil:play"  style="color: black" /> -->
//                 <p v-if="isLoading" className="flex gap-1 text-center items-center text-xl" ><svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>Loading...</p>
//             </div>
//         </Button>
        
        
//       </DialogFooter>
     
//     </DialogContent>
//   </Dialog>
// </template>

// <style scoped>
//   .scroll-container {
//     /* max-height: 400px;  */
//     overflow-y: scroll;
//     padding: 20px;
//     background-color: #f9f9f9;
//     border: 1px solid #ddd;
//     border-radius: 8px;
//     font-family: 'Georgia', serif;
//   }
  
//   .novel-text {
//     line-height: 1.6;
//     font-size: 18px;
//     color: #333;
//   }
  
//   .novel-text p {
//     margin-bottom: 1em;
//   }
// </style> */}