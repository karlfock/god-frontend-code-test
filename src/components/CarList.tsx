import React from 'react';
import { Car } from '../types';
import CarInfo from './CarInfo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Block } from 'vcc-ui';

const CarList = ({ cars }: { cars?: Car[]}): JSX.Element => {
    return (
        <Block>
            <Swiper
                slidesPerView='auto'
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {cars?.map((car) => {
                    return (<SwiperSlide key={car.id}>
                        <CarInfo car={car} />
                    </SwiperSlide>)
                })}
            </Swiper>
        </Block>
    );
}

export default CarList;