import React from 'react'

const TextToSpeech = () => {
  return (
    <div>TextToSpeech</div>
  )
}

export default TextToSpeech




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