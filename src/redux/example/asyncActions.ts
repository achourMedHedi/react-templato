import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { fetchExampleService } from "./service";

// type of the returned data from the api
type ServerError = { message: string };

// The value we return becomes the `fulfilled` action payload
export const testActionAsync = createAsyncThunk(
  "example/testAction",
  async (amount: number): Promise<number> => {
    try {
      const response = await fetchExampleService();
      return response.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          throw new Error(JSON.stringify(serverError.response.data));
        }
      }
      throw new Error("something went wrong");
    }
  }
);
