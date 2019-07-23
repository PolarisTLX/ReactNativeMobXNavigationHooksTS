/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, useState, useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import { observer } from "mobx-react-lite";
import { CounterStoreContext } from './src/stores/CounterStore';

export const App = observer(() => {

  // old without using MobX:
  // const [count, setCount] = useState(0);

  const counterStore = useContext(CounterStoreContext);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={{ alignSelf: 'center', marginTop: 100, fontSize: 32 }}>{counterStore.count}</Text>
        <Button title="increment" onPress={() => counterStore.count++} />
      </SafeAreaView>
    </Fragment>
  );
});

export default App;
