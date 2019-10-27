import sagaHelper from "redux-saga-testing";
import { put, select, call, takeEvery, delay } from "redux-saga/effects";

import rootSaga, { increaseDelay, fun } from ".";
import { getCount } from "../selectors";

import * as types from "../types";

describe("When testing index Saga", () => {
  describe("test increaseDelay", () => {
    const it = sagaHelper(increaseDelay());

    it("should delay one second", result => {
      expect(result).toEqual(delay(1000));
    });

    it("should get count", result => {
      expect(result).toEqual(select(getCount));
      return 10;
    });

    it("should call fun", result => {
      const gen = fun(111, 222, 333);
      expect(gen.next().value).toBe(111);
      expect(gen.next().value).toBe(222);
      expect(gen.next().value).toBe(333);
    });

    it("should put increase", result => {
      expect(result).toEqual(11);
      return;
    });
  });
  describe("test increaseDelay, and test fun with 0, 0, 0", () => {
    const it = sagaHelper(increaseDelay());

    it("should delay one second", result => {
      expect(result).toEqual(delay(1000));
    });

    it("should get count", result => {
      expect(result).toEqual(select(getCount));
      return 10;
    });

    it("should call fun", result => {
      const gen = fun(0, 0, 0);
      expect(gen.next().value).toBeUndefined();
    });

    it("should put increase", result => {
      expect(result).toEqual(11);
      return;
    });
  });

  describe("test rootSaga", () => {
    const it = sagaHelper(rootSaga());

    it("should call increaseDelay by action", result => {
      expect(result).toEqual(takeEvery(types.INCREASE_DELAY, increaseDelay));
    });
  });
});
