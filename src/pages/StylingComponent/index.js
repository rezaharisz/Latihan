import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Laptop from '../../assets/images/sample_image.jpeg';

function StylingComponent() {
  return (
    <View>
      <Text style={styles.text}>Latihan Styling Component</Text>
      <View
        style={{
          alignSelf: 'center',
          padding: 12,
          backgroundColor: '#F2F2F2F2',
          borderRadius: 8,
        }}>
        <Image
          source={Laptop}
          style={{width: 162, height: 91, borderRadius: 8}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 14, marginTop: 16}}>
          Lenovo Ideapad 2021
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 14,
            color: '#F2994A',
          }}>
          Rp. 12.000.000,-
        </Text>
        <Text style={{fontWeight: '300', fontSize: 12, marginTop: 12}}>
          Kota Semarang
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 14,
              color: 'white',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
}

//Make stylesheet, dont forget to import first
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default StylingComponent;
