
import type { Action } from '../actions/types';
import { VIEW_DETAILS } from '../actions/noodle_details';

const initialState = {
    boardSource: undefined,
    data: {}
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === VIEW_DETAILS) {
    return {
      ...state,
      boardSource: action.boardSource,
      data: action.data
    };
  }
  return state;
}
