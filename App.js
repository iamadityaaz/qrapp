/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React from 'react';
import Router from './src/router';
import axios from 'axios';

axios.defaults.baseURL = 'https://agile-temple-69977.herokuapp.com/api/v1/';
const App = () => {
  return <Router />;
};

export default App;
