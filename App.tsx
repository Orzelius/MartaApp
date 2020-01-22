import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import Home from './src/components/Home/Home';

export default function App() {
  return (
    <View>
      <StatusBar hidden />
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    width: '30%',
    height: 40,
    marginTop: 5,
    marginLeft: 2,
    marginRight: 2
  }
});
