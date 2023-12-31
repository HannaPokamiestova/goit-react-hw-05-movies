import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 0;
  border-bottom: 2px solid black;

  > nav {
    display: flex;
    gap: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  transition: color 250ms linear, background-color 250ms linear;

  &.active {
    background-color: #bb86fc;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #bb86fc;
  }
`;
