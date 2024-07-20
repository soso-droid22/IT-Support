"use client";

import React, { useState } from 'react';
import styles from './HamburgerMenu.module.css';
import Link from 'next/link';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.hamburger} ${isOpen ? styles.hideHamburger : ''}`} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <button className={`${styles.closeButton} ${isOpen ? styles.showCloseButton : ''}`} onClick={toggleMenu}>
          &times;
        </button>
        <Link href="/">
          <p className={styles.menuItem}>Home</p>
        </Link>
        <Link href="/about-us">
          <p className={styles.menuItem}>About Us</p>
        </Link>
      </div>
      <div className='text-[#18f0ff] flex justify-center text-2xl font-bold p-2 font-mono 2xl:text-[5rem] 2xl:m-4
      '>
        IT - Support / Links
      </div>
    </div>
  );
};

export default HamburgerMenu;
