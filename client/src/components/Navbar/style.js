import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background: var(--main-green);
  padding: 20px 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;

  nav {
    display: flex;
    flex-direction: row;

    a {
      color: #fff;
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      transition: 0.3s;
      border-radius: 5px;

      &:hover, &.active {
        background-color: var(--dark-green);
      }

      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
`;
