import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { images } from '../constants';

const NavMobile = () => {
  return (
    <>
        <nav
            id="nav-mobile"
        >
            <ul>
                <a href="#home">
                <h2 className="text-3xl font-bold cursor-pointer flex items-center">
                    <img id='logo' className='' src={ images.logo } alt="logo" />
                </h2>
                </a>
                <div href="">
                    <GiHamburgerMenu />
                </div>
            </ul>
        </nav>
    </>
  )
}

export default NavMobile