import { SudokuSuperState } from '../SuperStore/store';

export const selectSudokuState = (state: SudokuSuperState) => state.sudoku;

export const selectMatrix9x9 = (state: SudokuSuperState) =>
  selectSudokuState(state).matrix9x9;

export const selectIsSudokuBeingCalculated = (state: SudokuSuperState) =>
  selectSudokuState(state).isSudokuBeingCalculated;

export const selectPuzzleMatrix = (state: SudokuSuperState) =>
  selectSudokuState(state).puzzleMatrix;
