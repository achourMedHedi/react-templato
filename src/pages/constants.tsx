import { Navigate, createBrowserRouter, redirect, useRouteError } from "react-router-dom";
import HomePage from "./home";
import { fetchExampleService } from "../redux/example/service";
import { store } from "../redux/store";
import { testActionAsync } from "../redux/example/asyncActions";

function ErrorBoundary() {
  let error = useRouteError();
  // Uncaught ReferenceError: path is not defined
  return <div  >error :id {error.status}</div>;
}

const routes = createBrowserRouter([
  {
    path: "/",
    action: () => {
      console.log("action: ",);

    },
    element: <HomePage />,
    errorElement: <ErrorBoundary />,
    // loader: async ({ params }) => {
    //   console.log("params:222222 ", params);
    //   try {
    //     const res = await fetchExampleService()
    //     return res;
    //   } catch (error) {
    //     throw new Response("not found", { status: error.response.status });
    //   }
    // },
  },

  {
    path: ":id",
    errorElement: <ErrorBoundary />,
    element: <HomePage />,
    // loader: async ({ params }) => {
    //   console.log("params: ", params);
    //   const res = await new Promise((res, rej) => {
    //     setTimeout(() => {
    //       rej({ helloword: "true22" });
    //     }, 1000);
    //   });
    //   return res;
    // },
    children: [
      {
        path: "a",
        element: <HomePage />,
        loader: async ({ params }) => {
          const res = await new Promise((res, rej) => {
            setTimeout(() => {
              rej({ helloword: "true22" });
            }, 1000);
          });
          return res;
        },
      },
    ],
  },
  {
    path:"*",
    element:<Navigate to="/" replace />
  }
]);

export default routes;
