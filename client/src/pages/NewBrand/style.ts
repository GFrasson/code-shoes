import styled from "styled-components";

export const NewBrandContainer = styled.div`
    main {
        color: var(--light-300);
        margin: 4rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        .form-title {
            font-size: 3rem;
            font-weight: 600;
        }

        .page-form {
            background-color: var(--dark-500);
            width: 60rem;
            height: auto;
            padding: 6.25rem 10rem;
            border-radius: 1.25rem;

            .label-text {
                font-size: 0.875rem;
                font-weight: 500;
                margin-bottom: 0.5rem;
            }

            .form-submit {
                background-color: var(--primary-300);
                width: 8.5rem;
                height: 2.4rem;
                padding: 0.25rem 1rem;
                border-radius: 0.625rem;
                color: var(--light-300);
                font-weight: 600;
                font-size: 1rem;
                transition: all 0.2s;

                &:hover {
                    background-color: var(--primary-500);
                }
            }
        }
    }
`;