import { SagaIterator } from 'redux-saga';
import { SagaReturnType, put, select, takeLatest } from 'redux-saga/effects';
import {
  selectMatrix9x9,
  setMatrix,
  solveTopCentreMatrix,
  startSolvingMatrixFromScrach,
} from '../Redux';
import { createOnlyDiagonalMatrices } from '../Utility/RedokuUtils';

function* watchStartSolvingMatrixFromScrach(): SagaIterator<void> {
  try {
    yield put(setMatrix({ matrix9x9: createOnlyDiagonalMatrices() }));

    yield put(solveTopCentreMatrix());
  } catch (e) {
    console.log('errors occured', e);
  }
}

function* watchSolveTopCenterMatrix(): SagaIterator<void> {
  try {
    const matrixSolvedSoFar: SagaReturnType<typeof selectMatrix9x9> =
      yield select(selectMatrix9x9);

    console.log('matrixSolvedSoFar', matrixSolvedSoFar);
  } catch (e) {
    yield put(startSolvingMatrixFromScrach());
    console.log('errors occured', e);
  }
}

export function* sudokuSaga(): SagaIterator<void> {
  yield takeLatest(
    startSolvingMatrixFromScrach,
    watchStartSolvingMatrixFromScrach
  );

  yield takeLatest(solveTopCentreMatrix, watchSolveTopCenterMatrix);
}
