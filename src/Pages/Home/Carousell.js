import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Carousell = ({img1, img2, img3}) => {
    return (
    <div className='lg:w-[330px] w-full'>
        <div className="carousel w-full">
            <Swiper
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            navigation={true}
            pagination={{
             clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper">
            <SwiperSlide>
                <img src={img1} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt='' />
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
    )
}

export default Carousell