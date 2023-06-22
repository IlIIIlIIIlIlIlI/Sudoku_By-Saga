import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sudokuReducer from '../Redux';
import sudokuSaga from '../SagaImpl';

export type SudokuSuperState = {
  sudoku: number;
};

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers<SudokuSuperState>({
  sudoku: sudokuReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sudokuSaga);
