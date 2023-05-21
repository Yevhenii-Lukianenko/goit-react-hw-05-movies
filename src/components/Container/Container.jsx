import PropTypes from 'prop-types';
import { ContainerTemplate } from 'components/Container/Container.styled';

export const Container = ({ children }) => (
  <ContainerTemplate>{children}</ContainerTemplate>
);

Container.propTypes = {
  children: PropTypes.element.isRequired,
};
