import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import TopBar from '../TopBar';

export default function ListConvert({navigation}) {

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <View>
      <TopBar  return={handleBack} title="My Conversions"></TopBar>
      <Text style={{marginTop:60}}>List of converts</Text>
    </View>
  );
}