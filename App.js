import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  FoodDetail,
  CartTab,
} from "./screens";
import CustomDrawer from "./navigation/CustomDrawer";
import { TabProvider } from "./context/TabContext";

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <TabProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"OnBoarding"}
        >
          <Stack.Screen name="OnBoarding" component={OnBoarding} />

          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
          <Stack.Screen name="FoodDetail" component={FoodDetail} />
          <Stack.Screen name="CartTab" component={CartTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </TabProvider>
  );
};

export default App;
