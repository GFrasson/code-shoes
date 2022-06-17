import styled from "styled-components";

export const CartContainer = styled.div`
    main {
        max-width: 80%;
        color: var(--light-300);
        margin: 4rem auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        .page-title {
            font-weight: 600;
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }

        & > div {
            margin-bottom: 3.5rem;
        }

        .finish-shopping-button {
            background-color: var(--primary-300);
            width: 12rem;
            height: 2.8rem;
            padding: 0.25rem 1rem;
            border-radius: 0.625rem;
            color: var(--light-300);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.2s;

            &:hover {
                background-color: var(--primary-500);
            }
        }
    }    
`;