'use client'
import Image from "next/image"
import Searchbar from "./components/Searchbar"
import HeroCarousel from "./components/HeroCarousel"

const Home = () => {
  return (
    <>
    <section className='px-6  md:px-20 py-24'>
      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>
          <p className='small-text'>
            Smart Shopping Starts Hear:
            <Image 
              src="/assets/icons/arrow-right.svg"
              alt='Arrow'
              width={16}
              height={16}
            />
          </p>
          <h1 className="head-text">
            Unleash the Power of
            <span className="text-primary"> Bargain Bonanza</span>
          </h1>
          <p className="font-spaceGrotesk mt-6">
          Powerful, self-serve product and growth
          analytics to help you convert, engage, and
          retain more.
          </p>
          <Searchbar/>
         
        </div>
        <HeroCarousel/>
      </div>

    </section>
    <section className="trending-section">
      <h2 className="section-text">Treading</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {['Apple Iphone 15','Book',"Sneakers"].map((item)=>(
          <div>{item}</div>
        ))}
      </div>
    </section>
    </>
  )
}


export default Home
