import App from "@/components/App";
import "@/styles/index.scss";
import { StrictMode } from "react";
import { render } from "react-dom";

import GlobalContextProvider from "./components/GlobalContext";

render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>,
  document.getElementById("root")
);
