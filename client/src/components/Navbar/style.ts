import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: var(--dark-500);
  padding: 1.25rem 6.25rem;

  color: var(--light-300);

  nav {
    display: flex;
    flex-direction: row;
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
          bottom: 20%;
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

    .cart,
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
