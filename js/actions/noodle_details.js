
import type { Action } from './types';

export const VIEW_DETAILS = 'VIEW_DETAILS';

export function viewDetails({boardSource, data}):Action {
  return {
    type: VIEW_DETAILS,
    boardSource: boardSource,
    data: data
  };
}
