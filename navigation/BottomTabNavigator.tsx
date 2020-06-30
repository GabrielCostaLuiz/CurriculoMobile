import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import ObjetivoScreen from "../screens/ObjetivoScreen";
import FormacaoScreen from "../screens/FormacaoScreen";

const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="id-card" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Objetivo"
        component={Objetivo}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="binoculars" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Formação"
        component={Formacao}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="trophy" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={20} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();
function Home() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Currículo" }}
      />
    </HomeStack.Navigator>
  );
}

const ObjetivoStack = createStackNavigator();
function Objetivo() {
  return (
    <ObjetivoStack.Navigator>
      <ObjetivoStack.Screen
        name="ObjetivoScreen"
        component={ObjetivoScreen}
        options={{ headerTitle: "Objetivo" }}
      />
    </ObjetivoStack.Navigator>
  );
}

const FormacaoStack = createStackNavigator();
function Formacao() {
  return (
    <FormacaoStack.Navigator>
      <FormacaoStack.Screen
        name="FormacaoScreen"
        component={FormacaoScreen}
        options={{ headerTitle: "Formação" }}
      />
    </FormacaoStack.Navigator>
  );
}