import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    height: 300px;
    width: 100%;

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px grey inset;
        box-shadow: 0 0 0 30px black inset;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus{
        border: 1px solid white;
        -webkit-text-fill-color: white !important;
        -webkit-box-shadow: 0 0 0px 1000px #000 inset;
        transition: background-color 5000s ease-in-out 0s;
    }

    fieldset{
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 110px;
        margin-top: -1rem;
        
        border: none;

        & > input {
            height: 60px;
            padding: 15px 20px;

            border: none;
            border-radius: 8px;
            
            font-size: var(--font-regular-1);
            font-weight: var(--weight-regular);
            
            color: var(--color-grey-0);
            background-color: var(--color-grey-600);
            box-shadow: rgba(0, 0, 1, 0.4) 0px 7px 29px 0px;
            
            outline: none;

            & ::placeholder{
                background-color: var(--color-grey-600);
                color: var(--color-grey-0);
            }
            &:enabled{
                background-color: var(--color-grey-600);
            }
            &:invalid:required{
                border: 1px solid var(--color-negative);
            }
        }
    }
`