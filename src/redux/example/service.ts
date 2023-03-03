import axios from "axios";
import URL from "../services.constant";

// A mock function to mimic making an async request for data
export const fetchExampleService = (): Promise<{ data: number }> => {
  return axios.get(
    `${URL.baseApiUrl() + URL.authentication.getUserInformation}`,
  );
};
