import NavBar from '@/components/NavBar'
import Searchbar from '@/components/Searchbar'
import { Button } from '@/components/ui/button'
import React from 'react'
// import playtext from '@/components/PlayText'


const home = () => {
  return (
    <>
    <section className='flex flex-col gap-3 w-full h-full' >
        <NavBar />
        <div className='flex gap-3'>
          <Searchbar />
          <Button variant="outline" className="bg-black/80 active:bg-black text-white font-semibold" />
        </div>
    </section>
      
    </>
  )
}

export default home