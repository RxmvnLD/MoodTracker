import { StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import MoodPicker from '../components/MoodPicker';
import { MoodOptionType, moodOptionWithTimeStamp } from '../types';
import MoodList from '../components/MoodList';
export const Home: React.FC = () => {
  const [moodList, setMoodList] = useState<moodOptionWithTimeStamp[]>([]);

  const handleSelectedMood = useCallback(
    (selectedMood: MoodOptionType) => {
      setMoodList([...moodList, { mood: selectedMood, timeStamp: Date.now() }]);
    },
    [moodList],
  );

  return (
    <View style={styles.container}>
      <MoodPicker setMoodList={handleSelectedMood} />
      <MoodList list={moodList} />
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
