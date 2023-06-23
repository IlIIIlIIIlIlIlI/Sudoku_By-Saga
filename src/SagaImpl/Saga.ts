import { SagaIterator } from 'redux-saga';
import {
  SagaReturnType,
  call,
  delay,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import {
  selectMatrix9x9,
  setMatrix,
  solveBottomCenterMatrix,
  solveBottomLeftMatrix,
  solveMiddleLeftMatrix,
  solveMiddleRightMatrix,
  solveTopCentreMatrix,
  solveTopRightMatrix,
  startSolvingDiagonalMatrices,
  startSolvingMatrixFromScrach,
  toggleLoadingSpinner,
} from '../Redux';
import {
  calculateNonDiagonalMatrix,
  createOnlyDiagonalMatrices,
} from '../Utility/RedokuUtils';

function* watchStartSolvingDiagonalMatrices(): SagaIterator<void> {
  yield put(toggleLoadingSpinner(true));
  yield delay(1000);
  yield put(startSolvingMatrixFromScrach());
}

function* watchStartSolvingMatrixFromScrach(): SagaIterator<void> {
  yield put(setMatrix({ matrix9x9: createOnlyDiagonalMatrices() }));
  yield put(solveTopCentreMatrix());
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

    yield put(solveMiddleRightMatrix());
  } catch (e) {
    yield put(startSolvingMatrixFromScrach());
  }
}

function* watchSolveMiddleRightMatrix(): SagaIterator<void> {
  try {
    const matrixSolvedSoFar: SagaReturnType<typeof selectMatrix9x9> =
      yield select(selectMatrix9x9);

    const middleRightMatrix = yield call(
      calculateNonDiagonalMatrix,
      matrixSolvedSoFar,
      3,
      6
    );

    yield put(setMatrix({ matrix9x9: middleRightMatrix }));
    yield put(solveBottomLeftMatrix());
  } catch (error) {
    yield put(startSolvingMatrixFromScrach());
  }
}

function* watchSolveBottomLeftMatrix(): SagaIterator<void> {
  try {
    const matrixSolvedSoFar: SagaReturnType<typeof selectMatrix9x9> =
      yield select(selectMatrix9x9);

    const bottomLeftMatrix = yield call(
      calculateNonDiagonalMatrix,
      matrixSolvedSoFar,
      6,
      0
    );

    yield put(setMatrix({ matrix9x9: bottomLeftMatrix }));
    yield put(solveBottomCenterMatrix());
  } catch (error) {
    yield put(startSolvingMatrixFromScrach());
  }
}

function* watchSolveBottomCenterMatrix(): SagaIterator<void> {
  try {
    const matrixSolvedSoFar: SagaReturnType<typeof selectMatrix9x9> =
      yield select(selectMatrix9x9);

    const bottomCenterMatrix = yield call(
      calculateNonDiagonalMatrix,
      matrixSolvedSoFar,
      6,
      3
    );
    yield put(setMatrix({ matrix9x9: bottomCenterMatrix }));
    yield put(toggleLoadingSpinner(false));
  } catch (error) {
    yield put(startSolvingMatrixFromScrach());
  }
}

export function* sudokuSaga(): SagaIterator<void> {
  yield takeLatest(
    startSolvingMatrixFromScrach,
    watchStartSolvingMatrixFromScrach
  );

  yield takeLatest(
    startSolvingDiagonalMatrices,
    watchStartSolvingDiagonalMatrices
  );

  yield takeLatest(solveTopCentreMatrix, watchSolveTopCenterMatrix);

  yield takeLatest(solveTopRightMatrix, watchSolveTopRightMatrix);

  yield takeLatest(solveMiddleLeftMatrix, watchSolveMiddleLeftMatrix);

  yield takeLatest(solveMiddleRightMatrix, watchSolveMiddleRightMatrix);

  yield takeLatest(solveBottomLeftMatrix, watchSolveBottomLeftMatrix);

  yield takeLatest(solveBottomCenterMatrix, watchSolveBottomCenterMatrix);
}
