import * as cheerio from 'cheerio';
import axios from 'axios'
export async function scrapeFullNovel(url: string){
    if(!url) return;

    try {
        const response = await axios.get(url)
       
            const $ = cheerio.load(response.data)
            
            const chapTitle = $('.chapter-title').get().map(val => $(val).text()).join('')
            const novelText = $('.chapter-c').get().map(val => $(val).text()).join('')
            const novelName = $('.truyen-title').get().map(val => $(val).text()).join('')
            // return{ chapTitle, novelName, novelText}
            // console.log(response.data)
        const data = {
            title:chapTitle,
            text:novelText,
            name:novelName,
            url:url
        }
        return data
    } catch (error: any) {
        throw new Error(`failed to scrape novel: ${error.message}`)
    }

}