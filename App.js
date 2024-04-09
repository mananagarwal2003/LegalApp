import { View, Text } from "react-native";
import React from "react";
import AppNavigator from "./src/AppNavigator";
import Profile from "./src/screens/Profile";
import LoginPageUser from "./src/screens/Login/UserLogin";

const App = () => {
  return (
      <AppNavigator/>
      // <LoginPageUser/>
  );
};

export default App;