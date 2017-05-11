
import { combineReducers } from 'redux';

import drawer from './drawer';
import user from './user';
import noodleboard from './noodleboard';
import noodleDetails from './noodle_details'

export default combineReducers({
  drawer,
  noodleDetails,
  user,
  noodleboard,
});
