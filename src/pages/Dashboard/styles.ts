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
        width: 300px;
        height: 350px;
        border: .5px solid var(--color-grey-0);
        border-radius: 8px;
        transition: .5s;

        :hover{
            border: 1px solid var(--color-primary);

            div:nth-child(1){
                background-color: var(--color-primary);
            }

            div:nth-child(2){
                background-color: rgb(2, 8, 5, .5);
            }
            button{
                background-color: var(--color-primary);
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
        color: var(--color-grey-0);
    }
`