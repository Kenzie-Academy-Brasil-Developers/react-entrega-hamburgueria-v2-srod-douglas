import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;

    box-sizing: border-box;

    min-height: 80px;
    width: 100%;

    margin: 0 auto;

    background-color: var(--color-primary);

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
        
        height: 60px;
        min-width: 50%;
        
/*         margin-right: 2.8rem; */
/*         gap: 1rem; */
        
        cursor: pointer;

            > div {
                display: flex;
                align-items: center;

                height: 60px;
                margin-top: .3rem;

                color: var(--color-grey-600);
                font-size: var(--font-bold-2);
                
                cursor: pointer;
        }
    }
    
    form{
        width: 365px;
    }

    input{
        max-width: 350px;
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

        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 120px;

        form{
            width: 50%;
        }
        input{
            width: 100%;
        }

        div:nth-child(1) {
            display: flex;
            justify-content: center;
            width: 100%;

            >img{
                width: 100%;
                margin-top: 0;
            }
        }

        div:nth-child(2){
            width: 100%;
            padding: 0 1rem;
            display: inline;

            >div{
                padding: 0;
                margin: 0;
/*                 width: min-content; */
            }
        }
        span{
            margin: 0;
        }
    }
`