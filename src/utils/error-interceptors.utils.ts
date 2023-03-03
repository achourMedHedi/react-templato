import axios, { AxiosError } from "axios";

const registerErrorInterceptors = () => {
  axios.interceptors.request.use((config) => {
    const mct = localStorage.getItem("mct");
    const url = !config.url?.includes("?")
      ? config.url?.concat(`?mct=${mct}`)
      : config.url?.concat(`&mct=${mct}`);
    return { ...config, url };
  });
  axios.interceptors.response.use(
    (response) => {
      // Do something with the response data
      return response;
    },
    (error) => {
        console.log("error: ", error);
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<any>;
        if (serverError.code === "ERR_NETWORK") {
            return {status: 200, data: "salem from data"}
        }
        switch (serverError.response?.status) {
          default:
            break;
        }
      }

      // Handle response error
      return Promise.reject(error);
    }
  );
};

export default registerErrorInterceptors;
