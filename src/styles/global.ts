import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`

    :root{
        --color-primary: #f9b209;
        --color-secundary: #2e302f;

        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #168821;
        --color-information: #155BCB;
        
        --color-grey-600: #333333;
        --color-grey-300: #828282;
        --color-grey-100: #E0E0E0;
        --color-grey-0: #F5F5F5;

        --font-bold-1: 1.625rem;
        --font-bold-2: 1.375rem;
        --font-bold-3: 1.125rem;

        --font-semibold: .875rem;

        --font-regular-1: 1rem;
        --font-regular-2: .875rem;
        --font-regular-3: .75rem;

        --weight-regular: 400;
        --weight-semibold: 600;
        --weight-bold: 700;

    }


    *{
        font-family: "Inter", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        list-style: none;
        text-decoration: none;
        font-family: "Inter", sans-serif;

        cursor: default;

        background-color: var(--color-grey-4);
    }

    a{
        text-decoration: none;

        color: var(--color-grey-1);

        cursor: pointer;
        transition: .5s;
    }
`