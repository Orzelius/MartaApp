import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Converter from './src/components/Converter/Converter';
import Navigator from './src/routes/homeStack';

export default function App() {
  return (
    <Navigator/>
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
