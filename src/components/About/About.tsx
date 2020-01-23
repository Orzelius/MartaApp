import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import TopBar from '../TopBar';

export default function About({ navigation }) {

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <View>
      <TopBar return={handleBack} title="My Conversions"></TopBar>
      <View style={{ padding: 50 }}>
        <Text style={{fontSize:40, color:"coral", textAlign:"center"}}>Marta App</Text>
        <Text style={{fontSize:18, color:"black", textAlign:"center", marginTop:20}}>Hey! this app does conversions n' stuff.</Text>
      </View>
    </View>
  );
}