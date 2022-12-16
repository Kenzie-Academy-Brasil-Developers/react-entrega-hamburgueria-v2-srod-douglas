import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`

    *{
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