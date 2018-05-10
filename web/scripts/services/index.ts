import * as axios from 'axios';
import * as config from 'config';
import { Observable } from 'rxjs/Observable';

const BASE_URL: string = config.get('BASE_URL');

export const api = {
  sendEmail(url: string, body: any, headers: any): Observable<any> {
    return Observable.fromPromise(axios.default.post(`${BASE_URL}/${url}`, body, {headers}));
  },
};
