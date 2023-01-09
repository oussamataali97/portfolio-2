import prod2 from './../assets/msi.PNG'
import prod1 from './../assets/gth.PNG'
import prod3 from './../assets/bank.PNG'
import prod4 from './../assets/homee.PNG'
import prod5 from './../assets/easy.PNG'

const Porfolio = () => {
  return (
    <div className='bg-white p-5 '>
                <p className=' font-[700] border-b-4 w-fit border-b-mainblue mb-16  '>Portfolio</p>
    <div className="cards grid md:grid-cols-3 gap-5 ">
         <a href="https://gthconsult-website.vercel.app/" target='_blank' rel="noreferrer"><div className="card shadow-sm h-64 hover:cursor-pointer hover:shadow-lg">
            <img src={prod1} alt="" className='w-full object-cover' />
            <p className=' ml-5 font-[500] mt-5  '>Gth Website</p>
            <p className=' ml-5 font-[400]  '>A Landing page for the company</p>

        </div></a>
        <a href="https://msi-app-player.vercel.app/" target='_blank' rel="noreferrer"><div className="card shadow-sm h-64 hover:cursor-pointer hover:shadow-lg">
            <img src={prod2} alt="" className='w-full object-cover' />
            <p className=' ml-5 font-[500] mt-5  '>Msi Landing Page</p>
            <p className=' ml-5 font-[400]  '>Clone landing page MSI app player</p>

        </div></a>
        <a href="https://hoobank-three-olive.vercel.app/" target='_blank' rel="noreferrer"><div className="card shadow-sm h-64 hover:cursor-pointer hover:shadow-lg">
            <img src={prod3} alt="" />
            <p className=' ml-5 font-[500] mt-5  '>Hoobank Landing page</p>
            <p className=' ml-5 font-[400]  '>Landing page with Tailwindcss and react js</p>

        </div></a>
        <a href="https://home-market-place-gamma.vercel.app/" target='_blank' rel="noreferrer"><div className="card shadow-sm h-64 hover:cursor-pointer hover:shadow-lg">
            <img src={prod4} alt="" />
            <p className=' ml-5 font-[500] mt-5  '>Home Market</p>
            <p className=' ml-5 font-[400]  '>Estate App Wich you can Sell or rent houses</p>

        </div></a>
        <a href="https://easybank-landing-page-eight-indol.vercel.app/" target='_blank' rel="noreferrer"><div className="card shadow-sm h-64 hover:cursor-pointer hover:shadow-lg">
            <img src={prod5} alt="" />
            <p className=' ml-5 font-[500] mt-5  '>EasyBank Landing Page</p>
            <p className=' ml-5 font-[400]  '>A Landing page created using Tailwind css and react</p>

        </div></a>

    </div>
    </div>
  )
}

export default Porfolio