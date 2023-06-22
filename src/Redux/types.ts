import { ActionType } from 'typesafe-actions';
import { setMatrix, startSolvingMatrixFromScrach } from './actions';

export type Sudoku = {
  matrix9x9: number[][];
};

export type ReduxActionType =
  | ActionType<typeof startSolvingMatrixFromScrach>
  | ActionType<typeof setMatrix>;
