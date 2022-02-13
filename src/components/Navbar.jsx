import { useState } from 'react';
import Logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);
  
  const handleClick = () => {
    setNavOpen(!navOpen)
  }

  return (
    <nav className='font-poppins font-bold text-white md:text-grayishViolet md:flex md:px-60 md:py-7 md:items-center relative'>
      <div className='flex items-center justify-between px-6 py-4 md:px-0 md:py-0'>
        <img src={Logo} alt="Shortly" className='cursor-pointer' />
        <FaBars color='gray' size='30px' className='md:hidden' onClick={handleClick}/>
      </div>
      <div className={`space-y-5 md:space-y-0 rounded-lg md:rounded-none w-4/5 bg-primaryDarkViolet text-center mx-auto md:mx-0 md:flex md:justify-between md:items-baseline md:w-full md:px-5 md:bg-white ${navOpen ? '' : 'hidden'} absolute left-10 top-20 md:relative md:top-0 z-50`}>
        <div>
          <ul className='space-y-5 md:space-y-0 md:flex md:space-x-5 md:items-center'>
            <li className='hover:text-black cursor-pointer pt-5 md:pt-0'>Features</li>
            <li className='hover:text-black cursor-pointer'>Pricing</li>
            <li className='hover:text-black cursor-pointer'>Resources</li>
          </ul>
        </div>
        <div>
          <ul className='space-y-5 md:space-y-0 md:flex md:space-x-5 md:items-center'>
            <li className='hover:text-black cursor-pointer'>Login</li>
            <li className='pb-6 md:pb-0'>
              <button className={`py-2 w-4/5 bg-primaryCyan font-bold text-white md:w-36 rounded-3xl md:py-2 hover:bg-opacity-80`}>
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
