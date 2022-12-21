import styled from "styled-components";
import img from "../../assets/images/brandCodeLogoCrop-removebg.png"

export const ContainerModalWithItems = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(44,44,44, .7);

    h1, h2, h3, h4{
        color: var(--color-grey-600);
    }
    z-index: 10;
`

export const BodyModal = styled.div`
    width: 600px;
    height: 600px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
    margin-top: 5%;

    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-0);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 1, 0.8) 0px 7px 29px 10px;

    img, svg, path{
        cursor: pointer;
    }
    .total{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 150px;
        padding: 1rem;
        border-top: 2px solid var(--color-grey-0);
        box-shadow: rgba(0, 0, 0, 0.75) 0px -36px 50px -21px;

    }

    div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 1rem;

        width: 100%;
        height: 100px;
        background-color: var(--color-secundary);

        border: 1px solid var(--color-secundary);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 1rem;

        & > div {
            width: 30px;
            height: 30px;

            & > svg {
                width: 100%;
                height: 100%;
                color: #fff;
                transition: .5s;

                :hover {
                    color: var(--color-negative);
            }
            }
        }
    }

    main{
        overflow-y: auto;
        scroll-behavior: smooth;
        height: 600px;
        max-width: 600px;
        background-image: url(${img});
        background-repeat: repeat;
        background-attachment: fixed;
    }

    main > div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul{

        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
        margin-top: .8rem;
        padding-bottom: -1rem;
        padding: 0 .6rem;
        box-shadow: rgba(0, 0, 1, 0.9) 0px 10px 29px 20px;
    }

    main > ul > li{
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        gap: 20px;
        background-color: rgba(44, 44, 44, 1);
        box-shadow: rgba(0, 0, 1, 0.8) 0px 10px 29px 20px;
        border-radius: 8px;

        & > div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 100%;
                width: 100%;
                gap:1rem;

            & > div:nth-child(1) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 70px;
                    width: 70px;
                    border-radius: 8px;
                    background-color: var(--color-secundary);

                    & > img {
                        object-fit: cover;
                    }
            }

            & > div:nth-child(2){
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 100%;
                    width: 100%;


/*                     & > h2 {
                    } */
                & > fieldset {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 30%;
                    height: 50%;

                        & > div:nth-child(2) > span{
                                font-size: 2rem;
                                color: var(--color-grey-600);
                        }
                }


                & > fieldset > div:nth-child(odd){
                    height: 30px;
                    width: 30px;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    border-radius: 6px;
                    background-color: var(--color-secundary);
                    box-shadow: rgba(0, 0, 1, 0.6) 0px 7px 29px 0px;
                    cursor: pointer;
                }
            }
        }
    }

    img{
        object-fit: cover;
        width: 70px;
    }

    button{
        margin-top: -2rem;
        margin-bottom: 1.5rem;
    }

    fieldset{
        border: none;
        display: flex;
        :nth-child(1){
            color: var(--color-success);
        }
    }
`

export const ContainerModalEmpty = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background-color: rgba(44,44,44, .7);

    h1, h2, h3, h4{
        color: var(--color-grey-600);
    }
    z-index: 10;
`

export const BodyModalEmpty = styled.div`
    width: 600px;
    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
    margin-top: 10%;

    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-0);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 1, 0.8) 0px 7px 29px 10px;

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 1rem;

        width: 100%;
        height: 100px;
        background-color: var(--color-secundary);

        border: 1px solid var(--color-secundary);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 1rem;

        & > div {
            width: 30px;
            height: 30px;
            cursor: pointer;

            & > svg {
                width: 100%;
                height: 100%;
                color: #fff;
                cursor: pointer;
                transition: .5s;

                :hover {
                    color: var(--color-negative);
                }

                & > path {
                    cursor: pointer;
                }
            }
        }
    }

    fieldset{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        gap: 2rem;
        border: 1px solid var(--color-primary);
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        h2{
            font-size: var(--font-bold-1)
        }

        h3{
            font-size: var(--font-bold-3);
            letter-spacing: 1.5px;
        }

        div {
            width: 50px;
            height: 50px;
            cursor: default;

            svg, path{
                width: 100%;
                height: 100%;
                color: var(--color-secundary);
                cursor: default;
            }
        }
    }
`