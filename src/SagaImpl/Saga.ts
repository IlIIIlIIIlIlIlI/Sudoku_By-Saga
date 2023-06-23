import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';
import { startSolvingMatrixFromScrach } from '../Redux';
import { create3by3RandomMatrix } from '../Utility/RedokuUtils';

function* watchStartSolvingMatrixFromScrach() {
  try {
    yield call(() => {
      console.log('action', create3by3RandomMatrix());
    });
  } catch (e) {}
}

export function* sudokuSaga(): SagaIterator<void> {
  yield takeEvery(
    startSolvingMatrixFromScrach,
    watchStartSolvingMatrixFromScrach
  );
}
