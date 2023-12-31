import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabsNavigator from './screens/BottomTabs.navigator';
import AppProvider from '../Provider';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
