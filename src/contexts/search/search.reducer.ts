import { State } from './search.context';

export type ActionType = { type: 'UPDATE' | 'RESET'; payload: object };

export function reducer(state: State, action: ActionType): State {
    switch (action.type) {
        case 'UPDATE':
            return { ...state, ...action.payload };
        case 'RESET':
            return { ...state };
        default:
            return state;
    }
}
