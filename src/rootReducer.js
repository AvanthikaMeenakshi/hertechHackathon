import { combineReducers } from 'redux';
import jobsHandler from './components/FindJobs/reducer';
import talentHandler from './components/FindTalents/reducer';

const rootReducer = combineReducers({
  jobsHandler,
  talentHandler
});

export default rootReducer;
