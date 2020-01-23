import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, TouchableWithoutFeedback, StatusBar, Keyboard, Text } from 'react-native';
import Converter from '../Converter/Converter';

export default function Home({navigation}) {
  const conversionsButtonPress = () => {
    navigation.push('ListConvert');
  }
  const converterButtonPress = () => {
    navigation.push('Converter');
  }
  const AboutButtonPress = () => {
    navigation.push('About');
  }
  return (
    // <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
    <View style={{ paddingHorizontal: 5 }}>
      <View style={{ padding: 10, paddingTop: 150 }}>
        <Text style={{ fontSize: 48, textAlign: "center", fontWeight: "bold", color: "coral" }}>MartaApp</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", paddingTop: "40%" }}>
        <View style={styles.button}>
          <Button color="orange" title="CONVERTER" onPress={converterButtonPress} />
        </View>
        <View style={styles.button}>
          <Button color="coral" title="MY CONVERSIONS" onPress={conversionsButtonPress} />
        </View>
      </View>
      <View style={{ alignItems: "center", alignContent: "flex-end", flexDirection: "column-reverse", marginTop: 12 }}>
        <View style={{
          width: '35%',
          marginTop: 5,
          marginLeft: 2,
          marginRight: 2
        }}>
          <Button title="about" color="#aaa" onPress={AboutButtonPress} />
        </View>
      </View>
    </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '45%',
    height: 40,
    marginTop: 5,
    marginLeft: 2,
    marginRight: 2
  }
});