import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import { Spiral as HamburgerIcon } from 'hamburger-react';
import stylehamburger from './Hambruger.module.css';

const HamburgerContainer = () => {


  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div  className={stylehamburger.Hamburger_msite}>
      <HamburgerIcon
        direction="right"
        toggled={isOpen}
        toggle={setIsOpen}
      />
      {isOpen && ReactDOM.createPortal( // Use createPortal inside curly braces
        <div className={stylehamburger.Hamburger_msite_list}>
          <ul className={stylehamburger.Hamburger_msite_innerlist}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Discover">Discover</a>
            </li>
            <li>
              <a href="/Special Deals">Special Deals</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>,
        document.getElementById('hbmenu_displayhere') // Render into the specified DOM element
      )}
    </div>
  );
};

export default HamburgerContainer;
