import React, {useState} from 'react'
import logo1 from '../assets/logo.png';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {
    FaFacebook, 
    FaTwitter, 
    FaInstagram, 
    FaPinterest, 
    FaYoutube,
} from 'react-icons/fa';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    };
  return (

    <div>
        <div className='w-screen h-[85px] z-10 bg-black fixed flex justify-between items-center px-4'>
            <div>
                <img onClick={handleNav} className={logo ? 'hidden' : 'block'} src={logo1} alt="company logo" class="w-44 cursor-pointer py-0" />
            </div>
            <ul className='hidden md:flex text-lg mr-4 sm:text-lg text-[#F59E0B]'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#" className='text-black bg-amber-500 rounded-3xl px-3 py-1 font-bold hover:bg-transparent hover:text-yellow-50 hover:border-white duration-900'>BookNow</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </div>
        
            {/* Mobile Menu Hamburger */}

        <div onClick={handleNav} className='hidden md:flex'>
                {nav ? <AiOutlineClose className='text-white' size={20} /> : <HiOutlineMenuAlt4 className='text-white' size={20} />}
        </div>
        
            {/* Mobile Menu dropdown */}
        
        <div onClick={handleNav} className={nav ? 'absolute text-amber-500 left-0 top-0 w-full bg-gray/70 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
            <img onClick={handleNav} className={logo ? 'hidden' : 'block'} src={logo1} alt="company logo" class="w-48 cursor-pointer py-0" />   
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>Views</li>
            <li className='border-b'>Book</li>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
                <FaFacebook className='icon' />
                <FaTwitter className='icon' />
                <FaInstagram className='icon' />
                <FaPinterest className='icon' />
                <FaYoutube className='icon' />
            </div>
        </ul>
    </div>
</div>
  )
}

export default Navbar