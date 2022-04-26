import React from 'react';
import Image from 'next/image';
import Icon from '../../docs/chevron-circled.svg';
import { View } from 'vcc-ui';

const BUTTON_SIZE = 35;

type Props = {
    clickLeftHandler: () => void;
    clickRightHandler: () => void;
}

const NavigationButtons = ({ clickLeftHandler, clickRightHandler }: Props) => {
    return (
        <View
            direction="row"
            extend={{
                // hide for tablet and smaller
                '@media (max-width: 768px)': {
                    display: 'none',
                }
            }}
            justifyContent="flex-end"
            spacing={1}
        >
            <Image
                alt="Go left"
                className="icon rotateIcon"
                height={BUTTON_SIZE}
                role="button"
                src={Icon}
                width={BUTTON_SIZE}
                onClick={() => {
                    clickLeftHandler();
                }}
            />

            <Image
                alt="Go right"
                className="icon"
                height={BUTTON_SIZE}
                role="button"
                src={Icon}
                width={BUTTON_SIZE}
                onClick={() => {
                    clickRightHandler();
                }}
            />
        </View>
    )
}

export default NavigationButtons;