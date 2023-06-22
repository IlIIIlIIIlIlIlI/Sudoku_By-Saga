import { createAction } from 'typesafe-actions';

export const setBlankMatrix = createAction(
  'SET_BLANK_MATRIX_9X9',
  (action) => (payload: { matrix9x9: number[][] }) => action(payload)
);
