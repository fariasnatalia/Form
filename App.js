import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  
} from 'react-native';
import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Home from './src/screens/Home'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
       
      >
        <Stack.Screen options={{ headerShown: false }}  name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3333',
  
  },
  formContainer: {
    backgroundColor: '#f5EDDC',
    padding: 20,
    borderRadius: 20,
    width: '100%',  // Defina a largura 
  },
  title:  {
    color: '#16213E',
    fontSize: 26,
    fontWeight: '400',
    marginBottom: 15,
  },
  inputWrapper:{
    marginBottom: 15,

  },
  inputStyle: {
    borderColor: '#16213E',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  errorTxt: {
    fonSize: 12,
    color: '#ff0D10',

  },
  submitBtn:{ //botão em SÍ
    //backgroundColor: 'green',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  submitBtnTxt: { //texto do botão
    color: '#000',
    textAlign: 'center',
    fonSize: 18,
    fontWeight: '700',
  },



});
export default App;

