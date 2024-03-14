import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/Landing';
import Home from './components/Home';
import Bellamy from './components/Bellamy';
import Mensah from './components/Mensah';
import Klimisch from './components/Klimisch';
import Martinez from './components/Martinez';
import Marc from './components/Marc';
import Boyle from './components/Boyle';
import Booking from './components/Booking';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="landing">
        <Stack.Screen name="landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Bellamy" component={Bellamy} options={{ headerShown: false }} />
        <Stack.Screen name="Mensah" component={Mensah} options={{ headerShown: false }} />
        <Stack.Screen name="Klimisch" component={Klimisch} options={{ headerShown: false }} />
        <Stack.Screen name="Martinez" component={Martinez} options={{ headerShown: false }} />
        <Stack.Screen name="Marc" component={Marc} options={{ headerShown: false }} />
        <Stack.Screen name="Boyle" component={Boyle} options={{ headerShown: false }} />
        <Stack.Screen name="Booking" component={Booking} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
