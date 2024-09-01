import { getAllNovels } from '@/lib/actions'
import { Import } from 'lucide-react'
import React from 'react'

const NovelText = async () => {
    const allChapters = await getAllNovels();
    // const chapters = JSON.parse(JSON.stringify(allChapters))
    // Object.values(allChapters).forEach(value => {
    //     console.log(value);
    // })
  return (
    // <div>
    //     {allChapters?.map((chapter, index) => (
    //     <div key={index}>
    //       <h2>{chapter.title}</h2>
    //       {chapter.text && chapter.text.map((paragraph:any, paraIndex:any) => (
    //         <p key={paraIndex}>{paragraph}</p>
    //       ))}
    //     </div>
    //   ))}
    // </div>

    // <div>
    //     {allChapters?.map((chapter) => (
    //     <div key={chapter._id}>
    //       <h2>{chapter.title}</h2>
    //       {chapter.text && chapter.text.map((paragraph:String) => (
    //         <p key={chapter._id}>{paragraph}</p>
    //       ))}
    //     </div>
    //   ))}
    // </div>

    // <div>
        
    //     {allChapters?.map((chapter:any) => (
    //         <div key={chapter._id}>
    //             <h2>{chapter.title}</h2>
    //             {chapter.text && chapter.text.map((paragraph: string, paraIndex: number) => (
    //                 <p key={paraIndex}>{paragraph}</p>
    //             ))}
    //         </div>
    //     ))}
    // </div>

    // <div>
    //   {Object.keys(allChapters).map((key) => (
    //     <div key={key}>
    //         <strong>{key}:</strong> {allChapters[key]}
    //     </div>
    //     ))
    //     }
    // </div>
    
    <div className="flex flex-wrap gap-x-8 gap-y-16">
        {allChapters?.map((product) => (
        <div key={product._id}>product={product.text}</div>
        ))}
    
    </div>
    // <div>
        
    //     {allChapters?.map((chapter:any) => (
    //         <div>
    //         <h2>{chapter.title}</h2>
    //         <p>{chapter.text}</p>
            
    //         </div>
    //     ))}
    // </div>
  )
}

export default NovelText
// const NovelText: React.FC  = async () => {