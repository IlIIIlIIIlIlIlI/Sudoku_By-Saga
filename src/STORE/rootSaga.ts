import { all, fork } from 'redux-saga/effects';
import { sudokuSaga } from '../SagaImpl/Saga';

function* rootSaga() {
  yield all([fork(sudokuSaga)]);
}

export default rootSaga;
