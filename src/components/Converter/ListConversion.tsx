import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { conversion } from '../../models';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface props {
  conversion: conversion,
  pressHandler(key: number): void
}

const ConvertListElement: React.FC<props> = ({ conversion, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(conversion.key)}>
      <View style={styles.item}>
        <View style={{ padding: 3, width: "50%" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign:"center" }}>{conversion.value}</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", textAlign:"center" }}>{conversion.from.abbr}</Text>
        </View>
        <View style={{ borderRightColor: "white", borderRightWidth: 2 }}></View>
        <View style={{ padding: 3, width: "50%" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign:"center" }}>{conversion.con_value}</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", textAlign:"center" }}>{conversion.to.abbr}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 16,
    borderColor: "coral",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    alignContent: "space-around"
  }
})

export default ConvertListElement;