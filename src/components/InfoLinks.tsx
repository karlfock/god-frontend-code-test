import { Car } from '../types';
import { Link, View } from 'vcc-ui';

const InfoLink = ({ car }: { car?: Car }): JSX.Element => {

    return (
        <View direction="row" justifyContent="space-evenly" >
            <Link arrow="right" href={`/learn/${car?.id}`}>LEARN</Link>
            <Link arrow="right" href={`/shop/${car?.id}`}>SHOP</Link>
        </View>
    )
}

export default InfoLink;