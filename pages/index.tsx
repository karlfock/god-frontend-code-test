import Main from '../src/components/Main';
import React from 'react';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import GlobalStyles from '../src/components/GlobalStyles';


function IndexPage() {
    return (
        <StyleProvider>
            <ThemePicker variant="light">
                <React.StrictMode>
                    <GlobalStyles />
                    <Main />
                </React.StrictMode>
            </ThemePicker>
        </StyleProvider>
    );
}

export default IndexPage;
