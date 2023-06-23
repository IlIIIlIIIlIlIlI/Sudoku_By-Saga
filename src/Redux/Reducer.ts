import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import { ReduxActionType, Sudoku } from './types';
import {
  setMatrix,
  solveBottomCenterMatrix,
  startSolvingMatrixFromScrach,
} from './actions';
import { createBlankMatrix } from '../Utility/RedokuUtils';

const initialState: Sudoku = {
  matrix9x9: createBlankMatrix(),
  isSudokuBeingCalculated: false,
};

export default createReducer<Sudoku, ReduxActionType>(initialState)
  .handleAction(setMatrix, (state, { payload: { matrix9x9 } }) => {
    return produce(state, (draft) => {
      draft.matrix9x9 = matrix9x9;
    });
  })
  .handleAction(startSolvingMatrixFromScrach, (state) => {
    return produce(state, (draft) => {
      draft.isSudokuBeingCalculated = true;
    });
  })
  .handleAction(solveBottomCenterMatrix, (state) => {
    return produce(state, (draft) => {
      draft.isSudokuBeingCalculated = false;
    });
  });
