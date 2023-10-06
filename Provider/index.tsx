import React, { createContext, useCallback, useEffect, useState } from 'react';
import { MoodOptionType, MoodOptionWithTimeStamp } from '../src/types';
import { getData, setData } from '../src/utils/fetchLocalData';

type AppContextType = {
  moodList: MoodOptionWithTimeStamp[];
  handleSelectedMood: (selectMood: MoodOptionType) => void;
};

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectedMood: () => {},
});
interface AppProviderProps {
  children: React.JSX.Element;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimeStamp[]>([]);

  const handleSelectedMood = useCallback(
    (selectedMood: MoodOptionType) => {
      const newMoodsList = [
        ...moodList,
        { mood: selectedMood, timeStamp: Date.now() },
      ];
      setMoodList(newMoodsList);
      setData({ moods: newMoodsList });
    },
    [moodList],
  );
  const fetchDataOnStart = async () => {
    const data = await getData();
    if (data) {
      setMoodList(data.moods);
    }
  };
  useEffect(() => {
    fetchDataOnStart();
  }, []);

  return (
    <AppContext.Provider value={{ moodList, handleSelectedMood }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => React.useContext(AppContext);
