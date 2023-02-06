import React, { useState } from 'react'
import {AiFillHome,AiOutlineMenu,AiOutlineBehance,AiOutlineClose,AiOutlineInstagram,AiOutlineGithub} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'
import {BsFillMoonFill ,BsFillSunFill} from 'react-icons/bs'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import Home from './Home'
const Navbar = ({toggleTheme,theme}) => {

    const [toggle,setToggle] =useState(false)
    const [click,setClick]=useState('home')
    const [path,setPath]=useState('Resume')
    const handleClick = (e) =>{
        console.log(e)
        setClick(e.target.innerHTML)
    }

    const handlePath =(e)=>{
        setClick(e.target.id)
        setPath(e.target.outerHTML)
        console.log(e,'hh')
    }
    console.log(click)
    return (
        <>
        <div className='bg-white ease-linear  duration-300 flex justify-between items-center  relative mt-5 md:mt-0 rounded-l-lg'     style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}>
            <div className="left">
                <ul className=' items-center  flex space-x-5 font-semibold uppercase '>
                    <li onClick={handlePath} id="home"  className=' text-xl bg-mainblue hover:bg-blue-400 px-6 md:px-4 py-6 md:py-4 cursor-pointer text-white rounded-l-lg '><AiFillHome/> </li>
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
                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://www.behance.net/oussamataali"><AiOutlineBehance/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://github.com/oussamataali97"><AiOutlineGithub/></a></li>
                </ul>
                <a href="mailto:oussamataali1997@gmail.com"><button className='bg-mainblue text-white py-2 px-5 font-semibold ml-3 rounded-full  flex items-center justify-center '>Hire Me <FiSend className='ml-2 text-xl'/> </button></a>
                <button className='ml-2 text-xl' onClick={toggleTheme}> { theme === 'light' ? <BsFillMoonFill/> : <BsFillSunFill/>} </button>
            </div>

           { toggle ?
           <>
                           <button className='ml-2 md:hidden text-xl ' onClick={toggleTheme}> { theme === 'light' ? <BsFillMoonFill/> : <BsFillSunFill/>} </button>

           <AiOutlineClose className='block md:hidden text-2xl m-5 ease-linear duration-300' onClick={() =>setToggle(!toggle)}/> </> :
           <>
                           <button className='ml-2 md:hidden text-xl  ' onClick={toggleTheme}> { theme === 'light' ? <BsFillMoonFill/> : <BsFillSunFill/>} </button>

           <AiOutlineMenu className='block md:hidden text-2xl m-5 ease-linear duration-300 self-end' onClick={() =>setToggle(!toggle)}/></>


           }

        </div>
        {toggle && (
                   <ul className=' items-center ease-linear duration-300 bg-white flex-col space-y-5 py-5  flex  font-semibold uppercase ' style={{
                    background: theme === 'dark' ? '#1a1a1a' : '#fff',
                    color: theme === 'dark' ? '#fff' : '#000',
                }}>
                   <li onClick={handleClick}  className='block hover:text-mainblue cursor-pointer'>Resume</li>
                   <li  onClick={handleClick} className='block hover:text-mainblue cursor-pointer'>Portfolio</li>
                   <li onClick={handleClick}  className='block hover:text-mainblue cursor-pointer'>Contact</li>
                   <ul className=' items-center space-x-4 flex text-xs'>
                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://www.instagram.com/taali.oussama/"><AiOutlineInstagram/></a></li>
                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://www.linkedin.com/in/oussama-taali-02149316a/"><FaLinkedinIn/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://web.facebook.com/taali.oussama/"><FaFacebookF/></a></li>
                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://www.behance.net/oussamataali"><AiOutlineBehance/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://github.com/oussamataali97"><AiOutlineGithub/></a></li>


                </ul>
               </ul>
             )}
        <Home click={click} theme={theme} path={path}/>
        </>
    )
}

export default Navbar