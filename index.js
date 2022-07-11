/**
 * require store from redux
 * set initial state
 * set action and action type
 * create reducer
 * create store
 * subscribe store
 * dispatch store
 */

const { createStore } = require("redux");

//CONSTAINTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialCountState = {
  Count: 0,
};

const incrementCount = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};
const resetCount = () => {
  return {
    type: RESET,
  };
};

const counterReducer = (state = initialCountState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        Count: state.Count + 1,
      };
    case DECREMENT:
      return {
        Count: state.Count - 1,
      };
    case RESET:
      return {
        Count: 0,
      };

    default:
      state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount());
store.dispatch(resetCount());
