import React from 'react';

const images = [
  <div className='flex flex-col items-center mb-4' key="1">
   <a className='flex flex-col items-center' href='https://chatgpt.com/'>
    <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#ffffff91] m-[1rem] w-[10rem]' src="/software_photos/icons8-chatgpt-500.svg" alt="photo" />
    <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
      bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
     '>
      "chatgpt.com" <br/>The Best AI🤖 !
    </p>
   </a>
  </div>,
   <div className='flex flex-col items-center mb-4' key="1">
   <a className='flex flex-col items-center' href='https://gencraft.com/generate'>
    <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#ffffff65] m-[1rem] w-[10rem]' src="/software_photos/download.svg" alt="photo" />
    <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
      bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
     '>
      "gencraft.com" <br/> Best AI for generate hight quality Images free !
    </p>
   </a>
  </div>,
  <div className='flex flex-col items-center mb-4' key="1">
  <a className='flex flex-col items-center' href='https://leonardo.ai/'>
   <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#2b060665] m-[1rem] w-[10rem]' src="/software_photos/leonardo-logo-white.svg" alt="photo" />
   <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
     bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
    '>
     "leonardo-logo-white" <br/> Best AI for generate hight quality Images and wallpapers free !
   </p>
  </a>
 </div>,
   
];



const App = () => (
  <div className='container m-[2rem]  mx-auto max-w h-screen  overflow-y-auto '>
    <p className='bg-[#2206063d] text-[#ffffff] font-mono text-[2rem] font-bold flex justify-center text-center '>/ AI🤖 \</p>
     
     
    <div className='flex flex-col  xl:flex-row items-center mb-[7rem]'>
      {images}
    </div>
  </div>
);

export default App;






