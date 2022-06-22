import styled from "styled-components";

export const ErrorContainer = styled.div`
    color: var(--light-300);
    padding: 5rem;

    @keyframes letterJump {
        0%, 100% {
            top: 0;
        }

        50% {
            top: -20px;
        }
    }

    .error-status {
        color: var(--secondary-300);
        font-weight: 600;
        font-size: 12rem;

        span {
            position: relative;
            top: 0;
            animation: letterJump 2s ease-in-out infinite;
        
            &:nth-child(1) {
                animation-delay: 0s;
            }

            &:nth-child(2) {
                animation-delay: 0.4s;
            }

            &:nth-child(3) {
                animation-delay: 0.8s;
            }
        }
    }

    .error-message {
        font-weight: 500;
        font-size: 2rem;

    }
`;