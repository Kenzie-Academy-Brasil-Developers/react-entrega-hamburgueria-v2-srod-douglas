import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    height: 300px;
    width: 100%;

    fieldset{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80px;
        border: none;
        margin-top: -1rem;

        & > input {
            height: 60px;
            background-color: var(--color-grey-600);
            border: none;
            border-radius: 8px;
            padding: 15px 20px;
            font-size: var(--font-regular-1);
            font-weight: var(--weight-regular);
            outline: none;
            color: var(--color-grey-0);
            box-shadow: rgba(0, 0, 1, 0.4) 0px 7px 29px 0px;

            & ::placeholder{
                background-color: var(--color-grey-600);
                color: var(--color-grey-0);
            }

            
        }
    }
`