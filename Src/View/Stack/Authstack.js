import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { navigate } from '../../Components/Config'
import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();
import { Stack } from '../../../App';


const Register = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  )
}

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}





export default function Authstack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})