import React, { useState } from 'react';
import { images } from '../constants';

const NavDesktop = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <>
        <nav id="nav-desktop"
            className='flex justify-between items-center py-4 px-[125px] text-[#ffff00]'
        >
            <a href="#home">
              <h2 className="text-3xl font-bold cursor-pointer flex items-center">
                <img id='logo' className='' src={ images.logo } alt="logo" />
              </h2>
            </a>
            <div className="flex justify-between gap-20">
                <ul
                    className='flex justify-between gap-10 items-center py-2'
                >
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </ul>
                <ul
                    className='flex justify-between gap-10 items-center py-2'
                >
                    <li>6</li>
                    <li>7</li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default NavDesktop