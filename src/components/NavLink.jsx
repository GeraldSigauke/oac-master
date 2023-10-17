import React from 'react'

const NavLink = ({ navLink }) => {
  return (
    <>
        <li className="hover:text-[#ff4d00]">
        <a href={ navLink.url }>{ navLink.link }</a>
        </li>
    </>
  )
}

export default NavLink