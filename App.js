import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './src/reducers/counterReducer'; // Sesuaikan dengan path reducer Anda
import CounterComponent from './src/components/CounterComponent';

const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterComponent />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default App;
