
import ProductRating from '../../global/ProductRating';
import { useState } from 'react';
import { LuHeart, LuLayers, LuMapPin, LuShare2 } from 'react-icons/lu';
import { IoCashOutline, IoCheckmarkDoneCircleOutline, IoShieldCheckmarkOutline, IoSwapHorizontalOutline } from 'react-icons/io5';
import { FaTruckMoving } from 'react-icons/fa';
import ProductGallary from '../../components/ProductGallary/ProductGallary';
import { HiMiniChevronLeft, HiMiniChevronRight } from 'react-icons/hi2';



const Products = () => {
    const [color, setColor] = useState('Red');
    const [size, setSize] = useState("2GB");
    const [quantity, setQuantity] = useState(1);


    const colorVariant = (color) => {
        setColor(color)
    }
    const sizeVariant = (size) => {
        setSize(size)
    }

   

    const handleIncrement = () => {
        if( quantity <= 9  ){
            setQuantity(quantity + 1)
        }
    }

    const handleDecrement =() => {
        if( quantity > 1 ){
            setQuantity(quantity - 1)
        }
    }


    return (
        <>
            <section>
                <div className="box py-4 flex items-center justify-between">
                    <ul className='flex items-center gap-1 font-medium text-base text-[#8D979E] '>
                        <li><a href='#' className='hover:text-text-color'>Home</a></li> <span>/</span>
                        <li><a href="#" className='hover:text-text-color'>Phone & tablets</a></li> <span>/</span>
                        <li className='text-text-color'>Apple mobile phone 4GB/64GB</li>
                    </ul>
                    <ul className='hidden lg:flex items-center gap-1 justify-end'>
                        <li className='flex items-center text-sm'>Previus<a href="#"><HiMiniChevronLeft className='text-xl' /></a></li> | 
                        <li className='flex items-center text-sm'><a href="#"><HiMiniChevronRight className='text-xl' /></a>Next</li>
                    </ul>
                </div>
            </section>
            <section className='bg-white'>
                <div className="box">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className='col-span-1'>
                            <div className='sticky top-0'>
                                <ProductGallary />
                            </div>
                        </div>
                        <div className='col-span-1 lg:col-span-2'>
                            <div className='grid  lg:grid-cols-5 gap-6'>
                                <div className='lg:col-span-3'>
                                    <div className='py-8' >
                                        <div className='pb-5'>
                                            <h1 className='text-xl mb-1 font-medium'>Samsung Galaxy S21 FE 8GB/128GB</h1>
                                            <div className='flex items-center  gap-3'>
                                                <ProductRating rating={4} /> <span className='text-sm'>/</span> <span className='text-sm'>2 Reviews</span> <span className='text-sm'>/</span> <span className='text-sm'>Write reviews</span>
                                            </div>
                                        </div>
                                        <hr />
                                        <ul className='text-base py-2 space-y-3'>
                                        <li> <span className='text-3xl font-bold text-primary'>$214</span> <span className='text-xl line-through text-mute'>$300</span> <span className='py-1 px-3 bg-[#fde9e9] text-secondary text-sm font-medium rounded-md'>12% discounts</span>  </li>
                                            <li> <span className='font-semibold'>Brand:</span> <a href="#">Apple</a></li>
                                            <li> <span className='font-semibold'>Stock:</span> 3 Available</li>
                                            <li> <span className='font-semibold'>Product:</span> Mobile</li>
                                            <li> <span className='font-semibold'>Type:</span> <a href="#">Physical</a></li>
                                            <li className='flex flex-col gap-2'> <span className='font-semibold'>Color: <span className='font-medium'>{color}</span> </span> 
                                                <ul className='flex items-center gap-2'>
                                                    <li className={`border-2  rounded-md w-8 h-8 ${color == 'Red' ? 'border-primary' : 'border-slate-200' } `} ><span onClick={() => colorVariant('Red')} className='w-7 h-7 cursor-pointer scale-95 rounded border bg-red-600 inline-block'></span></li>
                                                    <li className={`border-2  rounded-md w-8 h-8 ${color == 'Green' ? 'border-primary' : 'border-slate-200' } `} ><span onClick={() => colorVariant('Green')} className='w-7 h-7 cursor-pointer scale-95 rounded border bg-green-600 inline-block'></span></li>
                                                    <li className={`border-2  rounded-md w-8 h-8 ${color == 'Blue' ? 'border-primary' : 'border-slate-200' } `} ><span onClick={() => colorVariant('Blue')} className='w-7 h-7 cursor-pointer scale-95 rounded border bg-blue-600 inline-block'></span></li>
                                                    <li className={`border-2  rounded-md w-8 h-8 ${color == 'White' ? 'border-primary' : 'border-slate-200' } `} ><span onClick={() => colorVariant('White')} className='w-7 h-7 cursor-pointer scale-95 rounded border bg-white inline-block'></span></li>
                                                </ul>
                                            </li>
                                            <li className='flex flex-col gap-2'> <span className='font-semibold'>Size: <span className='font-medium'>{size}</span> </span> 
                                                <ul className='flex items-center gap-2'>
                                                    <li className={`border-2  rounded-md h-8 ${size == '2GB' ? 'border-primary' : "border-slate-200" } `}><span onClick={() => sizeVariant("2GB")} className=' h-7 cursor-pointer scale-95 rounded border  px-2 inline-block'>2GB</span></li>
                                                    <li className={`border-2  rounded-md h-8 ${size == '4GB' ? 'border-primary' : "border-slate-200" } `}><span onClick={() => sizeVariant("4GB")} className=' h-7 cursor-pointer scale-95 rounded border px-2  inline-block'>4GB</span></li>
                                                    <li className={`border-2  rounded-md h-8 ${size == '8GB' ? 'border-primary' : "border-slate-200" } `}><span onClick={() => sizeVariant("8GB")} className=' h-7 cursor-pointer scale-95 rounded border px-2  inline-block'>8GB</span></li>
                                                    <li className={`border-2  rounded-md h-8 ${size == '16GB' ? 'border-primary' : "border-slate-200" } `}><span onClick={() => sizeVariant("16GB")} className=' h-7 cursor-pointer scale-95 rounded border px-2 inline-block'>16GB</span></li>
                                                </ul>
                                            </li>
                                        
                                        </ul>
                                        <div className='flex items-center gap-3 flex-wrap lg:flex-nowrap mt-3'> 
                                            <div className='flex border'>
                                                <button onClick={handleDecrement} className='px-3 text-2xl py-[3px] border-r inline-block'>-</button>
                                                <input type="text" step={1} max={10} min={1} readOnly value={quantity} className="w-[50px] outline-none text-center " />
                                                <button onClick={handleIncrement} className='px-3 text-2xl py-[3px] border-l inline-block'>+</button>
                                            </div>
                                            <button className='px-8 sm:px-5 md:px-3 xl:w-full py-2 bg-primary uppercase rounded font-semibold text-white'>Buy Now</button>
                                            <button className='px-8 sm:px-5 md:px-3 xl:w-full py-2 bg-secondary uppercase rounded font-semibold text-white'>Add to cart</button>
                                        </div>
                                        <ul className='text-gray-700 flex gap-5 py-5'>
                                            <li className='flex cursor-pointer text-sm items-center gap-2'> <LuHeart /> <span className='uppercase font-semibold'>Add wishlist</span> </li>
                                            <li className='flex cursor-pointer text-sm items-center gap-2'> <LuLayers /> <span className='uppercase font-semibold'>Add Compare</span> </li>
                                            <li className='flex cursor-pointer text-sm items-center gap-2 ml-auto'> <LuShare2 /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='lg:col-span-2 py-5 '>
                                    <div className='py-5 px-5 border rounded-md border-gray-100'>
                                        <p className='text-sm text-slate-500'>Deleviry</p>
                                        <ul className='space-y-2 mb-7'>
                                            <li className='text-base flex  gap-2 items-start'> <span><LuMapPin className='text-lg mt-2 text-slate-500' /></span> <span>Dhaka, Dhaka North, Banani Road No. 12 - 19</span> </li>
                                            <li className='text-base flex  gap-2 items-start'> 
                                                <span><IoCashOutline className='text-lg mt-1 text-slate-500' /></span>  
                                                <div>
                                                   <p> <span className='font-medium'>Estimated Delivery:</span> <span className='text-sm'>27 Oct - 31 Oct</span></p>
                                                    <p className='text-sm text-mute'>3 - 7 (day)s</p>
                                                </div>
                                            </li>
                                            <li className='text-base flex  gap-2 items-start'>
                                                <span><FaTruckMoving className='text-lg mt-1 text-slate-500' /></span>  
                                                <span>Cash on Delevery Available</span>
                                            </li>
                                        </ul>
                                        <p className='text-sm text-slate-500'>Service</p>
                                        <ul className='space-y-2'>
                                         
                                            <li className='text-base flex  gap-2 items-start'> 
                                                <span><IoSwapHorizontalOutline className='text-lg mt-2 text-slate-500' /></span>  
                                                <div>
                                                   <p> <span className='font-medium'>14 days easy return</span></p>
                                                    <p className='text-sm text-mute'>Change of mind is not applicable</p>
                                                </div>
                                            </li>
                                         
                                            <li className='text-base flex  gap-2 items-start'> 
                                                <span><IoShieldCheckmarkOutline className='text-lg mt-1 text-slate-500' /></span>  
                                                <div>
                                                   <p> <span className='font-medium'>1 Year Brand Warranty</span></p>
                                                </div>
                                            </li>
                                            <li className='text-base flex  gap-2 items-start'> 
                                                <span><IoCheckmarkDoneCircleOutline className='text-lg mt-1 text-slate-500' /></span>  
                                                <div>
                                                   <p> <span className='font-medium'>100% original & official</span></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;