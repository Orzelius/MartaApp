import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

interface topBarProps {
  title: string,
  return(): void
}

export default function TopBar(props: topBarProps) {
  return (
    <View style={{ flexDirection: "row", paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 2, backgroundColor: "#ff9464", borderColor: "coral" }}>
      <StatusBar hidden />
      <TouchableOpacity onPress={props.return}>
        <View style={{ marginRight: 20, borderColor: "coral", borderWidth: 1, paddingHorizontal: 10, paddingVertical: 1, borderRadius: 10, backgroundColor: "#ff7f50" }}>
          <Ionicons name="ios-arrow-back" size={32} color="white" />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 23, fontWeight: "bold", color: 'white' }}>{props.title}</Text>
      </View>
    </View>
  );
}