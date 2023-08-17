import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Preloader = () => {
    return (
        <View style={styles.preloaderContainer}>
            <ActivityIndicator size="large" color="blue" />
        </View>
    );
};

const styles = StyleSheet.create({
    preloaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 9999,
    },
});

export default Preloader;
