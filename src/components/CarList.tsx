import React, { useState } from 'react';
import { Car } from '../types';
import CarInfo from './CarInfo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperType, { Pagination } from 'swiper';
import { Block } from 'vcc-ui';
import NavigationButtons from './NavigationButtons';
import CarTypeFilter, { INITIAL_SELECT_VALUE } from './CarTypeFilter';

const CarList = ({ cars }: { cars?: Car[]}): JSX.Element => {
    const [swiper, setSwiper] = useState<SwiperType>();
    const [selectedBodyType, setBodyType] = useState<string>(INITIAL_SELECT_VALUE);

    return (
        <>
            <Block>
                <CarTypeFilter
                    cars={cars}
                    selectedBodyType={selectedBodyType}
                    selectCallback={(value) => {
                        setBodyType(value)
                    }}
                />
            </Block>

            <Block>
                <Swiper
                    slidesPerView='auto'
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    onSwiper={(swiper) => {
                        setSwiper(swiper);
                    }}
                >
                    {cars?.filter((car) => {
                        return car.bodyType === selectedBodyType || selectedBodyType === INITIAL_SELECT_VALUE;
                    })
                        .map((car) => {
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
        </>
    );
}

export default CarList;