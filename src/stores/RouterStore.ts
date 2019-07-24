import { observable } from "mobx";
// no longer need this now that we made a RootStore:
// import { createContext } from "react";
import { RootStore } from "./RootStore";

type Routes = 'WorkoutHistory' | 'CurrentWorkout';

export class RouterStore {
  
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable screen: Routes = 'WorkoutHistory'
}

// no longer need this now that we made a RootStore:
// export const RouterStoreContext = createContext(new RouterStore());