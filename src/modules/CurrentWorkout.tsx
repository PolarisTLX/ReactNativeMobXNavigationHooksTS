import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { RouterStoreContext } from '../stores/RouterStore';
import { WorkoutCard } from '../ui/WorkoutCard';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    margin: 10
  }
});

export const CurrentWorkout: React.FC = observer(() => {

  const routerStore = React.useContext(RouterStoreContext)

  return (
    <View style={styles.container}>
      <Text>Current Workout Page</Text>
      <WorkoutCard excercise="squat" repsAndWeight="5x5 260" />
      <Button
        title="Go to Workout History Page"
        onPress={() => {
          routerStore.screen = "WorkoutHistory";
        }}
      />
    </View>
  );
});