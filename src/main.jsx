import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Importaciones de react-router-dom
import { HashRouter } from "react-router-dom";
// importaciones de redux
import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
