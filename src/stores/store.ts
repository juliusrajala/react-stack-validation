import produce from 'immer';
import { delay, filter, map } from 'rxjs/operators';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_OPERATION = 'ADD_OPERATION';

export const incrementCount = (value?: number) => ({ type: INCREMENT, value: value || 1 });
export const decrementCount = (value?: number) => ({ type: DECREMENT, value: value || 1 });

const addOperation = () => ({ type: ADD_OPERATION });

export const delayEpic = (action$, state$) => action$.pipe(
  filter((action: Action) => action && (action.type === INCREMENT || action.type === DECREMENT)),
  delay(1000),
  map(() => addOperation())
);

interface State {
  lastOperator?: string;
  count: number;
  operations: number;
}

interface Action {
  type: string;
  payload?: any;
}

// const immutableReducer = produce((state: State, action: Action) => {
  
// })

const testReducer = (state: State = { count: 0, operations: 0 }, action: any) => {
  console.log('Initialization action', action);
  switch(action.type) {
    case INCREMENT:
      return produce((state: State, draft: State): any => {
        draft.count = state.count + action.payload.value;
      });
    case DECREMENT:
      return produce((state: State, draft: State): any => {
        draft.count = state.count - action.payload.value;
      });
    case ADD_OPERATION:
      return produce((state: State, draft: State): any => {
        draft.operations = state.operations + 1;
      });
    default: return state;
  }
}

export default testReducer;