import * as React from 'react';
import { useEffect, useState } from 'react';
import { Car } from '../types';
import CarList from './CarList';

const Main = (): JSX.Element => {

    const [cars, setCars] = useState<Car[]>();

    useEffect(() => {
        const fetchCars = async (): Promise<void> => {
            const res = await fetch('/api/cars.json');
            const json = await res.json();
            setCars(json);
        }

        fetchCars();

    }, [])

    return <CarList cars={cars} />;
}

export default Main;