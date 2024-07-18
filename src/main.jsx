import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <MantineProvider>
      <Notifications position="top-right " />
      <Provider store={store}>
        <App />
      </Provider>
    </MantineProvider>
  </Router>
);
