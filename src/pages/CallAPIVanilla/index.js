import React, {useEffect, useState} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

function CallAPIVanilla() {
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

  const [resultApi, setResultApi] = useState(false);
  const [resultPost, setResultPost] = useState(false);

  useEffect(() => {
    //GET
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    //POST
    // const sampleData = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // console.log('data object: ', sampleData);
    // console.log('data stringify: ', JSON.stringify(sampleData));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(sampleData),
    // });
  }, []);

  function getUser() {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setData(json.data);
      });
    setResultApi(true);
  }

  function postUser() {
    const sampleData = {
      name: 'morpheus',
      job: 'leader',
    };

    setResultPost(true);

    console.log('data object: ', sampleData);
    console.log('data stringify: ', JSON.stringify(sampleData));
    try {
      fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sampleData),
      })
        .then(response => response.json())
        .then(json => setJob(json));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Penggunaan API Dengan Vanilla JS</Text>
      <View style={styles.button}>
        <Button title={'GET DATA'} onPress={getUser} />
      </View>
      {resultApi && <Text>Receiving Data ....</Text>}
      <Image source={{uri: dataUser.avatar}} style={styles.avatarPhoto} />
      <Text style={styles.textData}>{dataUser.email} </Text>
      <Text style={styles.textData}>
        {dataUser.first_name + dataUser.last_name}{' '}
      </Text>
      <View style={styles.line} />
      <View style={styles.button}>
        <Button title={'POST DATA'} onPress={postUser} />
      </View>
      {resultPost && (
        <View>
          <Text>Sending Data Job ....</Text>
          <Text>{dataJob.name}</Text>
          <Text>{dataJob.job}</Text>
        </View>
      )}
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

export default CallAPIVanilla;
