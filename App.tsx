/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={{ alignSelf: 'center', marginTop: 100, fontSize: 32 }}>{count}</Text>
        <Button title="increment" onPress={() => setCount(count + 1)} />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
