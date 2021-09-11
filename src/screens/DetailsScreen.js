import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

import yelp from '../api/yelp';

const DetailsScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  console.log(result);

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
  },
});
