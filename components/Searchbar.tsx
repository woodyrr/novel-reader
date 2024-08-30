
import React from 'react'
import { Input } from './ui/input'

const Searchbar = () => {
  return (
    <Input className="border border-gray-300 ring-0 outline-none outline-0 focus-visible:ring-green-300" type="text" placeholder="Enter/paste novel link here" />
    
  )
}

export default Searchbar

//   <Input v-model="userInput" class="border border-gray-300 ring-0 outline-none outline-0 focus-visible:ring-green-300" type="text" placeholder="Enter/paste novel link here" />