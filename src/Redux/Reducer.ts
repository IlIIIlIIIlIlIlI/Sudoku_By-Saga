import { createReducer } from 'typesafe-actions';
import { ReduxActionType, Sudoku } from './types';

const initialState: Sudoku = {
  matrix9x9: [],
};

export default createReducer<Sudoku, ReduxActionType>(initialState);
