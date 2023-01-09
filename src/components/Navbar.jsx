import React, { useState } from 'react'
import {AiFillHome,AiOutlineMenu,AiOutlineInstagram,AiOutlineGithub} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import Home from './Home'
const Navbar = () => {
    const [toggle,setToggle] =useState(false)
    const [click,setClick]=useState('Resume')
    const handleClick = (e) =>{
        console.log(e)
        setClick(e.target.innerHTML)
    }

    const handlePath =(e)=>{
        setClick(e.target.outerHTML)
        console.log(e)
    }
    console.log(click)
    return (
        <>
        <div className='bg-white flex justify-between items-center  relative mt-5 md:mt-0'>
            <div className="left">
                <ul className=' items-center  flex space-x-5 font-semibold uppercase '>
                    <li onClick={handlePath}  className=' text-xl bg-mainblue px-4 py-4 cursor-pointer text-white rounded-l-lg '> <AiFillHome/> </li>
                    <li onClick={handleClick}  className='hidden md:block hover:text-mainblue cursor-pointer'>Resume</li>
                    <li  onClick={handleClick} className='hidden md:block hover:text-mainblue cursor-pointer'>Portfolio</li>
                    <li onClick={handleClick}  className='hidden md:block hover:text-mainblue cursor-pointer'>Contact</li>
                </ul>
            </div>
            <div className="hidden md:flex items-center px-2">
            <ul className=' items-center space-x-4 flex text-xs'>
            <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://www.instagram.com/taali.oussama/"><AiOutlineInstagram/></a></li>
                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://www.linkedin.com/in/oussama-taali-02149316a/"><FaLinkedinIn/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://web.facebook.com/taali.oussama/"><FaFacebookF/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://github.com/oussamataali97"><AiOutlineGithub/></a></li>
                </ul>
                <button className='bg-mainblue text-white py-2 px-5 font-semibold ml-3 rounded-full  flex items-center justify-center '>Hire Me <FiSend className='ml-2 text-xl'/> </button>

            </div>
            <AiOutlineMenu className='block md:hidden text-2xl m-5' onClick={() =>setToggle(!toggle)}/>

        </div>
        {toggle && (
                   <ul className=' items-center bg-white flex-col space-y-5 py-5  flex  font-semibold uppercase '>
                   <li onClick={handleClick}  className='block hover:text-mainblue cursor-pointer'>Resume</li>
                   <li  onClick={handleClick} className='block hover:text-mainblue cursor-pointer'>Portfolio</li>
                   <li onClick={handleClick}  className='block hover:text-mainblue cursor-pointer'>Contact</li>
                   <ul className=' items-center space-x-4 flex text-xs'>
                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://www.instagram.com/taali.oussama/"><AiOutlineInstagram/></a></li>
                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://www.linkedin.com/in/oussama-taali-02149316a/"><FaLinkedinIn/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://web.facebook.com/taali.oussama/"><FaFacebookF/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://github.com/oussamataali97"><AiOutlineGithub/></a></li>


                </ul>
               </ul>
             )}
        <Home click={click}/>
        </>
    )
}

export default Navbar