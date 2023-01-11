

const Aboutme = ({ theme }) => {
    return (
        <div className='bg-white flex flex-col   gap-6 ease-linear duration-300' style={{
            background: theme === 'dark' ? '#000' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
        }}>
            <div className="mb-8 mt-7  p-5">
                <p className='font-[700] border-b-4 w-fit border-b-mainblue mb-8 text-lg  '>About me</p>
                <p> <span className='font-bold Py-9'>TAALI Oussama</span>  Web Developer & Web Designer , Interested in everythings in relation with programming , coding , designing and discovering new technologies etc..</p>
            </div>
            <div className="bg-gray-50  py-10 px-5" style={{
                background: theme === 'dark' ? '#1c1c1c' : '#f7f7f7',
                color: theme === 'dark' ? '#fff' : '#000',
            }}>

                <p className='font-[700] border-b-4 w-fit border-b-mainblue my-10 text-lg  '>Services </p>
                <div className="grid md:grid-cols-2 gap-y-10 gap-x-5 ">
                    <div className="card shadow-md min-h-[200px] p-4 bg-white rounded-lg" style={{
                        background: theme === 'dark' ? '#454545' : '#fff',
                        color: theme === 'dark' ? '#fff' : '#000',
                    }}>
                        <h1 className='font-[600]   mb-3'>Web/mobile/Desktop Developpement</h1>
                        <p className='text-gray-700' style={{ color: theme === 'dark' ? '#fff' : '#000' }}>We develop any kind of web applications using Nestjs, Laravel,JEE or .NET Core for
                            back-end and React, Angular or even HTML/CSS for front-end.
                            We also develop desktop applications with Java Swing, WPF, UWP or ElectronJs.
                            Finally we didn't forget the mobile too so we develop to any platform using
                            React native or Flutter</p>

                    </div>
                    <div style={{
                        background: theme === 'dark' ? '#454545' : '#fff',
                        color: theme === 'dark' ? '#fff' : '#000',
                    }} className="card shadow-md min-h-[200px] p-4 bg-white rounded-lg">
                        <h1 className='font-[600]   mb-3'>UI/UX design</h1>
                        <p className='text-gray-700' style={{ color: theme === 'dark' ? '#fff' : '#000' }}>We design for both web and mobile android or IOS using the two best softwares Adobe XD for prototyping and Adobe Illustrator for graphic elements</p>
                    </div>
                    <div style={{
                        background: theme === 'dark' ? '#454545' : '#fff',
                        color: theme === 'dark' ? '#fff' : '#000',
                    }} className="card shadow-md min-h-[200px] p-4 bg-white rounded-lg">
                        <h1 className='font-[600]   mb-3'>Professional Design
                        </h1>
                        <p className='text-gray-700' style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Add to UI/UX design we do also professional design or commercial design includes flyers, business cards, logos or anything related to design as you like</p>
                    </div>
                    <div style={{
                        background: theme === 'dark' ? '#454545' : '#fff',
                        color: theme === 'dark' ? '#fff' : '#000',
                    }} className="card shadow-md min-h-[200px] p-4 bg-white rounded-lg">
                        <h1 className='font-[600]   mb-3'>Data Scrapy
                        </h1>
                        <p className='text-gray-700' style={{ color: theme === 'dark' ? '#fff' : '#000' }}>We can Scrape data from any website what either he needs authentification or no, we deliver data as Json file csv or excel file format or any other format that you find good</p>
                    </div>
                </div>
            </div>
            <div className="language-skils p-5 grid md:grid-cols-2 gap-8">
                <div className="">
                    <p className='font-[700] border-b-4 w-fit border-b-blue-400 mb-8 text-lg  '>Languages-frameworks-libraries</p>
                    <div className="mb-1 text-base  dark:text-white">HTML</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '90%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">CSS</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '90%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Javascript</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">React js</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Java</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '50%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">PHP</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">TailwindCSS</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '90%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Bootstrap</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '80%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Materialize , Bulma , Material UI</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Styled components</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Sass</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '85%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Axios</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                </div>
                <div className="skils">
                    <p className='font-[700] border-b-4 w-fit border-b-blue-400 mb-8 text-lg  '>Language Skills</p>

                    <div className="mb-1 text-base  dark:text-white">Berbere</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '100%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Arabic</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '100%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">French</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '79%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">English</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '60%' }}></div>
                    </div>
                    <p className='font-[700] border-b-4 w-fit border-b-blue-400 mb-8 text-lg mt-8 '>Softwares</p>
                    <div className="mb-1 text-base  dark:text-white">Adobe XD</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Adobe After Effect</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Adobe Premiere Pro</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '77%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Adobe Photoshop</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '100%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Adobe Illustrator</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '70%' }}></div>
                    </div>
                    <div className="mb-1 text-base  dark:text-white">Ms Word, Excel, PowerPoint</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                        <div className="bg-mainblue h-2 rounded-full dark:bg-blue-500" style={{ width: '80%' }}></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutme