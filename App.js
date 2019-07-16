import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/Index";
import AppNavigation from "./src/navigations/Index";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
