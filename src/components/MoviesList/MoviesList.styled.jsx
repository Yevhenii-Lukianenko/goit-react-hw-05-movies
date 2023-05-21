import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 275px;
  background-color: #4c4c4c;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const DetailLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Image = styled.img`
  height: 412px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const MovieTitle = styled.h3`
  color: #bcbcbc;
  font-size: 16px;
`;
