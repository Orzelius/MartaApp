import * as React from 'react';
import { View, Picker, Text, PickerItem, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { measure, conversion } from '../../models';
const convert = require('convert-units')

interface inputProps {
  measures: {
    Mass: boolean,
    Length: boolean,
    Volume: boolean
  }
  rememberConversion(conversion: conversion): void
}

export default function Input(props: inputProps) {
  const [inputs, setInput] = React.useState({ from: "", to: "" });

  let measuresTypes: Array<{
    abbr: string,
    measure: string,
    plural: string,
    singular: string,
    system: string,
    pickItem: JSX.Element
  }> = [];
  let pickItems: JSX.Element[] = [];
  if (props.measures.Mass) {
    measuresTypes.push(...convert().list('mass'));
  }
  if (props.measures.Length) {
    measuresTypes.push(...convert().list('length'));
  }
  if (props.measures.Volume) {
    measuresTypes.push(...convert().list('volume'));
  }
  const initMeasure: measure = measuresTypes[2];
  const [pickerStatus, setPick] = React.useState({ from: initMeasure, to: initMeasure });

  measuresTypes.forEach((measure, index) => {
    pickItems.push(<Picker.Item label={measure.plural + " | " + measure.abbr} key={index} value={measure.abbr} />);
  });

  const handleConvert = (from: string) => {
    setInput({
      to: convert(from).from(pickerStatus.from.abbr).to(pickerStatus.to.abbr),
      from
    });
  }

  const selector = (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ borderBottomColor: "coral", borderBottomWidth: 2, width: "40%" }}>
        <Picker
          selectedValue={pickerStatus.from.abbr}
          onValueChange={(itemValue, itemIndex) => {
            console.log(itemValue)
            setPick({ ...pickerStatus, from: measuresTypes.filter(item => item.abbr === itemValue)[0] })
          }
          }
          style={{ width: "100%" }}>
          {pickItems}
        </Picker>
      </View>
      <View style={{ paddingTop: 7 }}>
        <AntDesign name="arrowright" size={32} color="black" />
      </View>
      <View style={{ borderBottomColor: "coral", borderBottomWidth: 2, width: "40%" }}>
        <Picker
          selectedValue={pickerStatus.to.abbr}
          onValueChange={(itemValue, itemIndex) => {
            console.log(itemValue)
            setPick({ ...pickerStatus, to: measuresTypes.filter(item => item.abbr === itemValue)[0] })
          }
          }
          style={{ width: "100%" }}>
          {pickItems}
        </Picker>
      </View>
    </View>);

  return (
    <View>
      {(props.measures.Length || props.measures.Volume || props.measures.Mass) ? selector : null}
      <View style={{ flexDirection: "row", paddingTop: 12, justifyContent: "space-between" }}>
        <TextInput placeholder={pickerStatus.from.abbr} onChangeText={text => { handleConvert(text) }}
          value={inputs.from.toString()} keyboardType="number-pad"
          style={{ fontSize: 18, padding: 5, borderBottomColor: "coral", borderBottomWidth: 2, width: "45%" }} />
        <TextInput placeholder={pickerStatus.to.abbr} editable={false} value={inputs.to.toString()}
          style={{ fontSize: 18, padding: 5, borderBottomColor: "coral", borderBottomWidth: 2, width: "45%", textAlign: "right" }} />
      </View>
      <View style={{ paddingHorizontal: 10, paddingVertical: 15 }}>
        <Button onPress={() => props.rememberConversion({ con_value: parseFloat(inputs.to), value: parseFloat(inputs.from), from: pickerStatus.from, to: pickerStatus.to, key: Math.random() })} title="Remember Conversion" />
      </View>
    </View>
  )
}