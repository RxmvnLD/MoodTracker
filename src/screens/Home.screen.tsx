import { StyleSheet, View } from 'react-native';
import React from 'react';
import MoodPicker from '../components/MoodPicker';
import MoodList from '../components/MoodList';
export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <MoodPicker />
      <MoodList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});
