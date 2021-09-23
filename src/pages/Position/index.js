import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Trolley from '../../assets/icons/shopping-cart.svg';

function Position() {
  return (
    <View style={styles.parent_wrapper}>
      <Text style={styles.title}>Latihan Menggunakan Position</Text>
      <View style={styles.cart_wrapper}>
        <View style={styles.trolley_wrapper}>
          <Trolley style={styles.trolley} />
          <Text style={styles.notif_style}>10</Text>
        </View>
        <Text style={styles.text}>Keranjang Belanja Anda</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent_wrapper: {
    padding: 16,
  },
  cart_wrapper: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins Medium 500',
    fontSize: 12,
    marginTop: 12,
  },
  trolley: {
    width: 40,
    height: 40,
  },
  trolley_wrapper: {
    borderWidth: 1,
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90 / 2,
  },
  notif_style: {
    backgroundColor: '#6FCF97',
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    padding: 4,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Poppins Bold 700',
  },
});

export default Position;
