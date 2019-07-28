import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
// import { RouterStoreContext } from '../stores/RouterStore';
import { WorkoutCard } from '../ui/WorkoutCard';
import { RootStoreContext } from '../stores/RootStore';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    margin: 10
  }
});

export const CurrentWorkout: React.FC = observer(() => {

  // change this since we made a RootStore:
  // const routerStore = React.useContext(RouterStoreContext)
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View style={styles.container}>
      <Text>Current Workout Page</Text>
      {/* <WorkoutCard excercise="squat" repsAndWeight="5x5 260" sets={["x", "5", "5", "", "5"]} /> */}
      {rootStore.workoutStore.currentExercises.map(e => {
        return (
          <WorkoutCard 
            key={e.exercise}
            sets={e.sets}
            exercise={e.exercise}
            repsAndWeight={`${e.numSets}x${e.reps} ${e.wieght}`}
          />
        )
      })}
      <Button
        title="Go to Workout History Page"
        onPress={() => {
          // routerStore.screen = "WorkoutHistory";
          rootStore.routerStore.screen = "WorkoutHistory";
          
        }}
      />
    </View>
  );
});