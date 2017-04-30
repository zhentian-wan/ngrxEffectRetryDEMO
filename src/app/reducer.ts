import {Action} from '@ngrx/store';

export function reducer(state = [], action: Action) {
  switch (action.type) {
    case 'ACTION_ERROR':
      console.log('ACTION_ERROR');
      return state;
    case 'SUCCESS' :
      console.log('SUCCESS');
      return state;
    default:
      return state;
  }
}
