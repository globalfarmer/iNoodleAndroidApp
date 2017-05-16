
import type { Action } from './types';

export const CHANGE_CONTENT_SCENE = 'CHANGE_CONTENT_SCENE';
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
