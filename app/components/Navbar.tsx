import Image from 'next/image'
import Link from 'next/link'

const navIcons =[
  {src:'/assets/icons/search.svg',alt:'Search'},
  {src:'/assets/icons/black-heart.svg',alt:'heart'},
  {src:'/assets/icons/user.svg',alt:'user'},

]

const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='flex justify-between items-center px-6 md:px-20 py-4'>
       <Link href="/" className='flex items-center gap-1'>
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo"
          width={27}
          height={27}
        />
        <p className='font-spaceGrotesk text-[21px] text-secondary font-bold'>
          Bargain<span className='text-primary'>Bonanza</span>
        </p>
       </Link>
       <div className='flex items-center gap-5'>
          {
            navIcons.map((icon)=>{
              return(
                <Image
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  width={28}
                  height={28}
                  className='object-container'
                />
              )
            })
          }
       </div>
      </nav>
    </header>
  )
}

export default Navbar
