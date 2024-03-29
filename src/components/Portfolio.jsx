import prod2 from './../assets/msi.PNG'
import prod1 from './../assets/gth.PNG'
import prod3 from './../assets/bank.PNG'
import prod4 from './../assets/homee.PNG'
import prod5 from './../assets/easy.PNG'
import prod6 from './../assets/delivero.PNG'
import prod7 from './../assets/git.PNG'
import prod8 from './../assets/fylo.PNG'
import prod9 from './../assets/cock.PNG'
import spot from './../assets/spot.png'
import multi from './../assets/multi.jpg'
import hurley from './../assets/hurley.png'
import prod10 from './../assets/youtube.PNG'
import vete from './../assets/vete.jpg'
import startup from './../assets/startup.jpg'
import store21 from './../assets/store21.PNG'

import { motion } from "framer-motion"



const Porfolio = ({theme}) => {
  return (
        <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }} className='bg-white p-5 ease-linear duration-300'  style={{
        background: theme === 'dark' ? '#1a1a1a' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
    }}>
                <p className=' font-[700] border-b-4 w-fit border-b-mainblue mb-16  '>Portfolio</p>
    <div className="cards grid md:grid-cols-3 gap-5">

    <a href="https://store21-rtk-query.vercel.app/" target='_blank' rel="noreferrer"><div className=" hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg" >
            <img src={store21} alt="" className='w-full max-h-[150px] object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Store21</p>
            <p className=' ml-5 font-[400]  '>Ecommerce website using (Tailwind,React,Dummyjson<br/>,reduxToolkit)</p>

            </div>
        </div></a>


           <a href="https://startup-agency-nextjs-five.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg" >
            <img src={startup} alt="" className='w-full max-h-[150px] object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Startup Agency</p>
            <p className=' ml-5 font-[400]  '>Landing page (Tailwind,Next js, AOS)</p>

            </div>
        </div></a>
    <a href="https://sunny-sprinkles-430b07.netlify.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg" >
            <img src={vete} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Veterinary Landing page</p>
            <p className=' ml-5 font-[400]  '>Landing page (Tailwind, React js)</p>

            </div>
        </div></a>
    <a href="https://multi-step-form-react-redux-toolkit.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg" >
            <img src={multi} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Multi Step Form</p>
            <p className=' ml-5 font-[400]  '>Multi step form (Tailwind, Redux toolkit, React js)</p>

            </div>
        </div></a>

    <a href="https://store-omega-smoky.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg" >
            <img src={hurley} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>E-commerce Store</p>
            <p className=' ml-5 font-[400]  '>Store using Tailwind, Redux toolkit, React js</p>

            </div>
        </div></a>

    <a href="https://spotify-clone-two-sandy.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg" >
            <img src={spot} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Spotify Clone</p>
            <p className=' ml-5 font-[400]  '>Spotify Clone Using Tailwind, Material UI, React js</p>

            </div>
        </div></a>
         <a href="https://gthconsult-website.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg" >
            <img src={prod1} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Gth Website</p>
            <p className=' ml-5 font-[400]  '>A Landing page for the company</p>

            </div>
        </div></a>
        <a href="https://msi-app-player.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm  md:h-auto hover:cursor-pointer hover:shadow-lg">
            <img src={prod2} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Msi Landing Page</p>
            <p className=' ml-5 font-[400]  '>Clone landing page MSI app player</p>
                </div>
        </div></a>
        <a href="https://fylo-landing-page-with-two-column-layout-ssyk.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg">
            <img src={prod8} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Fyloo Landing page</p>
            <p className=' ml-5 font-[400]  '>Landing page using react + Tailwindcss</p>
                </div>
        </div></a>
        <a href="https://deliveroo-website-reactjs.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg">
            <img src={prod6} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Deliveroo Clone Website</p>
            <p className=' ml-5 font-[400]  '>Clone landing page Deliveroo</p>
                </div>
        </div></a>
        <a href="https://youtube-clone-sooty-ten.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg">
            <img src={prod10} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Youtube Clone Website</p>
            <p className=' ml-5 font-[400]  '>Clone landing page Youtube using Tailwindcss</p>
                </div>
        </div></a>
        <a href="https://github-finder-react-app-three.vercel.app//" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg">
            <img src={prod7} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Github Finder</p>
            <p className=' ml-5 font-[400]  '>Github Finder using react + Tailwindcss</p>
                </div>
        </div></a>
        <a href="https://hoobank-three-olive.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg">
            <img src={prod3} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Hoobank Landing page</p>
            <p className=' ml-5 font-[400]  '>Landing page with Tailwindcss and react js</p>
                </div>
        </div></a>
        <a href="https://home-market-place-gamma.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg">
            <img src={prod4} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>Home Market</p>
            <p className=' ml-5 font-[400]  '>Estate App Wich you can Sell or rent houses</p>
                </div>
        </div></a>
        <a href="https://easybank-landing-page-eight-indol.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg">
            <img src={prod5} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>EasyBank Landing Page</p>
            <p className=' ml-5 font-[400]  '>A Landing page created using Tailwind css and react</p>
                </div>
        </div></a>
        <a href="https://cocktail-seven.vercel.app/" target='_blank' rel="noreferrer"><div className="hover:scale-105 ease-linear duration-200 card shadow-sm md:h-auto hover:cursor-pointer hover:shadow-lg">
            <img src={prod9} alt="" className='w-full object-cover shadow-md' />
            <div className="py-5">
            <p className=' ml-5 font-[700] mt-5 mb-1   '>CocktailDB API</p>
            <p className=' ml-5 font-[400]  '>Cocktail website using CocktailDB API</p>
                </div>
        </div></a>

    </div>
    </motion.div>
  )
}

export default Porfolio