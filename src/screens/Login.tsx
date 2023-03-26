import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Login({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#141414" }}>
        <Button
          title="Create Account"
          onPress={() => navigation.navigate('CreateAccount')}
        />
      </View>
    );
  }

  export default Login;