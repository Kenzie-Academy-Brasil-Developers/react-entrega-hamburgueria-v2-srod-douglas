import styled from "styled-components";

export const StyledMainRegisterPage = styled.main`

    display: flex;
    justify-content: space-around;
    align-items: center;

    min-width: 300px;
    width: 1200px;
    height: 100%;

    margin: 0 auto;

    section:nth-child(1){
        height: 500px;
        box-shadow: rgba(0, 0, 1, 0.4) 0px 7px 15px 0px;
    }

    section:nth-child(2) {
        width: 460px;
        height: 580px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        & div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: -2rem;
        }
}
`