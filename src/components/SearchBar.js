import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    margin: 20,
    flexDirection: 'row',
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
  },
});
