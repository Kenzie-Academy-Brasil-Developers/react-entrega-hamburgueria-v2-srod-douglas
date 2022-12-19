import styled from "styled-components";

export const StyledMainLoginPage = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;

    min-width: 300px;
    max-width: 1200px;
    height: 100%;

    margin: 0 auto;

    padding: 0 2rem;

    gap: 2rem;

    section:nth-child(1) {
        min-height: 500px;
        max-width: 460px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        & div{
            display: flex;
            width: 100%;
            margin: 0 auto;
            margin-top: -1rem;
        }

        a{
            width: 100%
        }

        p{
            color: var(--color-grey-600);
        }
    }

    section:nth-child(2){
        min-width: 50%;
        max-width: 100%;
        border-radius: 8px;

        & img:nth-child(1) {
            max-width: 100%;
            box-shadow: rgba(0, 0, 1, 0.4) 0px 7px 29px 0px;
            border-radius: 20px;
        }

        & img:nth-child(2){
            display: none;
        }
    }

    h1{
        color: var(--color-grey-600);
    }

    @media(max-width: 768px){

        flex-direction: column-reverse;
        width: 100%;
        justify-content: space-around;
        min-width: 100%;
        padding: 0 1rem;

        section:nth-child(1) {
            width: 100%;
        }

        section{
            width: 100%;
            justify-content: center;
        }

        section:nth-child(2){
            display: flex;
            margin-top: 5rem;

            & > img:nth-child(1) {
                display: none;
            }

            & > img:nth-child(2){
                display: block;
            }
        }
    }
`