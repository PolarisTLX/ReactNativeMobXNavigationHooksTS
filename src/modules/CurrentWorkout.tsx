import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
// import { RouterStoreContext } from '../stores/RouterStore';
import { WorkoutCard } from '../ui/WorkoutCard';
import { RootStoreContext } from '../stores/RootStore';
import { WorkoutTimer } from '../ui/WorkoutTimer';

interface Props {}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'orange',
    height: 500,
    padding: 10
  }
});

export const CurrentWorkout: React.FC<Props> = observer(() => {

  // change this since we made a RootStore:
  // const routerStore = React.useContext(RouterStoreContext)
  const rootStore = React.useContext(RootStoreContext);

  // stop the timer if this component gets unmounted:
  React.useEffect(() => {
    return () => {
      rootStore.workoutTimerStore.stopTimer();
    };
  }, []);  // [] I think so that it only runs once

  return (
    <View style={styles.container}>
      <Text>Current Workout Page</Text>
      {/* <WorkoutCard excercise="squat" repsAndWeight="5x5 260" sets={["x", "5", "5", "", "5"]} /> */}
      {rootStore.workoutStore.currentExercises.map(e => {
        return (
        <WorkoutCard 
          onSetPress={setIndex => {

            // start the timer:
            rootStore.workoutTimerStore.startTimer();
            
            const v = e.sets[setIndex];

            let newValue: string;

            if (v === '') {
              newValue = `${e.reps}`
            } else if (v === '0') {
              rootStore.workoutTimerStore.stopTimer();
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
        // style={{marginTop: 50 }}
        title="Go to Workout History Page"
        onPress={() => {
          // routerStore.screen = "WorkoutHistory";
          rootStore.routerStore.screen = "WorkoutHistory";
          
        }}
      />
      {rootStore.workoutTimerStore.isRunning ? (
        <WorkoutTimer 
          onXPress={() => rootStore.workoutTimerStore.stopTimer()} 
          currentTime={rootStore.workoutTimerStore.display} 
          percent={rootStore.workoutTimerStore.percent}
        />
      ) : null
      }
    </View>
  );
});