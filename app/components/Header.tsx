import React from 'react';
import HamburgerMenu from './HamburgerMenu';


const Header = () => {
  return (
    <header className="header bg-[#00000031] xl:border-b-[1rem]  2xl:border-b-[0.5rem]
    xl:border-[#61faff] 2xl:border-[#61faff] border-[#61faff] border-b-[0.5rem] ">
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src="./video1.mp4" type="video/mp4" />
        </video>
      </div>

     <div className='content mbile_navbar flex flex-col'>
      <div className='flex flex-col justify-center text'>
        <div className='m-[1rem] '>
          <HamburgerMenu  />
        </div>
     </div>

     </div>
     
    </header>
  );
};

export default Header;
