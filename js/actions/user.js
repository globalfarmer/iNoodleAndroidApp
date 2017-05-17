
import type { Action } from './types';

export const SET_INFO = 'SET_INFO';
export const ON_GET_INFO = 'ON_GET_INFO';

export function setInfo(info):Action {
    return {
        type: SET_INFO,
        info: info
    };
}
