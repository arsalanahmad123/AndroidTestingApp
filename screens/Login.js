import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

function Login() {
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        startAnimation();
    }, []);

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const animatedStyle = {
        transform: [{
            translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [-400, 0], // Slide down from -400 to 0
            })
        }],
    };

    return (
        <>
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
            <Animated.View style={[styles.circle, animatedStyle]}>
                <Text style={styles.circleText}>Login</Text>
            </Animated.View>
        </>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginTop: 100,
    },
    circle: {
        position: 'absolute',
        width: '100%',
        height: 400,
        backgroundColor: 'orangered',
        borderBottomEndRadius: 200,
        borderBottomStartRadius: 200,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    circleText: {
        color: 'white',
        fontSize: 50,
        fontWeight: '900',
        position: 'absolute',
        top: '50%',
        left: '35%',
    },
});
