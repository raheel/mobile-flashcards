import React from "react";
import { StyleSheet, Text, View } from "react-native";
import App from "./App/Containers/App";
import createDailyNotification from "./App/Utils/NotificationUtils";

export default class Root extends React.Component {
  componentDidMount() {
    createDailyNotification();
  }

  render() {
    return <App />;
  }
}
