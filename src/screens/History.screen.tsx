import { View, StyleSheet } from 'react-native';
import React from 'react';
import MoodList from '../components/MoodList';

const History: React.FC = () => {
  return (
    <View style={styles.container}>
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

export default History;
