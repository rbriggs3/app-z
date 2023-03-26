import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount/CreateAccount';
import CreateAccountConfirm from './src/screens/CreateAccount/CreateAccountConfirm';
import CreateAccountProfile from './src/screens/CreateAccount/CreateAccountProfile';
import Tabs from './src/components/Tabs';

const Stack = createNativeStackNavigator()

function App() {
  return (
    <View style={{ flex:1, backgroundColor: "#141414" }}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Tabs} />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

export default App;
