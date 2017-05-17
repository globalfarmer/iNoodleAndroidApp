
import type { Action } from './types';

export const CHANGE_CONTENT_SCENE = 'CHANGE_CONTENT_SCENE';
export const ON_GET_DATA = "ON_GET_DATA";

export const ANNOUNCE = 'ANNOUNCE';
export const SLOT = 'SLOT';
export const FINAL_TEST = 'FINAL_TEST';
export const SCOREBOARD = 'SCOREBOARD';
export const GAME = 'GAME';

export function changeContentScene(contentType:string):Action {
  return {
    type: CHANGE_CONTENT_SCENE,
    payload: contentType,
  };
}

export function onGetData(data):Action {
    return {
        type: ON_GET_DATA,
        payload: data
    }
}

export function getAnnounce(cb):Action {
    fetch('http://188.166.222.158:8080/announce', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({page: 1})
    })
    .then(res=>res.json())
    .then(res => {
        if( res ) {
            cb(res)
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

export function getSlot(code, term, cb) {
    fetch('http://188.166.222.158:8080/slot', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({code, term})
    })
    .then(res=>res.json())
    .then(res => {
        if( res ) {
            cb(res)
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

export function getFinalTest(code, term, cb) {
    fetch('http://188.166.222.158:8080/finaltest', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({code, term})
    })
    .then(res=>res.json())
    .then(res => {
        if( res ) {
            cb(res)
        }
    })
    .catch((error) => {
        console.error(error);
    });
}

function getScoreboard() {

}
