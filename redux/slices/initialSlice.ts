import {PayloadAction, createSlice} from '@reduxjs/toolkit';

// Define a type for the slice state
interface InitialState {
  value: number;
}

// Define the initial state using that type
const initialState: InitialState = {
  value: 0,
};

export const initialSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = initialSlice.actions;

export default initialSlice.reducer;
