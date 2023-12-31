import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MoodOptionWithTimeStamp } from '../types';
import format from 'date-fns/format';
import { theme } from '../utils/constants';
import { useAppContext } from '../../Provider';

const Separator: React.FC = () => {
  return <View style={styles.separator} />;
};
const MoodList: React.FC = () => {
  const { moodList } = useAppContext();
  const renderItem = ({
    item: { mood, timeStamp },
  }: {
    item: MoodOptionWithTimeStamp;
  }) => {
    const date = format(new Date(timeStamp), "dd MMM, yyyy 'at' h:mmaaa");
    return (
      <View style={styles.rowContainer}>
        <View style={styles.moodContainer}>
          <Text style={styles.moodIcon}>{mood.emoji}</Text>
          <Text style={styles.moodDescription}>{mood.description}</Text>
        </View>

        <Text style={styles.moodTimestamp}>{date}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={moodList}
        renderItem={renderItem}
        keyExtractor={item => item.timeStamp.toString()}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10, flex: 1 },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  moodContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  moodIcon: {
    fontSize: 35,
    color: 'black',
  },
  moodDescription: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  moodTimestamp: {
    color: theme.colorLavender,
    fontWeight: 'bold',
  },
  separator: {
    height: 10,
  },
});

export default MoodList;
