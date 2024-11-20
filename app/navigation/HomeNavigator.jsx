import { createNativeStackNavigator } from "@react-navigation/native-stack";
import routes from "./routes";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        obscureBackground: true,
        animation: "default",
        animationTypeForReplace: "pop",
        animationDuration: 300,
      }}
    >
      <Stack.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{ tabBarVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
