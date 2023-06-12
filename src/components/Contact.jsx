import {FiSend} from 'react-icons/fi'
import {AiOutlineInstagram,AiOutlineGithub} from 'react-icons/ai'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineBehance} from 'react-icons/ai'
import { motion } from "framer-motion"


const Contact = ({theme}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className='bg-white flex flex-col md:flex-row justify-between p-5 items-start md:h-screen gap-6 duration-300 ease-linear'  style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
  }}>
        <div className="flex-1 w-full ">
        <p className='font-[700] border-b-4 w-fit border-b-mainblue mb-5 mt-10 md:mt-0 '>Contact Form</p>
        <form action="" className='flex flex-col p-3   '>
            <input type="text" className='border-b-[1px]  outline-0 py-3 border-b-gray-400 mb-5' placeholder='Email'  style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
  }}/>
            <textarea name="" className='border-b-[1px] outline-0 py-3 border-b-gray-400' id="" placeholder='Message ...' style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
  }}></textarea>
        </form>
        <button className='bg-mainblue text-white py-2 px-5 mt-5 font-semibold  rounded-full  flex items-center justify-center '>Send <FiSend className='ml-2 text-xl'/> </button>
        </div>
        <div className="flex-1 mt-16 md:mt-0 ">
            <p className='font-[700] border-b-4 w-fit border-b-mainblue mb-5  '>Contact Informations</p>
            <ul className='leading-[50px]'>
            <li className=" font-[600] ">Address : <span className='font-normal text-gray-500'>ORMVAT Immeuble El Biada n2</span></li>
        <li className=" font-[600] ">Job : <span className='font-normal text-gray-500'>Frontend Developer / Web Designer</span></li>
        <li className=" font-[600] ">Phone Number : <span className='font-normal text-gray-500'>+212 653515092</span></li>
        <li className=" font-[600] ">Email : <span className='font-normal text-gray-500'>oussamataali1997@gmail.com</span></li>
            </ul>
            <ul className=' items-center  space-x-4 flex text-lg mt-5'>
            <li className='hover:text-mainblue cursor-pointer hover:text-xl '><a href="https://www.instagram.com/taali.oussama/"><AiOutlineInstagram/></a></li>
                    <li className='hover:text-mainblue cursor-pointer hover:text-xl '><a href="https://www.linkedin.com/in/oussama-taali-02149316a/"><FaLinkedinIn/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-xl '><a href="https://web.facebook.com/taali.oussama/"><FaFacebookF/></a></li>
                    <li className='hover:text-mainblue cursor-pointer hover:text-xl '><a href="https://www.behance.net/oussamataali"><AiOutlineBehance/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-xl '><a href="https://github.com/oussamataali97"><AiOutlineGithub/></a></li>


                </ul>
        </div>
    </motion.div>
  )
}

export default Contact