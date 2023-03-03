import { IRootState } from "../store";

export const selectValue = (state: IRootState) => state.example.data;
