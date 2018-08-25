import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockData } from './mockData';

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /applications
// arguments for reply are (status, data, headers)
mock.onGet('/jobs').reply(200, {
  jobs: mockData
});

export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const fetchJobs = function () {
  return function (dispatch) {
    dispatch({
      type: FETCH_JOBS_REQUEST,
      jobs: mockData,
      receivedAt: Date.now()
    });
    return axios.get('/jobs')
      .then(function(response) {
        dispatch({
          type: FETCH_JOBS_SUCCESS,
          receivedAt: Date.now(),
          jobs: response.data.jobs
        });
      }).catch((error) => {
        dispatch({
          type: FETCH_JOBS_FAILURE,
          receivedAt: Date.now(),
          jobs: mockData,
          payload: error.toString()
        });
      });
  };
};
