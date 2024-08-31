import { getAllNovels } from '@/lib/actions'
import { Import } from 'lucide-react'
import React from 'react'

const NovelText: React.FC = async () => {
    const allChapters = await getAllNovels();
    
  return (
    // <div>
    //     {allChapters?.map((chapter, index) => (
    //     <div key={index}>
    //       <h2>{chapter.title}</h2>
    //       {chapter.text && chapter.text.map((paragraph:String, paraIndex:number) => (
    //         <p key={paraIndex}>{paragraph}</p>
    //       ))}
    //     </div>
    //   ))}
    // </div>
    <div>
        {allChapters?.map((chapter) => (
            <div>
            <h2>{chapter.title}</h2>
            <p>{chapter.text}</p>
            
            </div>
        ))}
    </div>
  )
}

export default NovelText
