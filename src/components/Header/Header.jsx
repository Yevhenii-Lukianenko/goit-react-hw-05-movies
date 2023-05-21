import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavSection, List, Item, Link } from './Header.styled';
import { Container } from 'components/Container/Container';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <NavSection>
        <Container>
          <List>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to="/movies">Movies</Link>
            </Item>
          </List>
        </Container>
      </NavSection>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
