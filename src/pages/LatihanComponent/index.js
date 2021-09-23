import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';

function LatihanComponent() {
  return (
    <View>
      <Latihan />
      <Text
        style={{
          marginStart: 16,
        }}>
        Shang Chi
      </Text>
      <ImgCall />
      <TextInput
        style={{
          borderWidth: 1,
          marginTop: 16,
          marginStart: 16,
          marginEnd: 16,
        }}
      />
      <TextClass />
      <ImageClass />
    </View>
  );
}

function Latihan() {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 16,
          marginBottom: 16,
        }}>
        Latihan React Native
      </Text>
      <Text
        style={{
          fontStyle: 'italic',
          marginStart: 16,
        }}>
        Oleh :
      </Text>
    </View>
  );
}

function ImgCall() {
  return (
    <View>
      <Image
        source={{
          uri: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/shangchi_lob_crd_07.jpg',
        }}
        style={{
          width: 100,
          height: 100,
          marginStart: 16,
        }}
      />
    </View>
  );
}

class TextClass extends Component {
  render() {
    return (
      <Text
        style={{
          textAlign: 'center',
          marginTop: 24,
          fontWeight: 'bold',
        }}>
        Mencoba membuat component dengan class
      </Text>
    );
  }
}

class ImageClass extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://www.futuremind.com/m/cache/c8/15/c8150d863e584ed42ccfbdc3f3f1aa3a.jpg',
          }}
          style={{
            width: 200,
            height: 100,
            marginTop: 8,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  }
}

export default LatihanComponent;
