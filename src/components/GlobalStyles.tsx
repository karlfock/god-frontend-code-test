import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    .swiper-slide {
        // mobile 
        padding-bottom: 30px;
        width: 70%;
    
        // large mobile
        @media (min-width: 480px) {
            width: 50%;
        }
        
        // laptop
        @media (min-width: 768px) {
            width: 30%;
        }
        
        // laptop
        @media (min-width: 1024px) {
            width: 20%;
        }
        
        // desktop
        @media (min-width: 1440px) {
            width: 15%;
        }
    }
 
`;

export default GlobalStyles;