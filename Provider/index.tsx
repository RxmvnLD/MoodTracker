import React, { createContext, useCallback, useState } from 'react';
import { MoodOptionType, moodOptionWithTimeStamp } from '../src/types';
// import { moodOptionWithTimeStamp } from '../src/types';

type AppContestType = {
  moodList: moodOptionWithTimeStamp[];
  handleSelectedMood: (selectMood: MoodOptionType) => void;
};

const AppContext = createContext<AppContestType>({
  moodList: [],
  handleSelectedMood: () => {},
});
interface AppProviderProps {
  children: React.JSX.Element;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [moodList, setMoodList] = useState<moodOptionWithTimeStamp[]>([]);

  const handleSelectedMood = useCallback(
    (selectedMood: MoodOptionType) => {
      setMoodList([...moodList, { mood: selectedMood, timeStamp: Date.now() }]);
    },
    [moodList],
  );

  return (
    <AppContext.Provider value={{ moodList, handleSelectedMood }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => React.useContext(AppContext);
