
import type { Action } from '../actions/types';
import { SET_INFO, ON_GET_INFO } from '../actions/user';
import { getData } from '../actions/noodleboard';
import { Values } from '../resource';

export type State = {
    name: string
}

const initialState = {
    fullname: "",
    code: "",
    birthday: "",
    klass: "",
    term: Values.person.term['2016-2017-1']
};

export default function (state:State = initialState, action:Action): State {
    switch (action.type) {
        case SET_INFO:
            return {
                ...state,
                ...action.info
            }
            break;
    }
  return state;
}
