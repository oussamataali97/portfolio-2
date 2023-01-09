import React from 'react'

const Footer = () => {
    const date=new Date().getFullYear()
    console.log(date)
  return (
    <div className='p-5 bg-mainblue mt-5 flex justify-between text-white font-[600] rounded-md'>
        <p>Oussama TAALI</p>
        <p>{date} All rights reserved </p>
    </div>
  )
}

export default Footer