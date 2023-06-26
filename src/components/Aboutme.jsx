import pic1 from '../assets/uix.svg'
import pic2 from '../assets/web.svg'

import pic3 from '../assets/dev.svg'
import pic4 from '../assets/brand.svg'

import { motion } from "framer-motion"


const Aboutme = ({ theme }) => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }} className='bg-white flex flex-col   gap-6 ease-linear duration-300' style={{
            background: theme === 'dark' ? '#000' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
        }}>
            <div className="mb-8 mt-7  p-5">
                <p className='font-[700] border-b-4 w-fit border-b-mainblue mb-8 text-lg  '>About me</p>
                <p> <span className='font-bold Py-9'>TAALI Oussama</span>  Frontend Developer & Web Designer , Interested in everythings in relation with programming , coding , designing and discovering new technologies etc..</p>
            </div>
            <div className="bg-gray-50  py-10 px-5" style={{
                background: theme === 'dark' ? '#1c1c1c' : '#f7f7f7',
                color: theme === 'dark' ? '#fff' : '#000',
            }}>

                <p className='font-[700] border-b-4 w-fit border-b-mainblue my-10 text-lg  '>Services </p>
                <div className="grid md:grid-cols-2 gap-y-10 gap-x-5 ">
                    <div className="card shadow-md min-h-[200px] p-4 bg-white rounded-lg flex flex-col justify-center items-center" style={{
                        background: theme === 'dark' ? '#454545' : '#fff',
                        color: theme === 'dark' ? '#fff' : '#000',
                    }}>
                        <img src={pic2} alt="" className='w-32 mb-2 hover:scale-110 ease-linear duration-200' />
                        <h1 className='font-[600]   mb-3'>Web Developpement</h1>
                        <p className='text-gray-700' style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Creating, building, and maintaining websites and web applications that run online on a browser.</p>

                    </div>
                    <div style={{
                        background: theme === 'dark' ? '#454545' : '#fff',
                        color: theme === 'dark' ? '#fff' : '#000',
                    }} className="card shadow-md min-h-[200px] p-4 bg-white rounded-lg flex flex-col justify-center items-center">
                        <img src={pic1} alt="" className='w-32 mb-2 hover:scale-110 ease-linear duration-200' />

                        <h1 className='font-[600]   mb-3'>UI/UX design</h1>
                        <p className='text-gray-700' style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Good looking user interfaces with a good user experience</p>
                    </div>
                    <div style={{
                        background: theme === 'dark' ? '#454545' : '#fff',
                        color: theme === 'dark' ? '#fff' : '#000',
                    }} className="card shadow-md min-h-[200px] p-4 bg-white rounded-lg flex flex-col justify-center items-center">
                                                <img src={pic4} alt="" className='w-32 mb-2 hover:scale-110 ease-linear duration-200' />

                        <h1 className='font-[600]   mb-3'>Graphic Design
                        </h1>
                        <p className='text-gray-700' style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Design professional design or commercial design includes flyers, business cards, logos or anything related to design as you like</p>
                    </div>
                    <div style={{
                        background: theme === 'dark' ? '#454545' : '#fff',
                        color: theme === 'dark' ? '#fff' : '#000',
                    }} className="card shadow-md min-h-[200px] p-4 bg-white rounded-lg flex flex-col justify-center items-center">
                        <img src={pic3} alt="" className='w-32 mb-2 hover:scale-110 ease-linear duration-200' />

                        <h1 className='font-[600]   mb-3'>Professional Editing Video / Pictures
                        </h1>
                        <p className='text-gray-700' style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Professional video / picture editing with advanced skills and knowledge of the latest editing software, tools and techniques</p>
                    </div>
                </div>
            </div>
            <div className="language-skils p-5 grid md:grid-cols-2 gap-8">
                <div className="">
                    <p className='font-[700] border-b-4 w-fit border-b-blue-400 mb-8 text-lg  '>Languages-frameworks-libraries</p>
                    <div className="mb-1 text-base">HTML</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '90%' }}></div>
                    </div>
                    <div className="mb-1 text-base">CSS</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '90%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Javascript</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base">React js</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '85%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Java</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '40%' }}></div>
                    </div>
                    <div className="mb-1 text-base">PHP</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                    </div>
                    <div className="mb-1 text-base">TailwindCSS</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '90%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Bootstrap</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '80%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Materialize , Bulma , Material UI</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '60%' }}></div>
                    </div>
                    <div className="mb-1 text-base">ReduxToolkit</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '80%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Styled components</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Next Js</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Sass</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '85%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Axios</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                </div>
                <div className="skils">
                    <p className='font-[700] border-b-4 w-fit border-b-blue-400 mb-8 text-lg  '>Language Skills</p>

                    <div className="mb-1 text-base">Berbere</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '100%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Arabic</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '100%' }}></div>
                    </div>
                    <div className="mb-1 text-base">French</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '79%' }}></div>
                    </div>
                    <div className="mb-1 text-base">English</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '60%' }}></div>
                    </div>
                    <p className='font-[700] border-b-4 w-fit border-b-blue-400 mb-8 text-lg mt-8 '>Softwares</p>
                    <div className="mb-1 text-base">Adobe XD</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Adobe After Effect</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Adobe Premiere Pro</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '77%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Adobe Photoshop</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '100%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Adobe Illustrator</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base">Ms Word, Excel, PowerPoint</div>
                    <div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-1 rounded-full dark:bg-blue-500" style={{ width: '80%' }}></div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Aboutme