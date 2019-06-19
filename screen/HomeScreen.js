import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export default function HomeScreen(props) {

    state = {
        location: null,
        errorMessage: null,
    };

    const [location, setLocation] = useState();
    const [errorMessage, setErrorMessage] = useState('Waiting...');

    const [latitude, setLatitude] = useState();

    const [longitude, setLongitude] = useState();

    useEffect(() => {

        if (Platform.OS === 'android' && !Constants.isDevice) {
            setErrorMessage('Oops, this will not work on Sketch in an Android emulator. Try it on your device!');
        } else {
            _getLocationAsync();
        }
    });

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {

            setErrorMessage('Permission to access location was denied');

        }

        let info = await Location.getCurrentPositionAsync({});


        setLatitude(info.coords.latitude);

        setLongitude(info.coords.longitude);

    }

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button title='Geolocation' onPress={() => {
                props.navigation.navigate('Geo');

            }} />
            <Button title='Login' onPress={() => {
                props.navigation.navigate('Login');
            }} />

            <Text> Error : {errorMessage}</Text>
            <Text>{longitude} : {latitude}</Text>





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
