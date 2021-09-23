import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Laptop from '../../assets/images/sample_image.jpeg';

function Product(props) {
  return (
    <View style={styles.wrapper}>
      <Image source={Laptop} style={styles.productImage} />
      <Text style={styles.productName}>Lenovo Ideapad 2021</Text>
      <Text style={styles.productPrice}>Rp. 12.000.000,-</Text>
      <Text style={styles.productLocation}>Kota Semarang</Text>
      <TouchableOpacity onPress={props.onClick}>
        <View style={styles.buttonStyle}>
          <Text style={styles.textButton}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    padding: 12,
    backgroundColor: '#F2F2F2F2',
    borderRadius: 8,
  },
  productImage: {
    width: 162,
    height: 91,
    borderRadius: 8,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 16,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 14,
    color: '#F2994A',
  },
  productLocation: {
    fontWeight: '300',
    fontSize: 12,
    marginTop: 12,
  },
  buttonStyle: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
    color: 'white',
  },
});

export default Product;
