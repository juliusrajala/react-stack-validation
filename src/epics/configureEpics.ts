import { combineEpics } from 'redux-observable';
import { delay, filter, map, pairwise, last } from 'rxjs/operators';
import { Action, addDouble, addOperation } from 'src/stores/immerStore';
import { INCREMENT, DECREMENT, ADD_OPERATION } from 'src/stores/actionTypes';

const noteDoubles = ([last, next]) => {
  console.log(last, next);
  return (last.type === next.type)
};

export default () => {
  const doubleEpic = (action$) => action$.pipe(
    filter((action: Action) => action.type !== ADD_OPERATION),
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
