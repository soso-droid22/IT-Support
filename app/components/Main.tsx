import React from 'react'

const Main = () => {
  return (
    <main className='' >
    <div className='bg-[#ffffff3d] font-bold font-mono 2xl:border-[#ffffff3d] 2xl:border-[0.5rem] 
    2xl:rounded-[5rem] 2xl:w-[50rem]
     2xl:mx-auto 2xl:mt-[2rem] 2xl:text-[2rem] xl:mt-[-0.7rem] '>
    <h1 className='text-center text-[#fff] font-mono m-2'>ALL TOP WEBSITE LINKS YOU NEED TO HAVE ! <br/> ⬇ </h1>
    </div>
    <div className='flex justify-center items-center '>
     <a className='flex flex-col items-center' href='https://www.utorrent.com/downloads/win/'>
      <span className=' flex justify-center  text-center text-[#fff] rounded-[3rem] bg-[#3cff0036] w-[15rem] font-mono font-bold
       2xl:w-[110rem] 2xl:mt-[5rem] 2xl:text-[5rem] 2xl:flex 2xl:flex-row
      '>DOWNLOAD uTorrent Here! Click me🎀
      <img className='mt-2 2xl:w-[10rem] ' src="/software_photos/icons8-utorrent-48.svg" alt="icon" /></span>
     </a>
     </div>

     <div>
     <div className='flex text-center justify-center m-[1rem]    '>
     <div className='  border-[#ffffff0e] border-[1rem] bg-[#ffffff7c]  w-[15rem] rounded-[1rem] 
     2xl:border-[10rem] 2xl:border-x-[20rem] 2xl:text-[2rem] '>
     <div className='font-bold font-mono grid grid-rows-4 grid-flow-row 2xl:grid-flow-col gap-4 items-center justify-center'>
     <a href='./Software' className='p-2 2xl:rounded-[1rem] bg-blue-500 text-white rounded-md hover:bg-blue-700' >
     <button >Free/Software/Links</button></a>
     <a href='./MovieAnime' className='p-2 2xl:rounded-[1rem] bg-blue-500 text-white rounded-md hover:bg-blue-700' >
     <button >Free/Movie/Anime/Links</button></a>
     <a href='./Game' className='p-2 2xl:rounded-[1rem] bg-blue-500 text-white rounded-md hover:bg-blue-700' >
     <button >Free/Game/Links</button></a>
     <a href='./Ai' className='p-2 2xl:rounded-[1rem] bg-blue-500 text-white rounded-md hover:bg-blue-700' >
     <button >Free/Ai/Links</button></a>
     
     </div>
     </div>
     </div>
     

     


     </div>



    </main>
  )
}

export default Main