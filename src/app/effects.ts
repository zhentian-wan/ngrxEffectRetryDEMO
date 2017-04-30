import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/observable/of';

import {Service} from './service';

@Injectable()
export class MyEffects {

  @Effect() add$: Observable<any> = this.actions$
    .ofType('ADD')
    .switchMap((action) => this.service.addFeed(action))
    .map(result => ({type: 'SUCCESS'}))
    .retryWhen(err => err.delay(1000).take(3)
      .concat(Observable.throw(err)))
    .catch(err => Observable.of({type: 'ACTION_ERROR'}));

  constructor(private actions$: Actions,
              private service: Service) {
  }
}
