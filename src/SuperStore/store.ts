import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sudokuReducer, { Sudoku } from '../Redux';
import rootSaga from './rootSaga';

export type SudokuSuperState = {
  sudoku: Sudoku;
};

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers<SudokuSuperState>({
  sudoku: sudokuReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
