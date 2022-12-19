import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 80px;
    width: 100%;

    margin: 0 auto;

    background-color: var(--color-primary);

    div:nth-child(1){
        cursor: pointer;
    }

    div:nth-child(1) > img {
        max-width: 300px;
        margin-top: .7rem;
    }

    div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        
        height: 60px;
        width: 200px;
        
        margin-right: 2.8rem;
        gap: 1rem;
        
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
        margin-right: 1.5rem;
    }

    input{
        width: 365px;
        max-width: 365px;
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
`