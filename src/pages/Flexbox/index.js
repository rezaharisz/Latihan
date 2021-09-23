import React, {useEffect, useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import YoutubeLogo from '../../assets/icons/youtube.svg';

function Flexbox() {
  const [subscribers, setSubscribers] = useState(2);

  useEffect(() => {
    console.log('Did Mount');

    return () => {
      console.log('Did Update');
      setTimeout(() => {
        setSubscribers(3);
      }, 2000);
    };
  }, [subscribers]);

  // useEffect(() => {
  //   console.log('Did Update');
  //   setTimeout(() => {
  //     setSubscribers(8);
  //   }, 1000);
  // }, [subscribers]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'gray',
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}} />
        <View style={{backgroundColor: 'green', width: 50, height: 50}} />
        <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
      </View>
      <View style={{alignItems: 'flex-end', marginTop: 16, marginEnd: 16}}>
        <YoutubeLogo style={{width: 50, height: 50}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 16,
          marginStart: 16,
        }}>
        <Image
          source={{
            uri: 'https://awsimages.detik.net.id/community/media/visual/2019/04/25/6db0c163-6a58-481a-8a42-5b3df0b9e4f7_169.png?w=700&q=90',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginEnd: 16}}
        />
        <View>
          <Text style={style.textUser}>Robert Downey Jr</Text>
          <Text style={style.textSubscribers}>
            {subscribers} Juta Subscribers
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginStart: 16,
          marginEnd: 16,
          marginTop: 16,
        }}>
        <Text style={style.textSubscribers}>BERANDA</Text>
        <Text style={style.textSubscribers}>VIDEO</Text>
        <Text style={style.textSubscribers}>PLAYLIST</Text>
        <Text style={style.textSubscribers}>CHANNEL</Text>
        <Text style={style.textSubscribers}>TENTANG</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  textUser: {
    fontSize: 16,
    fontFamily: 'Poppins Bold 700',
  },
  textSubscribers: {
    fontSize: 14,
    fontFamily: 'Poppins Regular 400',
  },
});

export default Flexbox;
