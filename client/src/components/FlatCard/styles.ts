import styled from 'styled-components';

export const FlatCardContainer = styled.div`
    .card-container {
        display: flex;
        align-items: center;

        width: 18.75rem;
        height: 8.125rem;
        background-color: var(--light-300);
        border-radius: 1.25rem;
        position: relative;

        .images-container {
            width: 8rem;
            padding: 0.5rem;

            .brand-image {
                position: absolute;
                top: 0.25rem;
                left: 0.75rem;
                width: 1.5rem;
                height: 1.5rem;
                object-fit: contain;
            }

            .shoe-image {
                height: 100%;
                width: 7.5rem;
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
                    font-size: 1rem;
                }
    
                .price {
                    font-size: 0.875rem;
                    color: var(--primary-300);
                }
            }
            

        }
    }
`;