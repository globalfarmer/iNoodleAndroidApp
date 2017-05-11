
import { combineReducers } from 'redux';

import drawer from './drawer';
import user from './user';
import list from './list';
import noodleboard from './noodleboard';

export default combineReducers({
  drawer,
  user,
  noodleboard
});
