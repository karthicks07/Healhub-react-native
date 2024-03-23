import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './components/landing';
import Home from './components/Home';
import Bellamy from './components/Bellamy';
import Mensah from './components/Mensah';
import Klimisch from './components/Klimisch';
import Martinez from './components/Martinez';
import Marc from './components/Marc';
import Boyle from './components/Boyle';
import Booking from './components/Booking';
import HelpSupport from './components/HelpSupport';
import Loading from './components/Loading';
import Booked from './components/Booked';
import Smith from './components/Smith';
import Lee from './components/Lee';
import Johnson from './components/Johnson';
import Gracia from './components/Gracia';
import Wang from './components/Wang';
import Patel from './components/Patel';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Bellamy" component={Bellamy} options={{ headerShown: false }} />
        <Stack.Screen name="Mensah" component={Mensah} options={{ headerShown: false }} />
        <Stack.Screen name="Klimisch" component={Klimisch} options={{ headerShown: false }} />
        <Stack.Screen name="Martinez" component={Martinez} options={{ headerShown: false }} />
        <Stack.Screen name="Marc" component={Marc} options={{ headerShown: false }} />
        <Stack.Screen name="Boyle" component={Boyle} options={{ headerShown: false }} />
        <Stack.Screen name="Booking" component={Booking} options={{ headerShown: false }} />
        <Stack.Screen name="HelpSupport" component={HelpSupport} options={{ headerShown: false }} />
        <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
        <Stack.Screen name="Booked" component={Booked} options={{ headerShown: false }} />
        <Stack.Screen name="Smith" component={Smith} options={{ headerShown: false }} />
        <Stack.Screen name="Lee" component={Lee} options={{ headerShown: false }} />
        <Stack.Screen name="Johnson" component={Johnson} options={{ headerShown: false }} />
        <Stack.Screen name="Gracia" component={Gracia} options={{ headerShown: false }} />
        <Stack.Screen name="Wang" component={Wang} options={{ headerShown: false }} />
        <Stack.Screen name="Patel" component={Patel} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
