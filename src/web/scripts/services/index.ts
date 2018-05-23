import * as axios from 'axios';
import { Observable } from 'rxjs/Observable';

const BASE_URL: string =  'http://jsdaddy.io';

export const api = {
  sendEmail(url: string, body: any, headers: any): Observable<any> {
    return Observable.fromPromise(axios.default.post(`${BASE_URL}/${url}`, body, {headers}));
  },
};
