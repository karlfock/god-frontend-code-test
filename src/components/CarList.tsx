import React, { useState } from 'react';
import { Car } from '../types';
import CarInfo from './CarInfo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperType, { Pagination } from 'swiper';
import { Block } from 'vcc-ui';
import NavigationButtons from './NavigationButtons';

const CarList = ({ cars }: { cars?: Car[]}): JSX.Element => {
    const [swiper, setSwiper] = useState<SwiperType>();

    return (
        <Block>
            <Swiper
                loop={true}
                loopedSlides={8}
                slidesPerView='auto'
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                onSwiper={(swiper) => {
                    setSwiper(swiper);
                }}
            >
                {cars?.map((car) => {
                    return (
                        <SwiperSlide key={car.id}>
                            <CarInfo car={car} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <NavigationButtons
                clickLeftHandler={() => swiper?.slidePrev()}
                clickRightHandler={() => swiper?.slideNext()}
            />
        </Block>
    );
}

export default CarList;