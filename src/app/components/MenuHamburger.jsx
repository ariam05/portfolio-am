import React from 'react'
import NavLink from '/src/app/components/Navlink.jsx';

const MenuHamburger = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
        <li key={index}>
        <NavLink href={link.path} title={link.title} />
        </li>
        ))}
        </ul>
  )
}

export default MenuHamburger