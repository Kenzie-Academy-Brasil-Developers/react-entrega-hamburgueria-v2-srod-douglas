import styled from "styled-components";

export const StyledMainRegisterPage = styled.main`

    display: flex;
    justify-content: space-around;
    align-items: center;

    min-width: 300px;
    width: 1200px;
    height: 100%;

    margin: 0 auto;

    img{
        border-radius: 20px;
    }

    section:nth-child(1){
        height: 500px;
        box-shadow: rgba(0, 0, 1, 0.4) 0px 7px 15px 0px;
        border-radius: 20px;
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
    h2, label, a{
        color: var(--color-grey-600);
    }
    a:hover{
        transition: .5s;
        letter-spacing: .2rem;
    }
}
`