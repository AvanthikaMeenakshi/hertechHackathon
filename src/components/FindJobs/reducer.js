import {
  FETCH_JOBS_REQUEST
} from './actions';

const initialState = {
  fetchPosts: []
};

const jobsHandler = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return { ...state };
    default:
      return state;
  }
};

export default jobsHandler;
