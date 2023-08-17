import React from 'react'
import { View, Text, StyleSheet } from "react-native"

function Welcome() {
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        }
    }
})