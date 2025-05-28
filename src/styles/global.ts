import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  * {
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
  }
  body, html {
    padding: 0;
    margin: 0;
    height: auto;
    min-height: 100%;
    font-size: 16px;
    @media (max-height: 50.3125rem) {
      font-size: 14px;
    }

    @media (max-height: 37.8125rem) {
      font-size: 12px;
    }
    .grecaptcha-badge {
      display: none !important;
    }
  }

  h2{
    font-size: 2.5rem;
    margin: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 50rem) {
      font-size: 1.375rem;
      margin: 1rem 0;
    }
  }

  p{
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
  `;
export default GlobalStyle;
