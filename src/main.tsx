import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App.tsx";
import "./index.css";
import CompetenceContextProvider from "./Components/CompetenceContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CompetenceContextProvider>
      <App />
    </CompetenceContextProvider>
  </React.StrictMode>
);
