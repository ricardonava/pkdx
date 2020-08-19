import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const SearchComponent = (props) => {
  const { searchByName } = props;
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <Searchbar
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
