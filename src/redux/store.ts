import { configureStore } from "@reduxjs/toolkit";
import exampleReducer, { IExampleState } from "./example/slice";
import { useDispatch as useReduxDispatch } from "react-redux";

export interface IBaseState<IData, ILocal> {
  data: IData;
  local: ILocal;
}


export const useDispatch = () => {
  const dispatch = useReduxDispatch<any>();
  return dispatch;
};

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
