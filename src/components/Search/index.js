import React from 'react';
import {styles} from './styles';
import {View, Text, TextInput} from 'react-native';

const Search = ({setQuery}) => {
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.searchBtn}>
        <Text style={styles.searchText}>Search</Text>
      </View>
      <TextInput
        placeholder="search"
        style={styles.input}
        onChangeText={(value) => setQuery(value)}
      />
    </View>
  );
};

export default Search;
