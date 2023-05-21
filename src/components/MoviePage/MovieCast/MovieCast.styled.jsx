import styled from '@emotion/styled';

export const ActorList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  gap: 24px;
`;

export const ActorCard = styled.li`
  width: 150px;
`;

export const Photo = styled.img`
  object-fit: cover;
  height: 225px;
`;

export const Name = styled.h3`
  font-size: 16px;
`;

export const CharacterName = styled.p`
  font-size: 12px;
`;
