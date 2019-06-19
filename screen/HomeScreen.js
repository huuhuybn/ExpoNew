import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export default function HomeScreen(props) {

    return (
        <View style={styles.container}>
            <Text>if you need more examples, pls contact me at dotplays.com@gmail.com</Text>
            <Button title='Geolocation' onPress={() => {
                props.navigation.navigate('Geo');

            }} />
            <Button title='Login' onPress={() => {
                props.navigation.navigate('Login');
            }} />

            <Button title='List' onPress={() => {
                props.navigation.navigate('List');
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
