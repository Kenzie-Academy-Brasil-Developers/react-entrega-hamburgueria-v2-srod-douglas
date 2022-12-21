import styled from "styled-components";

export const StyledFormRegister = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 480px;
    box-sizing: border-box;

    p {
        display: block;
        width: 100%;

        color: var(--color-negative);
        
        font-weight: var(--weight-semibold);
    }

    button{
        margin-bottom: -.7rem;
    }

    fieldset{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 110px;

        border: none;
        margin-top: -1rem;

        & p {
            display: block;
            width: 100%;
            margin-top: .3rem;

            color: var(--color-negative);

            font-weight: var(--weight-semibold);
        }

        & label{
            margin-bottom: .5rem;
        }

        & > input {
            height: 60px;
            padding: 15px 20px;

            color: var(--color-grey-600);
            background-color: var(--color-grey-0);

            border: none;
            border-radius: 8px;
            
            font-size: var(--font-regular-1);
            font-weight: var(--weight-regular);
            
            outline: none;
            box-shadow: rgba(0, 0, 1, 0.8) 0px 7px 29px 10px;
        }
    }

    input {
        width: 100%;
        height: 60px;
        padding: 15px 20px;
        border: none;
        border-radius: 8px;

        color: var(--color-grey-600);
        background-color: var(--color-grey-0);
        box-shadow: rgba(0, 0, 1, 0.8) 0px 7px 29px 10px;

        font-size: var(--font-regular-1);
        font-weight: var(--weight-regular);

        outline: none;

        & ::placeholder{
            background-color: var(--color-grey-600);
            color: var(--color-grey-600);
        }        
    }
`