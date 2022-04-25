import { Car } from '../types';
import { Text } from 'vcc-ui';
import Image from 'next/image';
import InfoLink from './InfoLinks';
import { Block } from 'vcc-ui';

const CarCard = ({ car }: { car?: Car }): JSX.Element => {

    return (
        <Block extend={{ padding: 10 }}>

            <Text
                variant="bates"
                subStyle="emphasis"
            >
                {car?.bodyType}
            </Text>

            <Text subStyle="emphasis">
                {car?.modelName}
            </Text>

            <Text>
                {car?.modelType}
            </Text>

            {car?.imageUrl && (
                <Image
                    src={car.imageUrl}
                    alt={car?.modelName}
                    height={600}
                    width={800}
                />
            )}
            <InfoLink car={car} />
        </Block>

    )
}

export default CarCard;