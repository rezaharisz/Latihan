import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function ItemUser({namaUser, emailUser, roleUser, onPress, deleteUser}) {
  return (
    <View style={styles.containerUser}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{uri: 'https://i.pravatar.cc/100'}}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.containerData}>
        <Text style={styles.nama}>{namaUser}</Text>
        <Text style={styles.email}>{emailUser}</Text>
        <Text style={styles.role}>{roleUser}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.deleteIcon} onPress={deleteUser}>
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function LocalAPI() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [users, setUsers] = useState([]);
  const [btn, setBtn] = useState('Submit Data');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  function submitUser() {
    const dataUser = {
      name,
      email,
      role,
    };

    if (name == '') {
      alert('Please Enter your name');
      return;
    } else if (email == '') {
      alert('Please Enter your email');
      return;
    } else if (role == '') {
      alert('Please Enter your role');
      return;
    }

    if (btn == 'Submit Data') {
      axios.post('http://10.0.2.2:3004/users', dataUser).then(response => {
        console.log('result submit data: ', response);
        setName('');
        setEmail('');
        setRole('');
        getData();
      });
    } else {
      axios
        .put(`http://10.0.2.2:3004/users/${selectedUser.id}`, dataUser)
        .then(response => {
          console.log('result update data: ', response);
          setName('');
          setEmail('');
          setRole('');
          getData();
          setBtn('Submit Data');
        });
    }
  }

  function getData() {
    axios.get('http://10.0.2.2:3004/users').then(result => {
      console.log('result get data: ', result);
      setUsers(result.data);
    });
  }

  function deleteData(item) {
    axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then(result => {
      console.log('result delete data: ', result);
      getData();
    });
  }

  function selectItem(item) {
    setName(item.name);
    setEmail(item.email);
    setRole(item.role);

    setSelectedUser(item);
    setBtn('Update Data');
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>CRUD Local API Dengan JSON Server</Text>
      <TextInput
        style={styles.borderForm}
        placeholder={'Masukkan nama anda'}
        value={name}
        onChangeText={value => {
          setName(value);
        }}
      />
      <TextInput
        style={styles.borderForm}
        placeholder={'Masukkan email anda'}
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
      />
      <TextInput
        style={styles.borderForm}
        placeholder={'Masukkan role anda'}
        value={role}
        onChangeText={value => {
          setRole(value);
        }}
      />
      <Button title={btn} onPress={submitUser} />
      <View style={styles.line} />
      {users.map(listUsers => {
        return (
          <ItemUser
            key={listUsers.id}
            namaUser={listUsers.name}
            emailUser={listUsers.email}
            roleUser={listUsers.role}
            onPress={() => selectItem(listUsers)}
            deleteUser={() => deleteData(listUsers)}
          />
        );
      })}
    </View>
  );
}

export default LocalAPI;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  borderForm: {
    borderWidth: 2,
    padding: 16,
    borderRadius: 16,
    fontSize: 14,
    marginBottom: 16,
  },
  line: {
    borderWidth: 2,
    marginVertical: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  containerUser: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  containerData: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginStart: 12,
    flex: 1,
  },
  nama: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  email: {
    fontSize: 14,
    fontStyle: 'italic',
    marginVertical: 3,
  },
  role: {
    fontSize: 14,
    marginVertical: 3,
  },
  deleteIcon: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
