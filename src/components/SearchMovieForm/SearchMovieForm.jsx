import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Label, Input, SubmitBtn } from './SearchMovieForm.styled';

export const SearchMovieForm = props => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchQuery = e => setSearchQuery(e.currentTarget.value);

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        props.onSubmit(searchQuery);
        setSearchQuery('');
      }}
    >
      <Label>
        <Input
          placeholder="Enter the name of the movie"
          type="text"
          value={searchQuery}
          onChange={handleSearchQuery}
        />
      </Label>
      <SubmitBtn type="submit">Search</SubmitBtn>
    </Form>
  );
};

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};