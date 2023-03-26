import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const googleConfig = {
  clientId: 'YOUR_GOOGLE_CLIENT_ID',
  redirectUri: `${AuthSession.getRedirectUrl()}google`,
};

const facebookConfig = {
  appId: 'YOUR_FACEBOOK_APP_ID',
  redirectUri: `${AuthSession.getRedirectUrl()}facebook`,
};

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(googleConfig);
  const [facebookRequest, facebookResponse, facebookPromptAsync] = Facebook.useAuthRequest(facebookConfig);

  const handleCreateAccount = () => {
    // Implement create account logic here
  };

  const handleLogin = () => {
    //
  };

  const handleGoogleLogin = async () => {
    const authResult = await promptAsync();
    if (authResult.type === 'success') {
      // Implement Google login logic here
    }
  };

  const handleAppleLogin = async () => {
    try {
      const appleAuthRequestResponse = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      // Implement Apple login logic here
    } catch (error) {
      console.log(error);
    }
  };

  const handleFacebookLogin = async () => {
    const authResult = await facebookPromptAsync();
    if (authResult.type === 'success') {
      // Implement Facebook login logic here
    }
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginTop: 32,
    },
    LogoButton: {
      width: 60,
      height: 60,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 5,
      backgroundColor: '#FFFFFF'
    },
    CreateAccountButton: {
      width: 200,
      height: 60,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 5,
      backgroundColor: '#FFFFFF'
    },
    buttonText: {
      fontSize: 12,
      color: '#FFFFFF',
    },
    buttonImage: {
      alignSelf: 'center',
      height:30,
      width:30,
      justifyContent:'center'
    },
  });
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#141414"}}>
      <View style={{ marginTop: 240, alignItems: 'center', marginBottom: 10, width: '100%'}}>
        <Text style={{ fontSize: 14, marginTop: 16, color: "#9898A1"}}>
          Get started with
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={handleGoogleLogin} style={[styles.LogoButton]}>
          <Image source={require('../../../assets/google.png')} style={ styles.buttonImage } />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAppleLogin} style={[styles.LogoButton]}>
          <Image source={require('../../../assets/apple.png')} style={ styles.buttonImage } />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFacebookLogin} style={[styles.LogoButton]}>
          <Image source={require('../../../assets/facebook.png')} style={ styles.buttonImage } />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginBottom: 10, width: '100%'}}>
        <Text style={{ fontSize: 14, marginTop: 64, color: "#9898A1"}}>
          Or use email
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 0 }}>
        <TouchableOpacity onPress={handleCreateAccount} style={[styles.CreateAccountButton, { backgroundColor: '#9898A1' }]}>
          <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 0 }}>
      <Text style={{ fontSize: 14, color: '#9898A1',textAlign: 'center', marginTop:200 }}>
          Already have an account?{' '}
          <TouchableOpacity onPress={handleCreateAccount}>
            <Text style={{fontSize: 14, color: '#007AFF' }}>
              Log in
            </Text>
          </TouchableOpacity>
      </Text>
      </View>
    </View>
  );
}