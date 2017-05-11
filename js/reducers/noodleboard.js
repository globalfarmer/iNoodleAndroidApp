
import type { Action } from '../actions/types';
import { CHANGE_CONTENT_SCENE, ANNOUNCE } from '../actions/noodleboard';


const initialState = {
  currentContent: ANNOUNCE,
  data: {
      announce: {},
      slot: {},
      finaltest: {},
      scoreboard: {}
  }
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === CHANGE_CONTENT_SCENE) {
    return {
      ...state,
      currentContent: action.payload,
    };
  }
  return state;
}
