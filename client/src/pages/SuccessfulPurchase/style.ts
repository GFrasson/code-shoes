import styled from "styled-components";

export const SuccessfulPurchaseContainer = styled.div`
    main {
        height: calc(100vh - 6.6rem);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .success-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                color: var(--light-300);
                font-weight: 600;
                font-size: 3rem;
            }

            @keyframes shake {
                0%, 25%, 100% {
                    transform: rotateZ(0deg);
                }

                10%, 20% {
                    transform: rotateZ(20deg);
                }

                5%, 15% {
                    transform: rotateZ(-20deg);
                }
            }

            svg {
                color: var(--primary-300);
                animation: shake 2s ease-in-out infinite;
            }
        }
    }
`;