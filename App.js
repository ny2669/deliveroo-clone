import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestuarantScreen from './screens/RestuarantScreen';


import 'react-native-url-polyfill/auto';
import BasketScreen from './screens/BasketScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name="Home" component={HomeScreen} />
   <Stack.Screen name="Restuarant" component={RestuarantScreen} />
   <Stack.Screen name="Basket" component={BasketScreen} options={{presentation: 'modal', headerShown: false}}  />
   </Stack.Navigator>
    </NavigationContainer>
  );
}

