import styled from 'styled-components'

export const TitleBold1 = styled.h1`
    font-size: var(--font-bold-1);
    font-weight: var(--weight-bold);
`

export const TitleBold2 = styled.h2`
    font-size: var(--font-bold-2);
    font-weight: var(--weight-bold);
`

export const TitleBold3 = styled.h3`
    font-size: var(--font-bold-3);
    font-weight: var(--weight-bold);
    color: var(--color-grey-600);
`

export const FontSemiBold = styled.h4`
    font-size: var(--font-semibold);
    font-weight: var(--weight-semibold);
`

export const FontRegular1 = styled.p`
    font-size: var(--font-regular-1);
    font-weight: var(--weight-regular);
    letter-spacing: .05rem;
    padding: .5rem;
`

export const FontRegular2 = styled.p`
    font-size: var(--font-regular-2);
    font-weight: var(--weight-regular);
    color: var(--color-grey-300);
`

export const FontRegular3 = styled.p`
    font-size: var(--font-regular-3);
    font-weight: var(--weight-regular);
`

export const FontPrice = styled.span`
    font-size: var(--font-regular-2);
    font-weight: var(--weight-semibold);
    color: var(--color-secundary);
`

export const FontLabelInput = styled.p`
    margin-bottom: .5rem;
    font-size: var(--font-regular-2);
    font-weight: var(--weight-semibold);
    color: var(--color-grey-600);
`

export const TextError = styled.span`
    display: block;
    width: 100%;
    color: var(--color-negative);
    font-weight: var(--weight-semibold);
    margin-top: .3rem;
`