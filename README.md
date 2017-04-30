# ngRxEffectsRetryDEMO

Effects lib mainly takes care to async actions and it talks to service to preform http request.

Let's say it there is any connection problem and BE problems, inside service will throw error.

Then we can handle those error inside effect.

For example: 

Service:

To simulate error, inside this mock service, we just count, called more than two time, it returns success, otherwise, error response.
```ts
  addFeed(action): Observable<any> {
    this.counter++;
    console.log('addFeed:', this.counter);
    if (this.counter > 2) {
      return Observable.of('SUCCESS');
    } else {
      return Observable.throw(new Error('OFFLINE'));
    }
  }
```

Effect:
Using `retryWhen` to retry 3 times each delay 1 second, if not success, then throw error.
```ts
  @Effect() add$: Observable<any> = this.actions$
    .ofType('ADD')
    .switchMap((action) => this.service.addFeed(action))
    .map(result => ({type: 'SUCCESS'}))
    .retryWhen(err => err.delay(1000).take(3)
      .concat(Observable.throw(err)))
    .catch(err => Observable.of({type: 'ACTION_ERROR'}));
```
