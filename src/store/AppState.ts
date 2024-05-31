export interface AppState {
  progressState: ProgressState;
}

export interface ProgressState {
  progressValue: number;
  increase: (brValue: number) => void;
}
