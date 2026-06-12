import { MMKV as MMKVInterface } from 'react-native-mmkv';

// 1. Force-import the module constructor as a generic type value
const MMKVConstructor = require('react-native-mmkv').MMKV;

// 2. Instantiate and cast the result directly to the type definition
export const storage = new MMKVConstructor() as MMKVInterface;
