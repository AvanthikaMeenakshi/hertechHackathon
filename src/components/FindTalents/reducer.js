import {
  FETCH_TALENTS_REQUEST,
  FETCH_TALENTS_SUCCESS,
  FETCH_TALENTS_FAILURE
} from './actions';

const initialState = {
  talents: []
};

const talentHandler = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TALENTS_REQUEST:
    case FETCH_TALENTS_SUCCESS:
      return { ...state };
    case FETCH_TALENTS_FAILURE:
      return { ...state, talents: action.jobs }
    default:
      return state;
  }
};

export default talentHandler;
