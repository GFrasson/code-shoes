import styled from "styled-components";

export const ImageInputContainer = styled.div`
    label {
        width: 1rem;
        height: 1rem;
        padding: 0.5rem 1.2rem;
        font-size: 2rem;
        background-color: var(--dark-300);
        color: var(--light-300);
        border-radius: 0.25rem;
        cursor: pointer;
        transition: background 0.2s;

        &:hover,
        &:focus {
            background-color: var(--dark-500);
            outline: var(--primary-300) 2px solid;
            outline-offset: 2px;
        }
    }

    input[type="file"] {
        display: none;
    }
`;