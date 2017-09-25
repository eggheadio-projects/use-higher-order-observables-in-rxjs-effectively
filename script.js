const clickObservable = Rx.Observable
  .fromEvent(document, 'click');

function performRequest() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json());
}

const emailObservable = clickObservable
  .flatMap(click => performRequest(), 
           (click, res) => res.email,
           3);

// mergeMap = map ... + ... mergeAll

emailObservable
  .subscribe(email => console.log(email));