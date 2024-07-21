import React from 'react';

const images = [
  <div className='flex flex-col items-center mb-4' key="1">
   <a className='flex flex-col items-center' href='https://gogoanime.org.za/'>
    <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#1b020291] m-[1rem] w-[10rem]' src="/software_photos/gg.svg" alt="photo" />
    <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
      bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
     '>
      "gogoanime" <br/> is  free Best Anime platform for free !
    </p>
   </a>
  </div>,
   
];

const images2 =[
  <div className='flex flex-col items-center mb-4' key="1">
   <a className='flex flex-col items-center' href='https://hdtoday.tv'>
    <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#ffffff65] m-[1rem] w-[10rem]'
     src="/software_photos/hd.svg" alt="photo" />
    <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
      bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
     '>
      "hdtoday.tv" <br/>Best option to watch TV series or movies here free!
    </p>
   </a>
  </div>,

];

const App = () => (
  <div className='container m-[2rem]  mx-auto max-w h-screen  overflow-y-auto '>
    <div><p className='font-mono font-bold flex justify-center bg-[#00000050] text-white' >/ MOVIE WEB \</p></div>
     <div>{images2}</div>
     <div><p className='font-mono font-bold flex justify-center bg-[#00000050] text-white' >/ Anime WEB \</p></div>
    <div className='flex flex-col lg:flex-row xl:flex-row items-center mb-[7rem]'>
      {images}
    </div>
  </div>
);

export default App;
