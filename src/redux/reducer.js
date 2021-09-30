import {combineReducers} from 'redux';

const crudState = {
  form: {
    name: '',
    email: '',
    role: '',
  },
  title: 'CRUD Local API Dengan JSON Server',
};

function crudReducer(state = crudState, action) {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'FORM TELAH DIKETIK',
    };
  } else if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  } else if (action.type === 'CLEAR_FORM') {
    return {
      ...state,
      form: {
        name: '',
        email: '',
        role: '',
      },
    };
  }

  return state;
}

const usersState = {
  dataUsers: [],
};

function usersReducer(state = usersState, action) {
  if (action.type === 'GET_USERS') {
    return {
      ...state,
      dataUsers: action.payload,
    };
  }

  return state;
}

const reducer = combineReducers({
  crudReducer,
  usersReducer,
});

export default reducer;
