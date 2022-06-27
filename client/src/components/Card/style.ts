import styled from "styled-components";

export const CardContainer = styled.div`
    width: 16.25rem;
    height: 18.125rem;
    background-color: var(--light-300);
    border-radius: 1.25rem;
    position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
        outline: 2px solid var(--primary-300);
        outline-offset: 2px;
    }

    .images-container {
        padding: 0.5rem;

        .logo-image {
            position: absolute;
            top: 0.5rem;
            left: 0.8rem;
            width: 2rem;
            height: 2rem;
            object-fit: contain;
        }

        .shoe-image {
            width: 100%;
            height: 7.8rem;
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
            align-items: center;
            justify-content: center;

            .title {
                color: var(--dark-300);
                font-size: 1.5rem;
                text-align: center;
            }

            .price {
                font-size: 0.875rem;
                color: var(--primary-300);
            }
        }
    }

    .cart-button {
        background-color: var(--primary-300);
        width: 8.75rem;
        height: 1.6rem;
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
            background-color: var(--primary-500);
        }
    }
`; 