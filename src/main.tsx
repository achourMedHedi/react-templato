import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LanguageProvider from "./LanguageProvider";
import { TDefaultLocale } from "./types";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import registerErrorInterceptors from "./utils/error-interceptors.utils";
import messages from "./translations"
import { RouterProvider } from "react-router-dom";
import routes from "./pages/constants";

if (import.meta.env.DEV && import.meta.env.VITE_OFFLINE_MODE === "true") {
  import("./mocks/browser");
}

registerErrorInterceptors();

const DEFAULT_LOCALE: TDefaultLocale =
  (window.navigator.language as TDefaultLocale) || "en";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider messages={messages} defaultLocale={DEFAULT_LOCALE}>
        {/* <App /> */}
        <RouterProvider router={routes} />
      </LanguageProvider>
    </Provider>
  </React.StrictMode>
);
