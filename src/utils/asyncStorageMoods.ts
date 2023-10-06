/* eslint-disable curly */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MoodOptionWithTimeStamp } from '../types';

type AppData = {
  moods: MoodOptionWithTimeStamp[];
};
const storageKey = 'mood-list-data';

export const setData = async (val: AppData) => {
  try {
    const jsonData = JSON.stringify(val);
    await AsyncStorage.setItem(storageKey, jsonData);
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);
    if (data) return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
  return null;
};
