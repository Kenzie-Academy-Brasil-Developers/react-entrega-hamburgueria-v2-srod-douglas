import styled from "styled-components";

export const StyledMainDashboard = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    margin: 0 auto;

    section{
        width: 100%;
        max-width: 1200px;

        display: flex;

        margin: 0 auto;
        margin-top: 2rem;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        gap: 2rem;
    }

    li{
        display: flex;
        flex-direction: column;

        width: 280px;
        height: 350px;

        border: .5px solid var(--color-grey-0);
        border-radius: 8px;

        transition: .5s;

        box-shadow: rgba(0, 0, 1, 0.8) 0px 7px 29px 10px;

        :hover{
            border: 1px solid var(--color-secundary);

            div:nth-child(1){
                background-color: var(--color-secundary);
            }

            div:nth-child(2){
                background-color: rgb(2, 8, 5, .5);
            }
            button{
                color: var(--color-grey-600);
                background-color: var(--color-secundary);
            }
        }

    }

    img{
        display: flex;

        height: 100%;
        width: 100%;
        object-fit: contain;

        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    div:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;

        height: 180px;

        background-color: rgba(255, 165, 0, .2);

        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        transition: .5s;
    }

    div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        height: 80%;
        padding: 1rem;

        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        background-color: rgb(2, 8, 5, .2);
    }

    h2{
        color: var(--color-grey-600);
    }

    @media(max-width: 767px){
        max-width: 100%;
        padding: 0;

        section{
            margin-top: 5rem;
            min-width: 100%;
        }

        ul{
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;

            overflow-x: auto;

            height: 450px;
            min-width: 100%;
            gap: 1rem;
        }
        li{
            min-width: 250px;
            max-width: 350px;
            min-height: 380px;
            
            margin: 0 .5rem 0 .5rem;
        }
    }
`