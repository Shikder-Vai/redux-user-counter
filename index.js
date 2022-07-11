/**
 * require ccreateStore from redux
 * set initial state
 * set action
 * set payload value on action
 * create reducer
 * create store
 * subscribe store
 * dispatch store
 */
const { createStore } = require("redux");

//constaint
const ADD_USER = "ADD_USER";

const initialUserState = {
  users: ["Shikder"],
  count: 1,
};
const addNewUsers = (users) => {
  return {
    type: ADD_USER,
    payload: users,
  };
};
//Reducer creation
const usersReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

//store section
const store = createStore(usersReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addNewUsers("fatima"));
store.dispatch(addNewUsers("himu"));
