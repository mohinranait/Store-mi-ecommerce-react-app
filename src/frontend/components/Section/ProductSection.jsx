import PropTypes from "prop-types"
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import ProductCard from '../ProductCard/ProductCard';

const ProductSection = ({products}) => {

    return (
        <section className='py-7 bg-[#dcdcdc1a]'>
            <div className="box  relative">
                <div className='flex justify-between bg-white px-4 items-center py-3 mb-3 border-b-2 border-gray-100 '>
                    <div className='text-lg font-semibold text-text-color '><span className='text-primary'>Features</span> Products</div>
                    <ul className='flex items-center gap-4'>
                        <li><a href="#" className='text-base text-primary font-semibold '>Top Sell</a></li>
                        <li><a href="#" className='text-base text-text-color font-semibold'>Feature</a></li>
                        <li><a href="#" className='text-base text-text-color font-semibold'>Active</a></li>
                    </ul>
                </div>
                <div className=''>
                    <Swiper
                        spaceBetween={10}
                        loop={true}
                        navigation={true} 
                        breakpoints={{
                            500: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            540: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1100: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            products?.map(product =>  <SwiperSlide key={product._id}  >
                                <ProductCard product={product} />
                            </SwiperSlide>  )
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

ProductSection.propTypes = {
    products : PropTypes.array
}

export default ProductSection;