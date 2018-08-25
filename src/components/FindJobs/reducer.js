import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE
} from './actions';

const initialState = {
  jobs: []
};

const jobsHandler = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
    case FETCH_JOBS_FAILURE:
      return { ...state };
    case FETCH_JOBS_SUCCESS:
      return { ...state, jobs: action.jobs }
    default:
      return state;
  }
};

export default jobsHandler;
