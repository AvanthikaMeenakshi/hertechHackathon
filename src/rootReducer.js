import { combineReducers } from 'redux';
import jobsHandler from './components/FindJobs/reducer';

const rootReducer = combineReducers({
  jobsHandler
});

export default rootReducer;
