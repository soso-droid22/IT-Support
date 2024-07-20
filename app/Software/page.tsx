import React from 'react';

const images = [
  <div className='flex flex-col items-center mb-4' key="1">
   <a className='flex flex-col items-center' href='https://www.pirateproxy-bay.com'>
    <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#ffffff65] m-[1rem] w-[10rem]' src="/software_photos/pirat.webp" alt="photo" />
    <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
      bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
     '>
      "Pireate.bay" <br/> downlaod any SOFTWEARE PLUGINS MOVIES with uTorrent from here!
    </p>
   </a>
  </div>,
    <div className='flex flex-col items-center mb-4' key="1">
    <a className='flex flex-col items-center' href='https://rutracker.org/forum/index.php'>
     <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#ffffff65] m-[1rem] w-[10rem]'
      src="/software_photos/logo-3.svg" alt="photo" />
     <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
       bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
      '>
       "Pireate.bay <br/> downlaod any SOFTWEARE PLUGINS MOVIES with uTorrent from here"
     </p>
    </a>
   </div>,
     <div className='flex flex-col items-center mb-4' key="1">
     <a className='flex flex-col items-center' href='https://ninite.com'>
      <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#ffffff65] m-[1rem] w-[10rem]'
       src="/software_photos/nin.svg" alt="photo" />
      <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
        bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
       '>
        "Ninite" <br/> Best for fresh installed windows, you can install multiple software togother!
      </p>
     </a>
    </div>,
      <div className='flex flex-col items-center mb-4' key="1">
      <a className='flex flex-col items-center' href='https://www.utorrent.com/downloads/win/'>
       <img className='border-[#ffffff63] rounded-[1rem] border-[0.4rem] bg-[#ffffff65] m-[1rem] w-[10rem]' 
       src="/software_photos/icons8-utorrent-48.svg" alt="photo" />
       <p className='flex rounded-[2rem] ml-1 p-[1rem] text-xl  font-bold
         bg-[#24242475] w-[17.5rem] text-[#cadf10] font-mono
        '>
         "uTorrent" <br/>This used to download anything from any torrent website!
       </p>
      </a>
     </div>,

  
];

const App = () => (
  <div className='container m-[2rem]  mx-auto max-w h-screen  overflow-y-auto '>
    <div className='flex flex-col  xl:flex-row items-center mb-[7rem]'>
      {images}
    </div>
  </div>
);

export default App;
