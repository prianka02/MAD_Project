import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './Screens/OnboardingScreen';
import LoginScreen from './Screens/LoginScreen';

const AppStack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator options={{ headerShown: false }}>
        <AppStack.Screen name="Food Ordering" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;