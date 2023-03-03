import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBaseState, IRootState } from "../store";
import { testActionAsync } from "./asyncActions";

interface IStateData {
  val?: string
}

interface IStateLocal {
  loading: boolean;
}

export interface IExampleState extends IBaseState<IStateData, IStateLocal> {}

const initialState: { data: IStateData; local: IStateLocal } = {
  data: {}, // from api
  local: { loading: false }, // local to our app
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    testAction: (state, action: { payload: unknown; type: string }) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(testActionAsync.pending, (state) => {
        state.local.loading = true;
      })
      .addCase(testActionAsync.rejected, (state, action) => {
        console.log("reject: ", action);
        state.local.loading = false;
      })
      .addCase(testActionAsync.fulfilled, (state, action) => {
        console.log("action: ", action);
        state.local.loading = false;
      });
  },
});

export const actions = exampleSlice.actions;

export default exampleSlice.reducer;
