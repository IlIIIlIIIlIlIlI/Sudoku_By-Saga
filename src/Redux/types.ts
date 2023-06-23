import { ActionType } from 'typesafe-actions';
import {
  setMatrix,
  solveTopCentreMatrix,
  solveTopRightMatrix,
  solveMiddleLeftMatrix,
  solveMiddleRightMatrix,
  startSolvingMatrixFromScrach,
  solveBottomLeftMatrix,
  solveBottomCenterMatrix,
  toggleLoadingSpinner,
} from './actions';

export type Sudoku = {
  matrix9x9: number[][];
  isSudokuBeingCalculated: boolean;
};

export type ReduxActionType =
  | ActionType<typeof solveTopCentreMatrix>
  | ActionType<typeof solveTopRightMatrix>
  | ActionType<typeof solveMiddleLeftMatrix>
  | ActionType<typeof solveMiddleRightMatrix>
  | ActionType<typeof solveBottomLeftMatrix>
  | ActionType<typeof solveBottomCenterMatrix>
  | ActionType<typeof startSolvingMatrixFromScrach>
  | ActionType<typeof toggleLoadingSpinner>
  | ActionType<typeof setMatrix>;
