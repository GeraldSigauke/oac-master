import React from 'react'
import { useState } from 'react'
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Nav = () => {
    const [mobile, setMobile] = useState(false);
  return (
    <>
        <NavDesktop />
        <NavMobile />
    </>
  )
}

export default Nav