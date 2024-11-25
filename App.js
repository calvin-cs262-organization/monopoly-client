/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, FlatList, Text, View,
} from 'react-native';

/**
 * This application presents a simple list of players from the example Monopoly
 * database. The code is based on the ReactNative networking example:
 * - https://reactnative.dev/docs/network>
 */
export default App = function () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://cs262-webservice.azurewebsites.net/players')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Text>
              {item.id}, {' '}, {item.emailaddress}, {' '}, {item.name}
            </Text>
          )}
        />
      )}
    </View>
  );
};
