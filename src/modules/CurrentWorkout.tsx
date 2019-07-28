import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
// import { RouterStoreContext } from '../stores/RouterStore';
import { WorkoutCard } from '../ui/WorkoutCard';
import { RootStoreContext } from '../stores/RootStore';

interface Props {}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'orange',
    // height: 300,
    padding: 10
  }
});

export const CurrentWorkout: React.FC<Props> = observer(() => {

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
          onSetPress={setIndex => {
            const v = e.sets[setIndex];

            let newValue: string;

            if (v === '') {
              newValue = `${e.reps}`
            } else if (v === '0') {
              newValue = '';
            } else {
              newValue = `${parseInt(v) - 1}`;
            }

            e.sets[setIndex] = newValue;
          }}
          key={e.exercise}
          excercise={e.exercise} 
          repsAndWeight={`${e.numSets}x${e.reps} ${e.weight}`} 
          sets={e.sets} 
        />
        );
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