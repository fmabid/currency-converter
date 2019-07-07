import axios from "axios";

const initialState = {
  amount: 0,
  resultHistory: [],
  source: '',
  destination: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SLCTD':
      const src = Object.assign(action.payload);
      return {
        ...state,
        resultHistory: src
      }
  }

  return state;
};

export default reducer;