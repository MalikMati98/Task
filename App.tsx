import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RootNavigator} from './src/navigation/RootNavigator';
import {persistor, store} from './src/redux';
const App = () => {
  console.warn = () => { };
  console.error = () => { };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <RootNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
