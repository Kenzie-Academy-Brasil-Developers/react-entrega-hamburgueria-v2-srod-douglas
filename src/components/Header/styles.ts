import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;

    min-height: 80px;
    width: 100%;

    background-color: var(--color-primary);
    box-shadow: 0px 30px 50px 7px rgba(0,0,0,0.75);

    .container{
        width: 100%;
        max-height: 80px;
        max-width: 1200px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div:nth-child(1){
        cursor: pointer;
    }

    div:nth-child(1) > img {
        max-width: 300px;
        min-width: 100px;
        margin-top: .7rem;
    }

    div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        
        gap: 1rem;
        height: 60px;

        cursor: pointer;

        & > div {
            display: flex;
            align-items: center;

            width: 50px;
            height: 60px;
            margin-top: .3rem;
            gap: 1rem;

            color: var(--color-grey-600);
            font-size: var(--font-bold-2);
            
            cursor: pointer;
        }
    }
    
    form{
        width: 365px;
    }

    input{
        width: 380px;
        height: 60px;

        background-color: var(--color-grey-0);
        color: var(--color-grey-600);

        padding: 1rem;

        border: 1px solid var(--color-grey-0);
        border-radius: 8px;

        font-size: var(--font-regular);
        font-weight: var(--weight-regular);

        outline: none;

        & ::placeholder{
            color: var(--color-grey-600);
            font-size: var(--font-regular);
            font-weight: var(--weight-regular);
        }
    }

    form > svg{
        margin-left: -2rem;
    }

    svg{
        color: var(--color-grey-600);
    }

    a{
        margin-top: .4rem;
    }

    span{
        margin-top: -1.4rem;
        margin-left: -1.5rem;
    }

    img, div{
        cursor: pointer;
    }

    @media(max-width: 767px){
        height: 120px;
        
        .container{
            flex-direction: column;
            align-items: center;
            height: 120px;
        }

        section{
            max-width: 500px;
        }

        form{
            max-width: 500px;
        }

        input{
            width: 100%;
        }

        div:nth-child(1) {
            display: flex;
            justify-content: center;
            width: 100%;

            img{
                width: 100%;
                margin-top: 0;
            }
        }

        div:nth-child(2){
            width: 100%;
            padding: 0 1rem;
            gap: .2rem;

            display: flex;
            justify-content: space-around;
            align-items: center;

            div{
                display: contents;
                justify-content: center;
                align-items: center;

                width: 50px;
                max-width: 50px; 

                padding: 0;
                margin: 0;
            }
        }

        span{
            margin: 0;
        }
    }
`