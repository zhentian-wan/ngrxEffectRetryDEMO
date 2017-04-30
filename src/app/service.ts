import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class Service {
  counter = 0;

  addFeed(action): Observable<any> {
    this.counter++;
    console.log('addFeed:', this.counter);
    if (this.counter > 3) {
      return Observable.of('SUCCESS');
    } else {
      return Observable.throw(new Error('OFFLINE'));
    }
  }
}
