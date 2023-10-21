import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline, IoPersonOutline } from 'react-icons/io5';
import { HiBars3BottomLeft, HiMiniXMark, HiOutlineShoppingCart } from 'react-icons/hi2';
import { LuSearch } from 'react-icons/lu';

const MobileMenu = () => {

    const [isToggle, setIsToggle] = useState(false);
    // const [searchBg , setSearchBg] = useState(false)

    const handleToggleMenu = () => {
        setIsToggle(!isToggle)
    }
    // const handleSearchBackground = () => {
    //     setSearchBg(!searchBg)
    // }
    return (
        <div className='lg:hidden relative'>
            {/* <div className={`fixed top-0 py-2  w-full flex items-center justify-center z-[999] ${searchBg && 'bg-primary'} `}>
                <div onFocus={handleSearchBackground}  className='w-[90vw] shadow-lg'>
                    <form action="">
                        <div className='flex items-center pl-3 py-1 bg-white'>
                            <div>
                                <LuSearch />
                            </div>
                            <div className='w-full'>
                                <input type="text" className='w-full px-3 py-1 outline-none' placeholder='Search...' />
                            </div>
                        </div>
                    </form>
               </div> 
            </div> */}
            <div className={`mobile-left ${isToggle ? 'fixed' : 'hidden'}`}>
                <ul>
                    <li className='border-b flex px-5 py-2 items-center justify-between border-gray-200'>
                        <div className='text-3xl  text-text-color font-bold'>STORE<span className='text-primary'>MI</span></div>
                        <span onClick={ handleToggleMenu } className='flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-slate-100'><HiMiniXMark /></span>
                    </li>
                    <li><Link to={'/'} className='mobilemenu' >home</Link></li>
                    <li><Link to={'/dashboard/add-product'} className='mobilemenu' >Add Product</Link></li>
                    <li><Link to={'/my-cart'} className='mobilemenu' >My Cart</Link></li>
                    <li><a href="#" className='mobilemenu' >My Cart</a></li>
                    <li><a href="#" className='mobilemenu' >Login</a></li>
                </ul>
            </div>
            <div className='mobilembttom'>
                <ul className='flex items-center justify-around'>
                    <li><button onClick={ handleToggleMenu } className='mobilemenu-icon'> <HiBars3BottomLeft className='text-xl' /></button></li>
                    <li><Link to={'/'} className='mobilemenu-icon'> <IoHomeOutline className='text-xl' /></Link></li>
                    <li className='cartLi'>
                        <Link to={'/my-cart'} className='mobilemenu-icon -top-12   absolute'>
                            <span className='mobileCartStyle '>
                                <HiOutlineShoppingCart className='text-3xl text-white' />  
                                <span className='countMobile'>2</span>
                            </span>
                        </Link>
                    </li>
                    {/* <span className='absolute -top-1 -right-2 w-5 h-5 text-xs text-white bg-primary rounded-full flex items-center justify-center'>2</span> */}
                    <li><button className='mobilemenu-icon relative'> <LuSearch  className='text-xl' /> </button></li>
                    <li><Link to={'/login'} className='mobilemenu-icon'> <IoPersonOutline className='text-xl' /></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;