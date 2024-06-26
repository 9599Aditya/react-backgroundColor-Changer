import { useState } from 'react'
import './App.css'

export default function App() {

  const [color , setColor] = useState("white")

  const changer = (color1) => {
    setColor(color1)
  }

  return (
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor:color}}>
      <h1 className='text-center underline text-lg'>Hi I'm Aditya Kashyup</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=> changer("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}>Red</button>
          <button
          onClick={()=> changer("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"yellow"}}>Yellow</button>
          <button
          onClick={()=> changer("black")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"black"}}>Black</button>
          <button
          onClick={()=> changer("blue")}  
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}}>Blue</button>
          <button
          onClick={()=> changer("pink")}  
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"pink"}}>Pink</button>
          <button
          onClick={()=> changer("olive")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"olive"}}>Olive</button>
          <button
          onClick={()=> changer("green")}  
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}}>Green</button>
          <button
          onClick={()=> changer("orange")}  
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}
