// Egg doneness levels
export enum EggDoneness {
  SOFT = 'soft',
  MEDIUM = 'medium',
  HARD = 'hard'
}

// Timer preferences that can be saved
export interface TimerPreferences {
  lastSelectedDoneness: EggDoneness;
  timerHistory: TimerHistoryEntry[];
}

// History of completed timers
export interface TimerHistoryEntry {
  id: string;
  doneness: EggDoneness;
  completedAt: string; // ISO timestamp
}
