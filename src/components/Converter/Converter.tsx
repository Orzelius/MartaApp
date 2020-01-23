import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TextInput } from 'react-native';
import TopBar from '../TopBar';
import Input from './Inputs';
import { measure, conversion } from '../../models';
import { FlatList } from 'react-native-gesture-handler';
import ListConvert from '../ListConvert/ListConvert';
import ConvertListElement from './ListConversion';

enum measurments {
  Mass = 1,
  Length = 2,
  Volume = 3
}

const colors = {
  gray: "#b4b4b4",
  blue: "coral"
}

export default function Converter({ navigation }) {
  const [activeMeasurments, setMeasure] = useState({ Mass: true, Length: false, Volume: false });
  const initConversion: conversion[] = []
  const [conversions, setConversions] = useState(initConversion);

  const handleBack = () => {
    navigation.goBack();
  }

  const measurmentClick = (measurment: measurments) => {
    let newMeasures = { ...activeMeasurments };
    if (measurment === measurments.Mass) {
      newMeasures.Mass = !newMeasures.Mass;
      newMeasures.Length = false;
      newMeasures.Volume = false;
    }
    if (measurment === measurments.Length) {
      newMeasures.Mass = false;
      newMeasures.Length = !newMeasures.Length;
      newMeasures.Volume = false;
    }
    if (measurment === measurments.Volume) {
      newMeasures.Mass = false;
      newMeasures.Length = false;
      newMeasures.Volume = !newMeasures.Volume;
    }
    setMeasure(newMeasures);
  }

  const addConversion = (conversion: conversion) => {
    if(conversion.value && conversion.value != 0){
      setConversions([conversion, ...conversions]);
    }
  }

  const deleteConversion = (key: number) => {
    setConversions(conversions => {
      return conversions.filter(con => con.key != key);
    });
  }

  return (
    <View style={{flex:1}}>
      <TopBar title="Converter" return={handleBack} />
      <View style={{ justifyContent: "space-around", paddingTop: 10, flexDirection: "row" }}>
        <View style={styles.button}>
          <Button title="Mass" color={activeMeasurments.Mass ? colors.blue : colors.gray} onPress={() => { measurmentClick(measurments.Mass) }} />
        </View>
        <View style={styles.button}>
          <Button title="Length" color={activeMeasurments.Length ? colors.blue : colors.gray} onPress={() => { measurmentClick(measurments.Length) }} />
        </View>
        <View style={styles.button}>
          <Button title="Volume" color={activeMeasurments.Volume ? colors.blue : colors.gray} onPress={() => { measurmentClick(measurments.Volume) }} />
        </View>
      </View>
      <View style={{}}>
        <Input measures={activeMeasurments} rememberConversion={addConversion}></Input>
      </View>
      <View style={{flex:1, padding:10}}>
        <FlatList
          data={conversions}
          renderItem={(conversion) => (
            <ConvertListElement pressHandler={deleteConversion} conversion={conversion.item}/>
          )}
        />
      </View>
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
  },
  input: {
    width: "90%",
    borderColor: "#89a5f1",
    borderWidth: 1,
    borderRadius: 0.8,
    height: 40,
    margin: 4,
  }
});