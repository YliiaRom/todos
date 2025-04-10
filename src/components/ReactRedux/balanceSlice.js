import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'balance',
  initialState: {
    value: 100,
  },
  reducers: {
    deposit: (state, action) => {
      state.value = state.value + action.payload;
    },
    withdraw: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});
export default slice.reducer;

export const { deposit, withdraw } = slice.actions;
// import { createSlice } from '@reduxjs/toolkit';

// const balanceSlice = createSlice({
//   name: 'balance',
//   initialState: {
//     value: 100,
//   },
//   reducers: {
//     deposit: (state, action) => {
//       state.value += action.payload;
//     },
//     withdraw: (state, action) => {
//       state.value -= action.payload;
//     },
//   },
// });
// export const { deposit, withdraw } = balanceSlice.actions;
// export default balanceSlice.reducer;
