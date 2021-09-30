import axios from 'axios';

export function setForm(input, value) {
  return {type: 'SET_FORM', inputType: input, inputValue: value};
}

export function setDataAPI() {
  return dispatch => {
    axios
      .get('http://10.0.2.2:3004/users')
      .then(result => {
        console.log('result get data: ', result.data);
        dispatch({type: 'GET_USERS', payload: result.data});
      })
      .catch(error => console.log('error get data: ', error));
  };
}
