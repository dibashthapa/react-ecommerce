import { ActionType, State } from './language.context';

export function reducer(state: State, action: ActionType): State {
   switch (action.type) {
      case 'UPDATE':
         return { ...state, ...action.payload };
      default:
         return state;
   }
}
