import styled from 'styled-components';

export const ProductsContainer = styled.div`
    .products-page {
        margin: 4rem 6.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .filter {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 4rem;

            .search {
                margin-right: 1rem;
                padding: 0.8rem;
                border-radius: 1.25rem;
            }
        }

        #productsContainer {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            max-width: 63rem;

            & > div {
                margin-bottom: 3.5rem;
            }
        }
    }
`;