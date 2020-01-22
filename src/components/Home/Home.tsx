import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TextInput } from 'react-native';

enum measurments {
  Weight = 1,
  Distance = 2,
  Volume = 3
}

const colors = {
  gray: "#b4b4b4",
  blue: "#527ffa"
}

export default function Home() {
  const [activeMeasurments, setMeasure] = useState({ Weight: true, Distance: false, Volume: false });

  const measurmentClick = (measurment: measurments) => {
    let newMeasures = { ...activeMeasurments };
    if (measurment === measurments.Weight) {
      newMeasures.Weight = !newMeasures.Weight;
    }
    if (measurment === measurments.Distance) {
      newMeasures.Distance = !newMeasures.Distance;
    }
    if (measurment === measurments.Volume) {
      newMeasures.Volume = !newMeasures.Volume;
    }
    setMeasure(newMeasures);
  }

  return (
    <View>
      <View style={{ flex: 1, justifyContent: "space-around", flexDirection: "row", height: 12 }}>
        <View style={styles.button}>
          <Button title="Weight" color={activeMeasurments.Weight ? colors.blue : colors.gray} onPress={() => { measurmentClick(measurments.Weight) }} />
        </View>
        <View style={styles.button}>
          <Button title="Distance" color={activeMeasurments.Distance ? colors.blue : colors.gray} onPress={() => { measurmentClick(measurments.Distance) }} />
        </View>
        <View style={styles.button}>
          <Button title="Volume" color={activeMeasurments.Volume ? colors.blue : colors.gray} onPress={() => { measurmentClick(measurments.Volume) }} />
        </View>
      </View>

      <View style={{marginTop: 120, justifyContent:"center", alignContent:"center", flexDirection:"column", flex:1}}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
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