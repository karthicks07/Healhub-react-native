import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './components/Pages';
import { Landing } from './components/Pages';
import { Home } from './components/Pages';
import { DoctorProfile } from './components/Pages';
import { Booking } from './components/Pages';
import { Loading } from './components/Pages';
import { Booked } from './components/Pages';
import { StatusBar } from 'expo-status-bar'; 
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Booking" component={Booking} options={{ headerShown: false }} />
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Booked" component={Booked} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}
