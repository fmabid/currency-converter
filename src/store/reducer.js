import axios from "axios";

const initialState = {
  amount: 0,
  resultHistory: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SLCT':
      return {
        ...state,
        resultHistory: state.resultHistory
      }
  }

  return state;
};

export default reducer;