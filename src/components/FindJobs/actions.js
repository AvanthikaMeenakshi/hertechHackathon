import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockData } from './mockData';

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /applications
// arguments for reply are (status, data, headers)
mock.onGet('/jobs').reply(200, {
  applications: mockData
});

export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';

export const fetchJobs = function () {
  return function (dispatch) {
    dispatch({
      type: FETCH_JOBS_REQUEST
    });
  };
};
