import {put, takeEvery} from 'redux-saga/effects';
import {
  ASYNC_DECREMENT,
  ASYNC_INCREMENT,
  decrementCreator,
  incrementCreator,
} from '../countReducer';

function* incrementWorker() {
  yield put(incrementCreator());
}

function* decrementWorker() {
  yield put(decrementCreator());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
