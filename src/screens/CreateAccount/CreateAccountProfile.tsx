import * as React from 'react';
import { View, Text, Button } from 'react-native';

function CreateAccountProfile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#141414" }}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Splash')}
        />
    </View>
  );
}

export default CreateAccountProfile;