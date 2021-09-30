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
import {useDispatch, useSelector} from 'react-redux';
import {setDataAPI, setForm} from '../../redux';

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
  const {form} = useSelector(state => state.crudReducer);
  const {title} = useSelector(state => state.crudReducer);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [btn, setBtn] = useState('Submit Data');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    // getData();
    dispatch(setDataAPI());
  }, []);

  function submitUser() {
    if (form.name == '') {
      alert('Please Enter your name');
      return;
    } else if (form.email == '') {
      alert('Please Enter your email');
      return;
    } else if (form.role == '') {
      alert('Please Enter your role');
      return;
    }

    if (btn == 'Submit Data') {
      console.log('reducer result: ', form);

      axios
        .post('http://10.0.2.2:3004/users', form)
        .then(response => {
          console.log('result submit data: ', response);
          dispatch({type: 'CLEAR_FORM'});
          // getData();
        })
        .catch(error => console.log(error));
    } else {
      axios
        .put(`http://10.0.2.2:3004/users/${selectedUser.id}`, form)
        .then(response => {
          console.log('result update data: ', response);
          dispatch({type: 'CLEAR_FORM'});
          // getData();
          setBtn('Submit Data');
        });
    }
  }

  // function getData() {
  //   axios
  //     .get('http://10.0.2.2:3004/users')
  //     .then(result => {
  //       console.log('result get: ', result.data);
  //       setUsers(result.data);
  //     })
  //     .catch(error => console.log('error get data: ', error));
  // }

  function deleteData(item) {
    axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then(result => {
      console.log('result delete data: ', result);
      // getData();
    });
  }

  function selectItem(item) {
    onInputChange(item.id, 'id');
    onInputChange(item.name, 'name');
    onInputChange(item.email, 'email');
    onInputChange(item.role, 'role');

    console.log('result select: ', item);

    setSelectedUser(item);
    setBtn('Update Data');
  }

  function onInputChange(value, input) {
    dispatch(setForm(input, value));
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.borderForm}
        placeholder={'Masukkan nama anda'}
        value={form.name}
        onChangeText={value => {
          onInputChange(value, 'name');
        }}
      />
      <TextInput
        style={styles.borderForm}
        placeholder={'Masukkan email anda'}
        value={form.email}
        onChangeText={value => {
          onInputChange(value, 'email');
        }}
      />
      <TextInput
        style={styles.borderForm}
        placeholder={'Masukkan role anda'}
        value={form.role}
        onChangeText={value => {
          onInputChange(value, 'role');
        }}
      />
      <Button title={btn} onPress={submitUser} />
      <View style={styles.line} />
      {dispatch(setDataAPI()).map(listUsers => {
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
