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
    }

    section:nth-child(2) > div{
        max-width: 100%;
        & img {
        max-width: 100%;
        box-shadow: rgba(0, 0, 1, 0.4) 0px 7px 29px 0px;
    }
    }
`