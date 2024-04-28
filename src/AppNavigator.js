import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Default from "./screens/Default/Default"
import Menu from "./screens/Menu"
import Profile from "./screens/Profile";
import Corpus from "./screens/Corpus"
import LoginPageLawyer from "./screens/Login/LawyerLogin";
import LoginPageUser from "./screens/Login/UserLogin";
import LawyerRegister from "./screens/Register/LawyerRegister";
import UserRegister from "./screens/Register/UserRegister";
import LawyerDefault from "./screens/Default/LawyerDefault";
import CategoryLawyer from "./screens/Category-Lawyer/CategoryLawyer";
import LawyerDetails from "./screens/LawyerDetails";
import Checkout from "./screens/Checkout";
import { UserContext } from "./Context/UserContext";
import ChatMenuLawyer from "./ChatMenuLawyer";
import ChatMenuUser from "./screens/ChatMenuUser";
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <UserContext>
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="LawyerRegister"
        component={LawyerRegister}
        options={{headerShown:false}}
        />
         <Stack.Screen
        name="UserRegister"
        component={UserRegister}
        options={{headerShown:false}}
        />
        <Stack.Screen
          name="LawyerLogin"
          component={LoginPageLawyer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserLogin"
          component={LoginPageUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Default"
          component={Default}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LawyerDefault"
          component={LawyerDefault}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatMenuUser"
          component={ChatMenuUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Corpus"
          component={Corpus}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="CategoryLawyer"
          component={CategoryLawyer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name="LawyerDetails"
        component={LawyerDetails}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="ChatMenuLawyer"
        component={ChatMenuLawyer}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
      </UserContext>
    </NavigationContainer>
  );
};

export default AppNavigator;
