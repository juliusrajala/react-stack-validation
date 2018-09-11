import produce from 'immer';
import { delay, filter, map } from 'rxjs/operators';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_OPERATION = 'ADD_OPERATION';

export const incrementCount = (value?: number): Action => ({ type: INCREMENT, payload: value || 1 });
export const decrementCount = (value?: number): Action => ({ type: DECREMENT, payload: value || 1 });

const addOperation = () => ({ type: ADD_OPERATION });

export const delayEpic = (action$, state$) => action$.pipe(
  filter((action: Action) => action && (action.type === INCREMENT || action.type === DECREMENT)),
  delay(1000),
  map(() => addOperation())
);

interface State {
  lastOperator?: string;
  total: number;
  operations: number;
}

interface Action {
  type: string;
  payload?: any;
}

const testReducer = (state: State = { total: 0, operations: 0 }, action): State => {
  console.log('Initialization action', action);
  return produce<State>(state, draft => {
    switch (action.type) {
      case INCREMENT:
        draft.total = state.total + action.payload;
        return;
      case DECREMENT:
        draft.total = state.total - action.payload;
        return;
      case ADD_OPERATION:
        draft.operations = state.operations + 1;
        return;
    }
  })
}

export default testReducer;