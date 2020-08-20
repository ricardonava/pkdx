import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const Search = styled(Searchbar)`
  border-radius: 0px;
`;

const SearchComponent = (props) => {
  const { searchByName } = props;
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <Search
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => searchByName(searchQuery)}
      />
    </>
  );
};

SearchComponent.propTypes = {
  searchByName: PropTypes.func.isRequired
};

export default SearchComponent;
