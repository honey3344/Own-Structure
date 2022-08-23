import React, { createContext, useState,useEffect } from 'react';
import { Button, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, defaultScreenOptions, GestureHandlerRefContext } from '@react-navigation/stack';

import Authstack from './Src/View/Stack/Authstack'
import Splash from './Src/View/Splash/Splash';
import { navigationRef } from './Src/Components/Config';
import Provider from './Shared/Provider';
import SplashScreen from 'react-native-splash-screen';
export const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen options={{ ...defaultScreenOptions, headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS }} name="Authstack" component={Authstack} />
      <Stack.Screen options={{ ...defaultScreenOptions, headerShown: true, ...TransitionPresets.SlideFromRightIOS }} name="Check" component={Splash} />
    </Stack.Navigator>
  );
}
export default function App() {
  const [loader, setLoader] = useState(false)
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <Provider>
      <StatusBar animated={true}  translucent={true} backgroundColor={'transparent'} />
      <NavigationContainer ref={navigationRef}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}

