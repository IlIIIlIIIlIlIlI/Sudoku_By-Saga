import { SagaIterator } from 'redux-saga';
import {
  SagaReturnType,
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import {
  selectMatrix9x9,
  setMatrix,
  solveMiddleLeftMatrix,
  solveTopCentreMatrix,
  solveTopRightMatrix,
  startSolvingMatrixFromScrach,
} from '../Redux';
import {
  calculateNonDiagonalMatrix,
  createOnlyDiagonalMatrices,
} from '../Utility/RedokuUtils';

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

    const topCenterMatrix = yield call(
      calculateNonDiagonalMatrix,
      matrixSolvedSoFar,
      0,
      3
    );

    yield put(setMatrix({ matrix9x9: topCenterMatrix }));

    yield put(solveTopRightMatrix());
  } catch (e) {
    yield put(startSolvingMatrixFromScrach());
    console.log('errors occured', e);
  }
}

function* watchSolveTopRightMatrix(): SagaIterator<void> {
  try {
    const matrixSolvedSoFar: SagaReturnType<typeof selectMatrix9x9> =
      yield select(selectMatrix9x9);

    const topRightMatrix = yield call(
      calculateNonDiagonalMatrix,
      matrixSolvedSoFar,
      0,
      6
    );

    yield put(setMatrix({ matrix9x9: topRightMatrix }));
    yield put(solveMiddleLeftMatrix());
  } catch (e) {
    yield put(startSolvingMatrixFromScrach());
    console.log('errors occured', e);
  }
}

function* watchSolveMiddleLeftMatrix(): SagaIterator<void> {
  try {
    const matrixSolvedSoFar: SagaReturnType<typeof selectMatrix9x9> =
      yield select(selectMatrix9x9);

    const middleLeftMatrix = yield call(
      calculateNonDiagonalMatrix,
      matrixSolvedSoFar,
      3,
      0
    );

    yield put(setMatrix({ matrix9x9: middleLeftMatrix }));

    // yield put(solveTopRightMatrix());
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

  yield takeLatest(solveTopRightMatrix, watchSolveTopRightMatrix);

  yield takeLatest(solveMiddleLeftMatrix, watchSolveMiddleLeftMatrix);
}
