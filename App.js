import { View, Text } from "react-native";
import React from "react";
import AppNavigator from "./src/AppNavigator";
import Profile from "./src/screens/Profile";
import LoginPageUser from "./src/screens/Login/UserLogin";
import Corpus from "./src/screens/Corpus";

const App = () => {
  return (
    <Corpus/>
      //<AppNavigator/>
      // <LoginPageUser/>
  );
};

export default App;