import { ActionType } from 'typesafe-actions';
import {
  setMatrix,
  solveTopCentreMatrix,
  startSolvingMatrixFromScrach,
} from './actions';

export type Sudoku = {
  matrix9x9: number[][];
};

export type ReduxActionType =
  | ActionType<typeof solveTopCentreMatrix>
  | ActionType<typeof startSolvingMatrixFromScrach>
  | ActionType<typeof setMatrix>;
