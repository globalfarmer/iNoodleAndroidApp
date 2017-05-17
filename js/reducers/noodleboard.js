
import type { Action } from '../actions/types';
import { CHANGE_CONTENT_SCENE, ON_GET_DATA, ANNOUNCE } from '../actions/noodleboard';


const initialState = {
  currentContent: ANNOUNCE,
  announceData: {},
  slotData: {},
  finaltestData: {},
  scoreboardData: {}
};

export default function (state:State = initialState, action:Action): State {
    switch (action.type) {
        case CHANGE_CONTENT_SCENE:
            return {
                ...state,
                currentContent: action.payload
            }
            break;
        case ON_GET_DATA:
            return {
                ...state,
                ...action.payload
            }
            break;
        default:

    }
    return state;
}
