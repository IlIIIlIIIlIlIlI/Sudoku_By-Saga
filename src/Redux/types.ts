import { ActionType } from 'typesafe-actions';
import {
  setMatrix,
  solveTopCentreMatrix,
  solveTopRightMatrix,
  solveMiddleLeftMatrix,
  solveMiddleRightMatrix,
  startSolvingMatrixFromScrach,
} from './actions';

export type Sudoku = {
  matrix9x9: number[][];
};

export type ReduxActionType =
  | ActionType<typeof solveTopCentreMatrix>
  | ActionType<typeof solveTopRightMatrix>
  | ActionType<typeof solveMiddleLeftMatrix>
  | ActionType<typeof solveMiddleRightMatrix>
  | ActionType<typeof startSolvingMatrixFromScrach>
  | ActionType<typeof setMatrix>;
