import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function LoginScreen() {

  const [username, setUsername] = useState('admin');
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 150 }}
        onChangeText={(text) => setUsername(text)}
        placeholder='Enter username'
      />

      <Text>Hello {username}</Text>

      <Button title='Login' onPress={() => {
        alert(username);
      }} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
