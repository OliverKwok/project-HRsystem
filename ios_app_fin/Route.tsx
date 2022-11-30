/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store, useAppDispatch} from './store';
import {login, logout} from './redux/auth/actions';
import App from './App';

const Route = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Route;
