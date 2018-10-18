import {
  takeLatest,
  call,
  put,
  all,
} from 'redux-saga/effects';

import Api from '../services/api';
import CONSTANTS from './constants';

/**
 * Retrieves data by provided URL and dispatches an event with response payload
 *
 * @yields {object} server response with a list of results property
 */
function* fetchVehicles() {
  try {
    const response = yield call(
      Api.fetch,
      'https://swapi.co/api/vehicles/',
    );

    yield put({
      type: CONSTANTS.FETCH_SUCCESS,
      vehicles: response.results,
    });
  } catch (error) {
    // @TODO: remove
    // eslint-disable-next-line
    console.log('fetchVehicles error', error);
  }
}

/**
 * Set a watcher for a fetch data event
 * and cancels any previous similar requests
 *
 * @yields {object} action
 */
function* watchFetchVehicles() {
  yield takeLatest(CONSTANTS.FETCH_DATA, fetchVehicles);
}

export default function* rootSaga() {
  yield all([
    watchFetchVehicles(),
  ]);
}
