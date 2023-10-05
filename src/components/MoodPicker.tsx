import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { moodOptions, theme } from '../utils/constants';
import { MoodOptionType } from '../types';
const MoodPicker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

  const renderItem = ({ item }: { item: MoodOptionType }) => {
    return (
      <Pressable onPress={() => setSelectedMood(item)}>
        <View
          style={[
            styles.moodItem,
            selectedMood?.emoji === item.emoji && styles.selectedMoodItem,
          ]}>
          <Text style={styles.emoji}>{item.emoji}</Text>
        </View>
        <View>
          <Text style={styles.emojiDescription}>
            {item.description === selectedMood?.description && item.description}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>How are you right now?</Text>
      </View>
      <FlatList
        data={moodOptions}
        renderItem={renderItem}
        keyExtractor={item => item.description}
        horizontal={true}
      />
      <Pressable style={styles.chooseBtn}>
        <View>
          <Text style={styles.chooseBtnText}>Choose</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MoodPicker;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderBlockColor: theme.colorPurple,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    gap: 15,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: theme.colorPurple,
    borderRadius: 50,
  },
  emoji: {
    fontSize: 20,
    color: 'black',
  },
  emojiDescription: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  chooseBtn: {
    backgroundColor: theme.colorPurple,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  chooseBtnText: { color: 'white', fontWeight: 'bold' },
});
