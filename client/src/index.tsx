import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { theme } from "./theme";
import { GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: {
              // backgroundColor: '#F5F6FA'
              //backgroundColor: 'rgba(156, 38, 176,0.1)'
              // background: 'linear-gradient(to bottom right, rgba(156, 38, 176,0.3), rgba(156, 38, 176,0.1))',
              backgroundColor: "rgb(252,220,240)",
              background:
                "linear-gradient(140deg, rgba(252,220,240,1) 0%, rgba(206,235,254,1) 51%, rgba(204,235,254,1) 63%, rgba(236,212,250,1) 100%)",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
            },
          }}
        />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
