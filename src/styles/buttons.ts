import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
        color: var(--color-grey-600);
        background-color: var(--color-secundary);
        border: 1px solid var(--color-secundary);
        box-shadow: rgba(999, 999, 999, .4) 2px 2px 9px 2px;
        letter-spacing: .2rem;
    }
`

export const LinkRegister = styled(Link)`
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
        box-shadow: rgba(999, 999, 999, .4) 2px 2px 9px 2px;
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
        box-shadow: rgba(999, 999, 999, .4) 2px 2px 9px 2px;
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
    background-color: var(--color-secundary);

    font-size: var(--font-bold-3);
    font-weight: var(--weight-semibold);
    transition: .5s;

    :hover {
        color: var(--color-grey-600);
        background-color: var(--color-negative);
        border: 1px solid var(--color-negative);
        letter-spacing: .4px;
    }
`

export const ButtonAddToCart = styled.button`
    max-width: 260px;
    width: 100%;
    height: 40px;
    
    padding: 0 20px;

    border: 1px solid rgba(255, 165, 0, .2);
    border-radius: 8px;

    color: var(--color-secundary);
    background-color: rgba(255, 165, 0, .2);
    box-shadow: rgba(0, 0, 1, 0.4) 0px 7px 29px 0px;

    font-size: var(--font-bold-3);
    font-weight: var(--weight-semibold);
    letter-spacing: .1rem;
    transition: .5s;

    &:hover{
        color: var(--color-grey-600);
        background-color: rgba(255, 165, 0, 1);
        border: 1px solid var(--color-secundary);
        box-shadow: rgba(999, 999, 999, .5) 0px 0px 9px 0px;
        letter-spacing: .2rem;
    }
`