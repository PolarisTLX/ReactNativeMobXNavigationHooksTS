import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import { RouterStoreContext } from '../stores/RouterStore';

export const CurrentWorkout: React.FC = observer(() => {

  const routerStore = React.useContext(RouterStoreContext)
  
  return (
    <View>
      <Text>Current Workout Page</Text>
      <Button
        title="Create Workout"
        onPress={() => {
          routerStore.screen = "WorkoutHistory";
        }}
      />
    </View>
  );
});