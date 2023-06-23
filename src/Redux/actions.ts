import { createAction } from 'typesafe-actions';

export const startSolvingMatrixFromScrach = createAction(
  'START_SOLVING_MATRIX_FROM_SCRACH'
);

export const setMatrix = createAction(
  'SET_MATRIX_9X9',
  (action) => (payload: { matrix9x9: number[][] }) => action(payload)
);

export const solveTopCentreMatrix = createAction('SOLVE_TOP_CENTER_MATRIX');

export const solveTopRightMatrix = createAction('SOLVE_TOP_RIGHT_MATRIX');

export const solveMiddleLeftMatrix = createAction('SOLVE_MIDDLE_LEFT_MATRIX');

export const solveMiddleRightMatrix = createAction('SOLVE_MIDDLE_RIGHT_MATRIX');

export const solveBottomLeftMatrix = createAction('SOLVE_BOTTOM_LEFT_MATRIX');

export const solveBottomCenterMatrix = createAction(
  'SOLVE_BOTTOM_CENTER_MATRIX'
);
