import styled from "styled-components";

export const ContainerModal = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(44,44,44, .7);

    h1, h2, h3, h4{
        color: var(--color-grey-600);
    }
    z-index: 10;
`

export const BodyModal = styled.div`
    width: 400px;
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
    margin-top: 5%;

    background-color: var(--color-grey-0);

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 1rem;

        width: 100%;
        height: 100px;
        background-color: var(--color-secundary);
    }

    main{
        overflow-y: scroll;
        height: 600px;
        max-width: 600px;
    }

    main > div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul{

        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
        background-color: var(--color-success);
    }

    main > ul > li{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        gap: 20px;
        background-color: rgba(44, 44, 44, .9);

        & > div {
            display: flex;
            height: 100px;
            width: 100%;
        }
    }

    img{
        width: 50px;
    }

    fieldset{
        border: none;
        display: flex;
        :nth-child(1){
            color: var(--color-success);
        }
    }
`