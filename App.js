import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { firebase } from './config';


import OnboardingScreen from './Screens/OnboardingScreen';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
import HomeScreen from './Screens/HomeScreen';
import { Stack } from "@react-navigation/stack"

const AppStack = createStackNavigator();
function App() {


  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      <AppStack.Navigator options={{ headerShown: false }}>
        <AppStack.Screen name="Food Ordering" component={OnboardingScreen} />

        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="Signup" component={SignupScreen} />

      </AppStack.Navigator>
    )
  }




  return (
    <AppStack.Navigator options={{ headerShown: false }}>
      {/* <AppStack.Screen name="Food Ordering" component={OnboardingScreen} /> */}
      {/* <AppStack.Screen name="Login" component={LoginScreen} /> */}
      {/* <AppStack.Screen name="Signup" component={SignupScreen} /> */}
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />

    </AppStack.Navigator>

  );
};

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
};