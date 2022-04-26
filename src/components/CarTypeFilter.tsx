import React from 'react';
import { SelectInput } from 'vcc-ui';
import { Car } from '../types';

export const INITIAL_SELECT_VALUE = 'ALL';

type Props = {
    cars?: Car[];
    selectCallback: (value: string) => void;
    selectedBodyType: string;
}

const CarTypeFilter = ({ cars, selectCallback, selectedBodyType }: Props) => {
    const bodyTypeList = cars?.map((car) => {
        return car.bodyType;
    });

    const uniqueBodyTypeList = bodyTypeList?.filter(function(item, pos){
        return bodyTypeList.indexOf(item)== pos;
    });

    return (
        <SelectInput
            value={selectedBodyType}
            onChange={(e) => {
                selectCallback(e.target.value);
            }}
        >
            <option key={INITIAL_SELECT_VALUE} value={INITIAL_SELECT_VALUE}>{INITIAL_SELECT_VALUE}</option>
            {uniqueBodyTypeList?.map((bodyType) => {
                return (
                    <option key={bodyType} value={bodyType}>{bodyType}</option>
                )
            })}
        </SelectInput>
    )

}

export default CarTypeFilter;