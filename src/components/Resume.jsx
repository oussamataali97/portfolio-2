import { MdWork } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'

const Resume = () => {
  return (
    <div className='resume bg-white flex flex-col p-5  gap-6'>

      <p className='font-[700] border-b-4 w-fit border-b-mainblue mb-8 text-lg  '>Resume</p>

      <div className="grid md:grid-cols-2">
        <div className="left relative">
          <p className='flex items-center font-[700] text-md'> <span className='bg-mainblue p-4  rounded-full mr-4'><MdWork className='text-2xl  text-white' /></span>  Experience History</p>

          <ul className='ml-7'>
            <li className="ml-5">ㅤ</li>
            <li className="ml-5">ㅤ</li>

            <li className=' ml-5 '> <p className='font-[600]  '><span className='text-mainblue'> Gth Consult</span> - Web Developer</p>
              <p className='font-[500] text-gray-700 '>Nov 2022 - DEC 2022</p>
              <p className='font-[400] text-gray-500'>• Build website for the company.<br />
                • Redesign admin dashboard using vuejs
                html css</p>
            </li>
            <li className=' ml-5 mt-8 '> <p className='font-[600]  '>Build Websites And Apps </p>
              <p className='font-[500] text-gray-700 '>June 2020 - Present</p>
              <p className='font-[400] text-gray-500'>
              • Build Clone websites<br />
              • Build Clone Apps<br />
• Design flyers,Logos, and business cards.<br />
• Create web designUI using AdobeXD<br />
• Edit, manipulate pictures with photoshop


                </p>
            </li>
            <li className=' ml-5 mt-8 '> <p className='font-[600]  '><span className='text-mainblue'> ORMVAT</span> - Web Developer INTERNSHIP</p>
              <p className='font-[500] text-gray-700 '>Avril 2018 - May-2018</p>
              <p className='font-[400] text-gray-500'>

              • Building website for the company<br />
• Build script that convert excel data to
Charts.<br />
• Technologie:PHP,Javascript,Html,Css,
Bootstrap.<br />
• Project management: Gant Project.
                </p>
            </li>

            <li className=' ml-5 mt-8 '> <p className='font-[600]  '><span className='text-mainblue'> ARCO PRINT</span> - GRAPHIC DESIGN INTERNSHIP</p>
              <p className='font-[500] text-gray-700 '>Avril 2017 - May-2017</p>
              <p className='font-[400] text-gray-500'>

              • Analysis of customerrequests<br />
• Design flyers, tarpaulins, Logos, and
business cards.<br />
• Createmockup.<br />
• Creating graphic elements (photos, logos,
icons).
                </p>
            </li>
            <li className=' ml-5 mt-8 '> <p className='font-[600]  '><span className='text-mainblue'> REANAULT NISSAN</span> - ACADEMIC INTERNSHIP </p>
              <p className='font-[500] text-gray-700 '>MAI 2016 - May-2016</p>

            </li>
          </ul>
        </div>



        <div className="right relative">
          <p className='flex items-center font-[700] text-md mt-10 md:mt-0 '> <span className='bg-mainblue p-4  rounded-full mr-4'><FaUserGraduate className='text-2xl  text-white' /></span> Education History</p>

          <ul className='ml-7'>
            <li className="ml-5">ㅤ</li>
            <li className="ml-5">ㅤ</li>

            <li className=' ml-5 '> <p className='font-[600]  '><span className='text-mainblue'> UNIVERSITY DEGREE  </span> -  FST Errachidia</p>
              <p className='font-[500] text-gray-700 '>June 2019 - October 2020</p>
              <p className='font-[400] text-gray-500'>University degree at SOFTWARE ENGINEERING</p>
            </li>
            <li className=' ml-5 mt-8 '> <p className='font-[600]  '><span className='text-mainblue'> Superior Technician Certificate </span> - BTS Errachidia</p>
              <p className='font-[500] text-gray-700 '>Sep 2016 - Juin 2018</p>
              <p className='font-[400] text-gray-500'>Diploma at Multimedia and web master degree</p>
            </li>
            <li className=' ml-5 mt-8 '> <p className='font-[600]  '><span className='text-mainblue'> BACHELOR'S DEGREE </span> - Technical School Errachidia</p>
              <p className='font-[500] text-gray-700 '>Sep 2012 - Juin 2015</p>
              <p className='font-[400] text-gray-500'>Baccalaureat in MECHANICAL SCIENCES AND TECHNIQUES
 </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resume