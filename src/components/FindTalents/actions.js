import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockData } from './mockData';

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /applications
// arguments for reply are (status, data, headers)
mock.onGet('/talents').reply(200, {
  talents: mockData
});

export const FETCH_TALENTS_REQUEST = 'FETCH_TALENTS_REQUEST';
export const FETCH_TALENTS_SUCCESS = 'FETCH_TALENTS_SUCCESS';
export const FETCH_TALENTS_FAILURE = 'FETCH_TALENTS_FAILURE';

export const fetchTalents = function () {
  return function (dispatch) {
    dispatch({
      type: FETCH_TALENTS_REQUEST,
      receivedAt: Date.now()
    });
    return axios.get('/TALENTS')
      .then(function(response) {
        dispatch({
          type: FETCH_TALENTS_SUCCESS,
          receivedAt: Date.now(),
          talents: response.data.talents
        });
      }).catch((error) => {
        dispatch({
          type: FETCH_TALENTS_FAILURE,
          receivedAt: Date.now(),
          payload: error.toString()
        });
      });
  };
};
