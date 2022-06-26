import styled from "styled-components";

export const CardCollapseContainer = styled.div`
    width: 80%;
    height: 100%;
    overflow: hidden;

    -moz-transition: height 0.5s;
    -ms-transition: height 0.5s;
    -o-transition: height 0.5s;
    -webkit-transition: height 0.5s;
    transition: height 0.5s;

    &.open .card-visible-content {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .card-visible-content {
        background-color: var(--light-300);
        color: var(--dark-500);
        height: 5rem;
        border-radius: 0.625rem;
        padding: 0.5rem 2rem;
        
        display: flex;
        align-items: center;
        justify-content: space-between;

        
        .brand-image {
            width: 4rem;
            height: 4rem;
            object-fit: contain;
        }
        
        .title-container {
            width: 8rem;
        
            h2 {
                font-size: 1.5rem;
                font-weight: 600;
            }
        }
        
        .collapse-button-container {
            width: 4rem;
            display: flex;
            justify-content: flex-end;
        }
    }

    .card-hidden-content {
        height: 0;

        .grid-align {
            align-items: center;
        }
    }

    &.open .card-hidden-content {
        height: auto;
    }
`;