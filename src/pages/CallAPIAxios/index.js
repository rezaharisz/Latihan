import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

function CallAPIAxios() {
  const [dataUser, setData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  });

  const [dataJob, setJob] = useState({
    name: '',
    job: '',
  });

  const [resultGET, setResultGET] = useState('');

  function getUser() {
    axios
      .get('https://reqres.in/api/users/2')
      .then(result => {
        if (result != null) {
          setResultGET('Data Received Successfuly');
          setData(result.data.data);
        } else {
          setResultGET('Failed Receive Data');
        }
      })
      .catch(err => console.log('result error: ', err));
  }

  function postUser() {
    const sampleData = {
      name: 'morpheus',
      job: 'leader',
    };

    axios
      .post('https://reqres.in/api/users', sampleData)
      .then(result => setJob(result.data))
      .catch(err => console.log('result error: ', err));
  }

  function deleteUser() {
    axios
      .delete('https://reqres.in/api/users/2')
      .then(result => console.log(result))
      .catch(err => console.log('result error: ', err));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Penggunaan API Dengan Axios</Text>
      <View style={styles.button}>
        <Button title={'GET DATA'} onPress={getUser} />
      </View>
      {dataUser.avatar.length > 0 && (
        <View>
          <Text>{resultGET}</Text>
          <Image source={{uri: dataUser.avatar}} style={styles.avatarPhoto} />
          <Text style={styles.textData}>{dataUser.email} </Text>
          <Text style={styles.textData}>
            {dataUser.first_name + dataUser.last_name}
          </Text>
        </View>
      )}
      <View style={styles.line} />
      <View style={styles.button}>
        <Button title={'POST DATA'} onPress={postUser} />
      </View>
      {dataJob.name.length > 0 && (
        <View>
          <Text>Data Posted Successfuly</Text>
          <Text>{dataJob.name}</Text>
          <Text>{dataJob.job}</Text>
        </View>
      )}
      <View style={styles.line} />
      <View style={styles.button}>
        <Button title={'DELETE DATA'} onPress={deleteUser} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  avatarPhoto: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginVertical: 8,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 8,
  },
  textData: {
    textAlign: 'center',
    fontSize: 14,
  },
  button: {
    marginVertical: 16,
  },
});

export default CallAPIAxios;
