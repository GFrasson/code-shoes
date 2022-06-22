import styled from 'styled-components';

export const HomeContainer = styled.div`
    height: 100vh;
    color: var(--light-300);
    
    main {
        position: relative;

        .page-content {
            display: flex;
            justify-content: center;
            min-height: calc(100vh - 6.6rem);
            height: auto;

            .content-container {
                width: 50%;
                height: 100%;
                padding-top: 2rem;
                padding-left: 6.25rem;
                margin-bottom: 12rem;

                .product-name-title {
                    /* word-break: break-all; */
                    text-transform: uppercase;
                    max-width: 25rem;
                    line-height: 7rem;
                    font-size: 6.125rem;
                    font-family: Staatliches;
                }
            
                .price {
                    font-weight: 400;
                    font-size: 1.75rem;
                }
            }

            .carousel-container {
                width: 50%;
                height: auto;
                background-color: var(--dark-500);

                .carousel {
                    height: 100%;
                    
                    img {
                        object-fit: contain;
                    }
                }
            }
        }

        .flat-cards-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 6.25rem;

            margin-top: -12rem;
            width: 100%;
        }
    }
`;