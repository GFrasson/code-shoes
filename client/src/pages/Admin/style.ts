import styled from "styled-components";

export const AdminContainer = styled.div`
    main {
        color: var(--light-300);
        margin: 4rem;

        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            font-size: 3rem;
            font-weight: 600;
        }

        & > div {
            margin-bottom: 2rem;
        }
    }
`;