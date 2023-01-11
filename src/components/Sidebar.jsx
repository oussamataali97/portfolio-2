import React from 'react'
import oussama from './../assets/ouss.jpg'
import cv from '../assets/cv.pdf'

import {AiOutlineDownload} from 'react-icons/ai'

const Sidebar = ({theme}) => {
  return (
    <div className='bg-white px-1 py-6  md:p-4  rounded-md w-full ease-linear duration-300'  style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
    }}>
        <p className='font-bold text-xl text-center'>Mr OUSSAMA TAALI</p>
        <p className='font-normal text-gray-500 text-center'>Frontend developer & web designer</p>
        <figure className='profile-img'>
            <img src={oussama} alt="" />
        </figure>
<div className="stats px-2">
    <ul className='mt-8 space-y-5 relative text-[13px] '>
        <li className="ml-4 md:ml-2">ㅤ</li>
        <li className="ml-4 md:ml-2 font-bold ">Name : <span className='font-normal text-gray-500'>Taali Oussama</span></li>
        <li className="ml-4 md:ml-2 font-bold ">Birthday : <span className='font-normal text-gray-500'>07 mai 1997</span></li>
        <li className="ml-4 md:ml-2 font-bold ">Phone Number :<span className='font-normal text-gray-500'>+212 653515092</span></li>
        <li className="ml-4 md:ml-2 font-bold ">Email: <span className='font-normal text-gray-500'>oussamataali1997@gmail.com</span></li>


    </ul>
</div>
<a href={cv} download="Oussama_Taali_resume" className='bg-mainblue text-white py-3  font-semibold rounded-full w-full flex items-center justify-center mt-8'>Download resume <AiOutlineDownload className='ml-2 text-xl'/> </a>
    </div>
  )
}

export default Sidebar