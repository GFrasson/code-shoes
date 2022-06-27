import styled from "styled-components";

export const WideCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 1rem;
    width: 70%;
    height: 12rem;
    background-color: var(--light-300);
    border-radius: 1.25rem;
    position: relative;

    &:hover,
    &.active {
        outline: 2px solid var(--primary-300);
        outline-offset: 2px;
    }

    .images-container {
        width: 11.5rem;
        padding: 0.5rem;

        .brand-image {
            position: absolute;
            top: 0.25rem;
            left: 0.75rem;
            width: 2.5rem;
            height: 2.5rem;
            object-fit: contain;
        }

        .shoe-image {
            height: 100%;
            width: 80%;
            object-fit: contain;
        }
    }

    .content-box {
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        
        .content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            .title {
                color: var(--dark-300);
                font-size: 1.5rem;
            }

            .price {
                font-size: 1.25rem;
                color: var(--primary-300);
            }
        }
    }

    .cart-button-container {
        width: 11.5rem;
        .cart-button {
            background-color: var(--secondary-300);
            width: 9rem;
            height: 2.5rem;
            padding: 0.25rem 1rem;
            border-radius: 0.625rem;
            color: var(--light-300);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.2s;

            span {
                margin-left: 0.1rem;
                font-weight: 600;
                font-size: 0.875rem;
            }

            &:hover {
                background-color: var(--secondary-500);
            }
        }
    }
`;