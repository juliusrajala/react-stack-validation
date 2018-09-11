import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { delay, filter, map, pairwise, last } from 'rxjs/operators';
import { Action, addDouble, addOperation } from 'src/stores/store';
import { INCREMENT, DECREMENT } from 'src/stores/actionTypes';

const noteDoubles = ([last, next]) => (last.type === next.type);

export default () => {
  const doubleEpic = (action$) => action$.pipe(
    filter((action: Action) => action && (action.type === INCREMENT || action.type === DECREMENT)),
    pairwise(),
    filter(noteDoubles),
    map(() => addDouble()),
  );
  
  const operationEpic = (action$) => action$.pipe(
    filter((action: Action) => action && (action.type === INCREMENT || action.type === DECREMENT)),
    delay(1000),
    map(() => addOperation())
  );

  return combineEpics(operationEpic, doubleEpic);
}
