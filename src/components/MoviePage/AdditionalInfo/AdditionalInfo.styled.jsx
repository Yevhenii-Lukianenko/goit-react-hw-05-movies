import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AddInfoContainer = styled.div`
  margin: 20px 0;
`;

export const PartTitle = styled.h3`
  margin-bottom: 20px;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LinkItem = styled.li``;

export const MoreInfoLink = styled(NavLink)`
  display: inline-block;
  &:hover {
    color: tomato;
  }
  &.active {
    color: tomato;
  }
`;
