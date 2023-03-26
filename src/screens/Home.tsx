import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#141414" }}>
        <Text style={{color:'white'}}>Home</Text>
        <Button
          title="Logout"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
  }

  export default Home;