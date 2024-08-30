import playText from '@/components/PlayText'
import NavBar from '@/components/Navbar'
import Searchbar from '@/components/Searchbar'
import { Button } from '@/components/ui/button'
import React from 'react'
import PlayText from '@/components/PlayText'



const home = () => {
  return (
    <>
    <section className="bg-gray-100 min-h-screen w-full flex flex-col gap-5">
      <header className="text-center font-bold text-[25px] border py-3 border-gray-300 bg-green-200">ReadOn</header>
      <div className="px-[6%] flex gap-2 w-full">
        <PlayText />
      </div>
    
    </section>
      
    </>
  )
}

export default home

{/* <div class="bg-gray-100 min-h-screen flex flex-col gap-5">
    <header class="text-center font-bold text-[25px] border py-3 border-gray-300 bg-green-200">ReadOn</header>
    <div class="px-[6%] flex gap-2">
      <playText />
    </div>
    
  </div> */}