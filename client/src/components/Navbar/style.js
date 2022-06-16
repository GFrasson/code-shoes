import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: var(--dark-500);
  padding: 20px 100px;

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
      padding: 0 0.625rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      transition: 0.3s;
      border-radius: 5px;

      &:not(:last-child) {
        margin-right: 20px;
      }
    }

    .links {
      a {
        position: relative;

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

    .user-avatar {
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 50%;
      border: 2px solid var(--primary-300);
    }
  }
`;
