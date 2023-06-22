import { ActionType } from 'typesafe-actions';
import { setBlankMatrix } from './actions';

export type Sudoku = {
  matrix9x9: number[][];
};

export type ReduxActionType = ActionType<typeof setBlankMatrix>;
