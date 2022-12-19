import styled from "styled-components";

export const StyledMainLoginPage = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;

    min-width: 300px;
    width: 1200px;
    height: 100%;

    margin: 0 auto;

    section:nth-child(1) {
        height: 500px;
        width: 460px;

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
        max-width: 100%;
        border-radius: 8px;
        & img {
            max-width: 100%;
            box-shadow: rgba(0, 0, 1, 0.4) 0px 7px 29px 0px;
            border-radius: 20px;
        }
    }
    h1{
        color: var(--color-grey-600);
    }
`