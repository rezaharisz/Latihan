import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

function Communication() {
  const [productQuantity, setProductQuantity] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Latihan Komunikasi Antar Component</Text>
      <Cart quantity={productQuantity} />
      <Product
        onClick={() => {
          setProductQuantity(productQuantity + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  mainTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Communication;
