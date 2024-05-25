import { useState } from 'react'
import './App.css'

function App() {
  const[color,setColor]=useState('salmon')
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'>
            <button
            onClick={()=>setColor('red')} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
            <button 
            onClick={()=>setColor('black')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>Black</button>
            <button 
            onClick={()=>setColor('skyblue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"skyblue"}}>Skyblue</button>
            <button 
            onClick={()=>setColor('salmon')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"salmon"}}>Salmon</button>
            <button 
            onClick={()=>setColor('slateblue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"slateblue"}}>Slateblue</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
