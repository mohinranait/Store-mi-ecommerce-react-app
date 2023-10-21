import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import HomeSliderItem from '../Slider/HomeSliderItem';
import { Link } from 'react-router-dom';



const HomeBanner = () => {
    const sliders = [
        { _id : 1, title : "Todays Offer", sTitle : "Skin gamepage 2023", subTitle : 'Gamepade', image : "https://demo-uminex.myshopify.com/cdn/shop/files/banner_3_2.jpg?v=1681465965&width=1500" },
        { _id : 2, title : "Outdoor", sTitle : "Security cameras", subTitle : 'Security cameras', image : "https://demo-uminex.myshopify.com/cdn/shop/files/banner_3_3.jpg?v=1681465977&width=1500" }
    ]
    const bannerProducts = [
        {_id: 1, title : "Tablets/lapt", image : "https://demo-uminex.myshopify.com/cdn/shop/files/col_3_1.png?v=1681548716&width=1500"},
        {_id: 2, title : "Tablets/Ipad", image : "https://demo-uminex.myshopify.com/cdn/shop/files/col_3_2.png?v=1681548716&width=1500"},
        {_id: 3, title : "Camera/phone", image : "https://demo-uminex.myshopify.com/cdn/shop/files/col_3_3.png?v=1681548716&width=1500"},
        {_id: 4, title : "Gamepade", image : "https://demo-uminex.myshopify.com/cdn/shop/files/col_3_4.png?v=1681548715&width=1500"},
        {_id: 5, title : "Tablets/Ipad", image : "https://demo-uminex.myshopify.com/cdn/shop/files/col_3_5.png?v=1681548716&width=1500"},
    ]
    const categoris = [
        {_id: 1, name : "Computer & Desktop"},
        {_id: 2, name : "Laptop & Ipad"},
        {_id: 3, name : "Cameras & Photos"},
        {_id: 4, name : "Smart Phones & Tablets"},
        {_id: 5, name : "Home & Kitchen"},
        {_id: 6, name : "TV & Audios"},
        {_id: 7, name : "Health & Beauty"},
        {_id: 8, name : "Watches & Eyewear"},
        {_id: 9, name : "Top Deals"},
        {_id: 10, name : "Top Selling Products"},
        {_id: 11, name : "Top Featured Products"},
    ]
    return (
        <section className='my-7'>
            <div className='box'>
                <div className="grid grid-cols-4 gap-5">
                    <div className='hidden lg:block bg-white rounded-md py-2'>
                        <div>
                            <ul className=''>
                                {
                                    categoris?.map(category =>  <li key={category._id} className='px-5 group '><a href="#" className='text-sm group-last:border-b-0 border-b font-medium  text-text-color border-[#E5E8EC]  flex items-center leading-[40px]'>{category.name}</a></li> )
                                }
                            
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-4 lg:col-span-3'>
                        <div className="grid grid-cols-3  gap-3">
                            <div className=' order-1 md:order-1 bg-white col-span-3 md:col-span-2 row-span-2'>
                                <Swiper
                                    spaceBetween={30}
                                    effect={'fade'}
                                    navigation={true}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    modules={[EffectFade, Navigation, Pagination]}
                                    className="mySwiper"
                                >
                                  
                                    {
                                        sliders?.map(slider =>   <SwiperSlide key={slider._id}>
                                            <HomeSliderItem slider={slider} />
                                        </SwiperSlide> )
                                    }
                                  
                                    
                                </Swiper>
                            </div>
                            <div className='order-3 md:order-2 bg-white col-span-3 md:col-span-1 flex items-center overflow-hidden ' >
                                <div className='relative group'>
                                    <div className='absolute w-full h-full flex items-center  pl-6 top-2/4 left-0 -translate-y-2/4'>
                                        <div className='relative '>
                                            <p className='text-xl z-30 text-text-color mb-1 font-semibold'>Over-Ear headphone</p>
                                            <p className='text-sm z-30 text-gray-600 font-medium mb-2'>20 Days Return Products</p>
                                            <div><Link className='text-primary text-sm font-semibold'>Details new</Link></div>
                                        </div>
                                    </div>
                                    <img className='' src="https://demo-uminex.myshopify.com/cdn/shop/files/3_1.jpg?v=1681466981&width=1500" alt="" />
                                </div>
                            </div>
                         
                            <div className='order-3 md:order-2 bg-white col-span-3 md:col-span-1 flex items-center ' >
                                <div className='relative group'>
                                    <div className='absolute w-full h-full flex items-center  pl-6 top-2/4 left-0 -translate-y-2/4'>
                                        <div className='relative '>
                                            <p className='text-xl z-30 text-text-color mb-1 font-semibold'>AirPods</p>
                                            <p className='text-sm z-30 text-gray-600 font-medium mb-2'>Save 20% discounts</p>
                                            <div><Link className='text-primary text-sm font-semibold'>Details new</Link></div>
                                        </div>
                                    </div>
                                    <img className='' src="https://demo-uminex.myshopify.com/cdn/shop/files/3_2.jpg?v=1681466999&width=1500" alt="" />
                                </div>
                            </div>
                         
                            <div className='order-2 md:order-4  col-span-3 md:col-span-2'>
                                <Swiper
                                        spaceBetween={10}
                                        navigation={true}
                                        pagination={{
                                        clickable: true,
                                        slidesPerView: 5,
                                        }}
                                        breakpoints={{
                                            400: {
                                            slidesPerView: 3,
                                            spaceBetween: 10,
                                            },
                                            540: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                            },
                                            640: {
                                            slidesPerView: 5,
                                            spaceBetween: 10,
                                            },
                                            768: {
                                            slidesPerView: 4,
                                            spaceBetween: 10,
                                            },
                                            1024: {
                                            slidesPerView: 5,
                                            spaceBetween: 10,
                                            },
                                        }}
                                        modules={[ Navigation, Pagination]}
                                        className="mySwiper"
                                    >
                                        {
                                            bannerProducts?.map(product => <SwiperSlide key={product._id}>
                                                
                                                <div className='flex flex-col py-2 px-1 rounded-md bg-white'>
                                                    <Link className=''><img className='mx-auto' src={product?.image} alt="" /></Link>
                                                    <Link className='text-center'>{product?.title}</Link>
                                                </div>
                                            </SwiperSlide>  )
                                        }
                                </Swiper>
                            </div>
                            <div className=' order-3 md:order-5 bg-white col-span-3 md:col-span-1 flex items-center'>
                                <div className='relative group'>
                                    <div className='absolute w-full h-full flex items-center  pl-6 top-2/4 left-0 -translate-y-2/4'>
                                        <div className='relative '>
                                            <p className='text-xl z-30 text-text-color mb-1 font-semibold'>Gamepad</p>
                                            <p className='text-sm z-30 text-gray-600 font-medium mb-2'>Optionals Skins</p>
                                            <div><Link className='text-primary text-sm font-semibold'>Details new</Link></div>
                                        </div>
                                    </div>
                                    <img className='' src="https://demo-uminex.myshopify.com/cdn/shop/files/3_3.jpg?v=1681467017&width=1500" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;