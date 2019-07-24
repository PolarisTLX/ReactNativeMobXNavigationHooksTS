import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
// import { RouterStoreContext } from '../stores/RouterStore';
import { RootStoreContext } from '../stores/RootStore';

export const WorkoutHistory: React.FC = observer(() => {

  // change this since we made a RootStore:
  // const routerStore = React.useContext(RouterStoreContext)
  const rootStore = React.useContext(RootStoreContext);

  return (
    <View>
      <Text>Workout History Page</Text>
      <Button 
        title="Go to Current Workout Page" 
        onPress={() => {
          rootStore.workoutStore.currentExercises.push({
            exercise: "Squat",
            numSets: 5,
            reps: 5,
            sets: ["5","5","5","5","5"],
            weight: 260
          },
          {
            exercise: "Bench Press",
            numSets: 5,
            reps: 5,
            sets: ["5","5","5","5","5"],
            weight: 200
          },
          {
            exercise: "Dead Lift",
            numSets: 1,
            reps: 5,
            sets: ["5","x","x","x","x"],
            weight: 360
          }
          );
          // routerStore.screen = "CurrentWorkout"; 
          rootStore.routerStore.screen = "CurrentWorkout"; 
        }} 
      />
    </View>
   );
});