import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
// no longer need this now that we made a RootStore:
// import { RouterStoreContext } from "./stores/RouterStore";
import { WorkoutHistory } from "./modules/WorkoutHistory";
import { CurrentWorkout } from "./modules/CurrentWorkout";
import { RootStoreContext } from "./stores/RootStore";

export const Router = observer(() => {

  // change this since we made a RootStore:
  // const routerStore = useContext(RouterStoreContext);
  const rootStore = useContext(RootStoreContext);

  // return routerStore.screen === 'WorkoutHistory' ? <WorkoutHistory /> : <CurrentWorkout />
  return rootStore.routerStore.screen === 'WorkoutHistory' ? <WorkoutHistory /> : <CurrentWorkout />
});