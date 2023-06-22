import { createAction } from 'typesafe-actions';

export const startSolvingMatrixFromScrach = createAction(
  'START_SOLVING_MATRIX_FROM_SCRACH'
);

export const setMatrix = createAction(
  'SET_MATRIX_9X9',
  (action) => (payload: { matrix9x9: number[][] }) => action(payload)
);
