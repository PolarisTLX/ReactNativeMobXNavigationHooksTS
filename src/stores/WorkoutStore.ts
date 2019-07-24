// import { createContext } from "react";
import { RootStore } from "./RootStore";
import { observable } from "mobx";

type WorkoutDay = 'a' | 'b';  // a-day / b-day for rotating exercises on 2 different days

interface WorkoutHistory {
  [key: string]: Array<{
    exercise: string,
    value: number
  }>
}

/*  example data structure:
{
  '02-18-2019': [
    {
      exercise: 'squat',
      value: 90
    },
    {
      exercise: 'benchpress',
      value: 100
    }
  ]
}
*/ 

export interface CurrentExercise {
  weight: number;
  reps: number;
  numSets: number;
  exercise: string;
  sets: string[];
}

export class WorkoutStore {

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  
  @observable currentSquat: number; 
  @observable currentBenchPress: number; 
  @observable currentOverheadPress: number; 
  @observable currentDeadlift: number; 
  @observable currentBarbellRow: number; 

  @observable lastWorkoutType: WorkoutDay;

  @observable currentExercises: CurrentExercise[] = []

  @observable history: WorkoutHistory;
}

// no longer need this now that we made a RootStore:
// export const WorkoutStoreContext = createContext(new WorkoutStore());