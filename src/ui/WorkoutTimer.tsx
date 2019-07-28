import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { RootStore } from '../stores/RootStore';

interface Props {
  onXPress: () => void;
  currentTime: string;
}

export const WorkoutTimer: React.FC<Props> = ({onXPress, currentTime}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.timetext}>{currentTime}</Text>
      <TouchableOpacity onPress={onXPress}>
        <Text style={styles.x}>x</Text>
      </TouchableOpacity>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    // make bottom of the screen:
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 50,
    width: '100%',
    backgroundColor: '#456550' ,
    justifyContent: "space-between" ,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  x: {
    color: '#B2A1A1',
    fontSize: 30
  },
  timetext: {
    color: `#fff`,
    fontSize: 18
  }
});