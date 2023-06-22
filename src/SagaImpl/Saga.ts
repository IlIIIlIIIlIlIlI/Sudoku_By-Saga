import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';
import { startSolvingMatrixFromScrach } from '../Redux';

function* watchStartSolvingMatrixFromScrach(
  action: ReturnType<typeof startSolvingMatrixFromScrach>
) {
  try {
    yield call(() => {
      console.log('action', action);
      console.log('successful');
    });
  } catch (e) {
    console.log('unsuccessful');
  }
}

export function* sudokuSaga(): SagaIterator<void> {
  yield takeEvery(
    startSolvingMatrixFromScrach,
    watchStartSolvingMatrixFromScrach
  );
}
