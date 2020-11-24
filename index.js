/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'babel-register';
import App from './App';
import {name as appName} from './app.json';

global.fetch = require('node-fetch');

AppRegistry.registerComponent(appName, () => App);
