import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './components/Tabs';
import Preloader from './components/Preloader'; // Import the Preloader component

export default function App({ navigation }) {

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Tabs />
      </SafeAreaView>
      <StatusBar style="auto" backgroundColor="white" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
