import React from 'react';

const images = [
  <div className='flex flex-col items-center mb-4' key="1">
   <a className='flex flex-col items-center' href='https://oceanofgames.com/'>
    <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#1b020291] m-[1rem] w-[10rem]' src="/software_photos/photo1.svg" alt="photo" />
    <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
      bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
     '>
      "oceanofgames.com" <br/> safe and free games !
    </p>
   </a>
  </div>,
   <div className='flex flex-col items-center mb-4' key="1">
   <a className='flex flex-col items-center' href='https://www.pirateproxy-bay.com'>
    <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#ffffff65] m-[1rem] w-[10rem]' src="/software_photos/pirat.webp" alt="photo" />
    <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
      bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
     '>
      "Pireate.bay" <br/> downlaod any Games free !
    </p>
   </a>
  </div>,
   
];



const App = () => (
  <div className='container m-[2rem]  mx-auto max-w h-screen  overflow-y-auto '>
    <p className='bg-[#2206063d] text-[#ffffff] font-mono text-[2rem] font-bold flex justify-center text-center '>/ Games \</p>
     
     
    <div className='flex flex-col xl:flex-row items-center mb-[7rem]'>
      {images}
    </div>
  </div>
);

export default App;






