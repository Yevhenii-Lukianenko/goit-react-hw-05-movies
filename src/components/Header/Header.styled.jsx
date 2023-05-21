import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavSection = styled.header`
  background-color: #4c4c4c;
`;

export const List = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

export const Item = styled.li``;

export const Link = styled(NavLink)`
  display: block;
  padding: 30px 0;
  color: #bcbcbc;
  &.active {
    color: tomato;
  }
`;
