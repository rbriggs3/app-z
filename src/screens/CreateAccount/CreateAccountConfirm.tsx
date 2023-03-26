import * as React from 'react';
import { View, Text, Button } from 'react-native';

function CreateAccountConfirm({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#141414" }}>
        <Button
          title="Create Profile"
          onPress={() => navigation.navigate('CreateAccountProfile')}
        />
      </View>
    );
  }

export default CreateAccountConfirm;