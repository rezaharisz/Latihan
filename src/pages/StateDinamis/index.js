import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <View>
      <Text style={styles.numberStyle}>{number}</Text>
      <Button
        title={'Count'}
        onPress={() => {
          setNumber(number + 1);
        }}
        style={styles.buttonStyle}
      />
    </View>
  );
}

function StateDinamis() {
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.mainTitle}>Latihan Menggunakan State Dinamis</Text>
      <Counter />
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 16,
  },
  mainWrapper: {
    padding: 16,
  },
  numberStyle: {
    textAlign: 'center',
    marginVertical: 12,
  },
  buttonStyle: {},
});

export default StateDinamis;
