import {FiSend} from 'react-icons/fi'
import {AiOutlineInstagram,AiOutlineGithub} from 'react-icons/ai'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-white flex flex-col md:flex-row justify-between p-5 items-start md:h-screen gap-6'>
        <div className="flex-1 w-full ">
        <p className='font-[700] border-b-4 w-fit border-b-mainblue mb-5 mt-10 md:mt-0 '>Contact Form</p>
        <form action="" className='flex flex-col p-3  leading-[50px] '>
            <input type="text" className='border-b-[1px] outline-0 py-3 border-b-gray-400' placeholder='Email' />
            <textarea name="" className='border-b-[1px] outline-0 py-3 border-b-gray-400' id="" placeholder='Message ...'></textarea>
        </form>
        <button className='bg-mainblue text-white py-2 px-5 mt-5 font-semibold  rounded-full  flex items-center justify-center '>Send <FiSend className='ml-2 text-xl'/> </button>
        </div>
        <div className="flex-1 mt-16 md:mt-0 ">
            <p className='font-[700] border-b-4 w-fit border-b-mainblue mb-5  '>Contact Informations</p>
            <ul className='leading-[50px]'>
            <li className=" font-[600] ">Address : <span className='font-normal text-gray-500'>ORMVAT Immeuble El Biada n2</span></li>
        <li className=" font-[600] ">Job : <span className='font-normal text-gray-500'>Frontend Developer / Web Designer</span></li>
        <li className=" font-[600] ">Phone Number : <span className='font-normal text-gray-500'>+212 653515092</span></li>
        <li className=" font-[600] ">Email : <span className='font-normal text-gray-500'>oussamataali@gmail.com</span></li>
            </ul>
            <ul className=' items-center  space-x-4 flex text-xs mt-5'>
            <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://www.instagram.com/taali.oussama/"><AiOutlineInstagram/></a></li>
                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://www.linkedin.com/in/oussama-taali-02149316a/"><FaLinkedinIn/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://web.facebook.com/taali.oussama/"><FaFacebookF/></a></li>

                    <li className='hover:text-mainblue cursor-pointer hover:text-sm '><a href="https://github.com/oussamataali97"><AiOutlineGithub/></a></li>


                </ul>
        </div>
    </div>
  )
}

export default Contact