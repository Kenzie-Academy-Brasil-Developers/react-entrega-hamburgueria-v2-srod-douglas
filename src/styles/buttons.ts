import styled from 'styled-components'

export const ButtonLogin = styled.button`
    max-width: 452px;
    width: 100%;
    height: 60px;
    
    padding: 0 40px;

    border: 1px solid var(--color-primary);
    border-radius: 8px;

    color: var(--color-secundary);
    background-color: var(--color-primary);
    box-shadow: rgba(0, 0, 1, 0.4) 0px 7px 29px 0px;

    font-size: var(--font-bold-3);
    font-weight: var(--weight-semibold);
    letter-spacing: .1rem;
    transition: .5s;

    &:hover{
        color: var(--color-primary);
        background-color: var(--color-grey-600);
        border: 1px solid var(--color-grey-600);
        box-shadow: rgba(999, 999, 999, .99) 5px 2px 29px 5px;
        letter-spacing: .2rem;
    }
`

export const ButtonRegister = styled.button`
    max-width: 452px;
    width: 100%;
    height: 60px;
    
    padding: 0 40px;

    border: 1px solid var(--color-grey-0);
    border-radius: 8px;

    color: var(--color-grey-300);
    background-color: var(--color-grey-0);
    box-shadow: rgba(0, 0, 1, 0.4) 0px 7px 29px 0px;

    font-size: var(--font-bold-3);
    font-weight: var(--weight-semibold);
    letter-spacing: .1rem;

    &:hover{
        color: var(--color-grey-0);
        background-color: var(--color-grey-600);
        border: 1px solid var(--color-grey-600);
        box-shadow: rgba(999, 999, 999, .99) 5px 2px 29px 5px;
        letter-spacing: .2rem;
    }
`

export const ButtonRemoveAll = styled.button`
    max-width: 452px;
    width: 347px;
    height: 60px;
    
    padding: 0 40px;

    border: 1px solid var(--color-grey-0);
    border-radius: 8px;

    color: var(--color-grey-300);
    background-color: var(--color-grey-0);

    font-size: var(--font-regular-1);
    font-weight: var(--weight-semibold);
`