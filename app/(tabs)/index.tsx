import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import EneagramQuizApp from '../../components/EneagramQuizApp';

export default function QuizScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <EneagramQuizApp />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
});