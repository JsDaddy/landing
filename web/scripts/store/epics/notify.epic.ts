import { combineEpics } from 'redux-observable';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { api } from '../../services';
import * as NotifyActions from '../actions/notify.actions';

export const notifyEpic = (action$: any, _store: any) => {
  return action$
    .ofType(NotifyActions.PENDING)
    .map((action: any) => action.payload)
    .switchMap((payload: any) => {
      return api.sendEmail(payload.url, payload.data, { 'Content-Language': payload.lang })
        .map((_data: any) => NotifyActions.ShowNotify('message'))
        .catch((error: any) => Observable.of(NotifyActions.ErrorNotify(error)));
    });
};

export const rootEpic = combineEpics(
  notifyEpic,
);
