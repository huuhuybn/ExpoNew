import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function HomeScreen(props) {

    const [username, setUsername] = useState('admin');
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button title='Geolocation' onPress={() => {
                props.navigation.navigate('Geo');

            }} />
            <Button title='Login' onPress={() => {
                props.navigation.navigate('Login');
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
