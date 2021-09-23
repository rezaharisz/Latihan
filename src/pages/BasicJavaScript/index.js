import React from 'react';
import {View, Text} from 'react-native';

const firstName = 'Reza';
const middletName = 'Haris';
const lastName = 'Alfikri';

let name = '';
const kondisi = true;

if (kondisi == true) {
  name = firstName + ' ' + middletName;
} else {
  name = middletName + ' ' + lastName;
}

const hewanPeliharaan = {
  namaHewan: 'Kucing',
  jenisHewan: {
    isHewanRumahan: true,
  },
};

const listName = ['Messi', 'Benzema', 'Ronaldo', 'Rooney'];

function BasicJavaScript() {
  return (
    <View>
      <Text>Basic Java Script</Text>
      <Text>{name}</Text>
      <Text>{hewanPeliharaan.namaHewan}</Text>
      {listName.map(orang => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
}

export default BasicJavaScript;
