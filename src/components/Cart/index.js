import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Trolley from '../../assets/icons/shopping-cart.svg';

function Cart(props) {
  return (
    <View style={styles.parent_wrapper}>
      <View style={styles.trolley_wrapper}>
        <Trolley style={styles.trolley} />
        <Text style={styles.notif_style}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  parent_wrapper: {
    padding: 16,
  },
  text: {
    fontFamily: 'Poppins Medium 500',
    fontSize: 12,
    marginTop: 12,
    maxWidth: 70,
    textAlign: 'center',
  },
  trolley: {
    width: 36,
    height: 36,
  },
  trolley_wrapper: {
    borderWidth: 1,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70 / 2,
  },
  notif_style: {
    backgroundColor: '#6FCF97',
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    padding: 3,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default Cart;
