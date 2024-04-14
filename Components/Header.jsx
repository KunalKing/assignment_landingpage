// Example: Header.jsx
"use client";
import { useEffect } from 'react';

import Image from 'next/image';
import styles from './Header.module.css'; // Import CSS module for styling
import logo from '../public/logo.svg';
import { gsap } from 'gsap';
import HamburgerContainer from './HamburgerContainer'; 



const Header = () => {

  useEffect(() => {
    const navItems = document.querySelectorAll(".navItemslist li a");
  
    navItems.forEach(item => {
      const animation = gsap.to(item, {
        paused: true,
        duration: 1,
        color: 'white',
        background: '#5D50C6',
        padding: '5px 5px',
        borderRadius: '10px'
      });
  
      const handleMouseEnter = () => {
        animation.play();
      };
  
      const handleMouseLeave = () => {
        animation.reverse();
      };
  
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
  
      // Clean up event listeners and animation on component unmount
      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
        animation.kill();
      };
    });
  }, []); // Empty dependency array ensures the effect runs only once on component mount
  

let mn = gsap.matchMedia();


  useEffect(() => {
      // for mobile logo animation
  mn.add("(max-width: 760px)", () => {
    gsap.to('.logo', {
       duration: 5,
       x: 190,
       rotation: 360,
       });
  });
  mn.add("(min-width: 761px)", () => {
    gsap.to('.logo', {
       duration: 5,
       x: 200,
       rotation: 360,
       });
  });

    // gsap.to('.logo', {
    //   duration: 5,
    //   x: 200,
    //   rotation: 360,
    // });
  }, []);


  return (
     <div>
       
        <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* Logo image */}
        <Image priority src={logo} className={`logo ${styles.logo}`} height={40} width={40} alt="logoImage" />
        {/* Text */}
        <h1 className={styles.title}>Travlog</h1>
      </div>
      <HamburgerContainer  className="HamburgerMobile"/>   
    {/* Navigation links */}
    <nav className={`${styles.DesktopHeader} ${styles.nav}`}>
    <ul className={`navItemslist ${styles.navList}`}>
      <li className={styles.navItem}><a href="/">Home</a></li>
      <li className={styles.navItem}><a href="/discover">Discover</a></li>
      <li className={styles.navItem}><a href="/special-deals">Special Deals</a></li>
      <li className={styles.navItem}><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  {/* Login and Sign up links */}
  <div className={`${styles.DesktopHeader} ${styles.authLinks}`}>
    <a href="/login" className={styles.authLink}>Login</a>
    <a href="/signup" className={`${styles.authLink} ${styles.signup}`}>Sign up</a>
  </div>
</header>
<div id='hbmenu_displayhere'></div>
  </div>
      
  );
};

export default Header;
