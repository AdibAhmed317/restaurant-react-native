import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [resutls, setResults] = useState([]);

  const searchAPI = async () => {
    // const response = await yelp.get(`/search?=${term}& location=Chicago`)
    const response = await yelp.get('/people/1', {
      params: {
        limit: 50,
        term: term,
        location: 'san jose',
      },
    });
    setResults(response.data.business);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
      <Text>We've found {resutls.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
