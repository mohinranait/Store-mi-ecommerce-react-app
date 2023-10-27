import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const CartItems = () => {
    return (
        <>
            <div className="grid grid-cols-4 px-5 py-3 lg:py-1   items-center ">
                <div className="col-span-3 row-span-2 lg:row-span-1 lg:col-span-2 flex  py-2  md:lg:flex-row lg:items-center gap-3">
                    <Link to={'/products'}>
                        <img className="w-16 h-16 sm:w-24 sm:h-24 " src="https://demo-uminex.myshopify.com/cdn/shop/files/col_3_3.png?v=1681548716&width=1500" alt="" />
                    </Link>
                    <div>
                        <Link to={'/products'} className="block font-semibold text-sm sm:text-base md:text-lg text-gray-800">Product Names akta dilam</Link>
                        <p className="text-sm md:text-base text-gray-500"><span className="font-semibold">Color</span> <span className="text-gray-400">Red</span></p>
                    </div>
                </div>
                <div>
                    <p className="flex text-sm justify-end items-center gap-3"><span className="text-gray-800 sm:text-lg lg:text-lg font-semibold">$100</span> <span className="text-gray-600 text-sm font-medium hidden lg:block">$120</span> </p>
                </div>
                <div className=" flex justify-end gap-10">
                    <div className="flex items-center gap-2">
                        <button className="w-6 h-6 lg:h-8 lg:w-8 rounded-full border flex items-center justify-center text-lg">-</button>
                        <span>2</span>
                        <button className="w-6 h-6 lg:h-8 lg:w-8 rounded-full border flex items-center justify-center text-lg">+</button>
                    </div>
                    <div className='hidden xl:block'>
                        <span className="lg:h-9 lg:w-9 rounded-full border cursor-pointer flex items-center justify-center"><IoCloseSharp /></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItems;