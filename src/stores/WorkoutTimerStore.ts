import { observable, action, computed } from "mobx";
import dayjs from 'dayjs';

const padZero = (n: number) => {
  if (n >= 10) {
    return n
  }

  return `0${n}`;
}

export class WorkoutTimerStore {
  @observable startTime = dayjs();
  @observable isRunning = false;
  @observable seconds = 0;

  // this recursively calls itse;f every 1000 miliseconds
  @action measure() {
    if (!this.isRunning) return;

    this.seconds = dayjs().diff(this.startTime, 'second');

    setTimeout(() => this.measure(), 1000);
  }

  @action startTimer() {
    this.isRunning = true;
    this.startTime = dayjs();
    this.measure();
  }

  @action stopTimer() {
    this.isRunning = false;
    this.seconds = 0;
  }

  // @computed display() {
  // the 'get' below means that in the CurrentWorkout we don't need to add '()' on the end of the call to the 'display' funtion like so:
  // currentTime={.....e.display()}  vs  currentTime={.....e.display} 
  @computed get display() {
    const minutes = Math.floor(this.seconds / 60);
    const seconds = this.seconds % 60
    return `${padZero(minutes)}:${padZero(seconds)}`;
  }

  @computed get percent() {
    return `${Math.min(100, (this.seconds / 60)*100)}%`
  }
}