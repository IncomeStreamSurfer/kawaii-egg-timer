import { EggDoneness, TimerPreferences, TimerHistoryEntry } from '../types';

const PREFERENCES_KEY = 'egg-timer-preferences';
const HISTORY_KEY = 'egg-timer-history';

// Default preferences
const DEFAULT_PREFERENCES: TimerPreferences = {
  lastSelectedDoneness: EggDoneness.MEDIUM,
  timerHistory: []
};

// Load preferences from localStorage
export const loadPreferences = (): TimerPreferences => {
  try {
    const stored = localStorage.getItem(PREFERENCES_KEY);
    if (!stored) return DEFAULT_PREFERENCES;
    return { ...DEFAULT_PREFERENCES, ...JSON.parse(stored) };
  } catch (error) {
    console.error('Error loading preferences:', error);
    return DEFAULT_PREFERENCES;
  }
};

// Save preferences to localStorage
export const savePreferences = (preferences: TimerPreferences): void => {
  try {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Error saving preferences:', error);
  }
};

// Save last selected doneness
export const saveLastDoneness = (doneness: EggDoneness): void => {
  try {
    const preferences = loadPreferences();
    preferences.lastSelectedDoneness = doneness;
    savePreferences(preferences);
  } catch (error) {
    console.error('Error saving last doneness:', error);
  }
};

// Load last selected doneness
export const loadLastDoneness = (): EggDoneness => {
  try {
    const preferences = loadPreferences();
    return preferences.lastSelectedDoneness;
  } catch (error) {
    console.error('Error loading last doneness:', error);
    return EggDoneness.MEDIUM;
  }
};

// Add timer completion to history
export const addTimerToHistory = (doneness: EggDoneness): void => {
  try {
    const preferences = loadPreferences();
    const entry: TimerHistoryEntry = {
      id: generateId(),
      doneness,
      completedAt: new Date().toISOString()
    };

    // Keep only last 50 entries
    preferences.timerHistory = [entry, ...preferences.timerHistory].slice(0, 50);
    savePreferences(preferences);
  } catch (error) {
    console.error('Error adding timer to history:', error);
  }
};

// Load timer history
export const loadTimerHistory = (): TimerHistoryEntry[] => {
  try {
    const preferences = loadPreferences();
    return preferences.timerHistory;
  } catch (error) {
    console.error('Error loading timer history:', error);
    return [];
  }
};

// Clear timer history
export const clearTimerHistory = (): void => {
  try {
    const preferences = loadPreferences();
    preferences.timerHistory = [];
    savePreferences(preferences);
  } catch (error) {
    console.error('Error clearing timer history:', error);
  }
};

// Generate unique ID
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
