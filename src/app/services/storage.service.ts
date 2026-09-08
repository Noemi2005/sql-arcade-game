import { Injectable } from '@angular/core';
import { LocalRecords } from '../models/game-state.model';

const STORAGE_KEY = 'sql-ddl-challenge-arcade-records';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getRecords(): LocalRecords {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Error reading records from localStorage', e);
    }
    return {
      highScore: 0,
      bestStreak: 0,
      highestLevel: 1,
      gamesPlayed: 0,
      totalCorrect: 0
    };
  }

  saveGameResult(score: number, maxStreak: number, level: number, correctCount: number): { isNewHighScore: boolean; isNewBestStreak: boolean } {
    const current = this.getRecords();
    let isNewHighScore = false;
    let isNewBestStreak = false;

    if (score > current.highScore) {
      current.highScore = score;
      isNewHighScore = true;
    }

    if (maxStreak > current.bestStreak) {
      current.bestStreak = maxStreak;
      isNewBestStreak = true;
    }

    if (level > current.highestLevel) {
      current.highestLevel = level;
    }

    current.gamesPlayed += 1;
    current.totalCorrect += correctCount;
    current.lastPlayedDate = new Date().toISOString();

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch (e) {
      console.warn('Error writing records to localStorage', e);
    }

    return { isNewHighScore, isNewBestStreak };
  }

  resetRecords(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Error clearing localStorage', e);
    }
  }
}
