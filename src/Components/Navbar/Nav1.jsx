import React, { useState } from 'react'
import './Nav1.css'; // Assuming you have a CSS file for styling
import logo from '../../Assets/Logo/Logo.jpg';
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Nav1 = () => {
  let Links =[
    {name:"HOME",link:"#home",id:1},
    {name:"About",link:"#about",id:2},
    {name:"Members",link:"#member",id:3},
    {name:"Events",link:"#events",id:4},
    {name:"Contact",link:"#contact",id:5}
  ];
  let [open, setOpen] =useState(false);

  return (
    <div>
       <div className='shadow-md w-full sticky top-0 left-0'>
           <div className='md:flex items-center justify-between back bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <img src={logo} alt=''/>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-9 h-9'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} key={link.id} className='text-gray-800 nav-txt hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
            </ul>
            {/* button */}
           </div>
        </div>
    </div>
  )
}

export default Nav1
