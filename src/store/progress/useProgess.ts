import { create, createStore, useStore } from "zustand";
import { ProgressState } from "@store/AppState";

const useProgress = createStore<ProgressState>()((set) => ({
  progressValue: 0,
  increase: (by) => set(() => ({ progressValue: by })),
}));

export function useProgressStore<T>(selector?: (state: ProgressState) => T) {
  return useStore(useProgress, selector!);
}
