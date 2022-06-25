import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: var(--dark-500);
  display: flex;
  align-items: center;
  height: 6.5rem;
  padding: 1.25rem 6.25rem;

  color: var(--light-300);

  nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;

    .logo {
      font-size: 1.375rem;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      transition: 0.3s;
      border-radius: 5px;
    }

    .links {
      a {
        padding: 0 0.625rem;
        position: relative;

        &:not(:last-child) {
          margin-right: 1.25rem;
        }

        &::after,
        &.active::after {
          content: '';
          position: absolute;
          bottom: 5%;
          left: 10%;
          border: 0px solid var(--primary-300);
          width: 0;
          transition: all 0.3s;
        }

        &:hover::after,
        &.active::after {
          width: 80%;
          border-width: 1px;
        }
      }
    }

    .cart {
      padding: 0 0.625rem;
      
      .cart-container {
        position: relative;
        
        .cart-counter {
          position: absolute;
          top: -5px;
          right: -5px;
          text-align: center;
          line-height: 1rem;
          background-color: var(--secondary-300);
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }
      }
    }
    
    .user {
      padding: 0 0.625rem;
    }

    .user-avatar {
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 50%;
      border: 2px solid var(--primary-300);
    }
  }
`;
