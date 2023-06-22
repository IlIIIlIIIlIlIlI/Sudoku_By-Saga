import { createReducer } from 'typesafe-actions';
import { Sudoku } from './types';

const initialState: Sudoku = {
  matrix9x9: [],
};

export default createReducer<Sudoku, any>(initialState);
