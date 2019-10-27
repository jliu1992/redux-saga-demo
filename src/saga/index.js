import { put, select, takeEvery, delay } from "redux-saga/effects";
import * as types from "../types";
import { getCount } from "../selectors";
export function* increaseDelay() {
  yield delay(1000);
  const count = yield select(getCount);
  console.log(count);
  yield* fun(count, count + 1, count - 5);
  yield put({ type: types.INCREASE });
}

export function* fun(a, b, c) {
  if (a > 0) {
    yield a;
  }
  if (b > 0) {
    yield b;
  }
  if (c > 0) {
    yield c;
  }
}

export default function* rootSaga() {
  yield takeEvery(types.INCREASE_DELAY, increaseDelay);
}
