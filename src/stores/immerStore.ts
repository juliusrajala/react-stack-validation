import produce from 'immer';
import { INCREMENT, DECREMENT, ADD_OPERATION, ADD_DOUBLE } from 'src/stores/actionTypes';

export const incrementCount = (value?: number): Action => ({ type: INCREMENT, payload: value });
export const decrementCount = (value?: number): Action => ({ type: DECREMENT, payload: value });

export const addOperation = () => ({ type: ADD_OPERATION });
export const addDouble = () => ({ type: ADD_DOUBLE });

interface State {
  lastOperator?: string;
  total: number;
  operations: number;
  doubles: number;
}

export interface Action {
  type: string;
  payload?: any;
}

const testReducer = (state: State = { total: 0, operations: 0, doubles: 0 }, action: Action): State => {
  console.log('Action', action.type);
  return produce<State>(state, draft => {
    switch (action.type) {
      case INCREMENT:
        draft.total = state.total + (action.payload || 1);
        return;
      case DECREMENT:
        draft.total = state.total - (action.payload || 1);
        return;
      case ADD_OPERATION:
        draft.operations = state.operations + 1;
        return;
      case ADD_DOUBLE:
        draft.doubles = state.doubles + 1;
        return;
    }
  })
}

export default testReducer;