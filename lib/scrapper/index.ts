import * as cheerio from 'cheerio';
import axios from 'axios'
export async function scrapeFullNovel(url: string){
    if(!url) return;

    try {
        const response = await axios.get(url)
       
            const $ = cheerio.load(response.data)
            
            // const chapTitle = $('.chapter-title').get().map(val => $(val).text()).join('')
            // const novelText = $('.chapter-c').get().map(val => $(val).text().split('\n'))
            // const novelName = $('.truyen-title').get().map(val => $(val).text()).join('')

            const chapTitle = $('.chapter-title').text()
            const novelText = $('.chapter-c').text()
            const novelName = $('.truyen-title').text()

            // return{ chapTitle, novelName, novelText}
            // console.log(response.data)
        const data = {
            chapTitle,
            novelText,
            novelName,
            url
        
        };
        // console.log(`data: ${JSON.stringify(data)}`);
        return data;
    } catch (error: any) {
        throw new Error(`failed to scrape novel: ${error.message}`)
    }

}

// export async function getText(text: string){
//     if(!text) return;

//     try {
//         const response = await axios.get(text)
       
//         const bro = response.data
//         const data = {
//             text:bro
//         }
        
//         return data;
//     } catch (error: any) {
//         throw new Error(`failed to scrape novel: ${error.message}`)
//     }

// }