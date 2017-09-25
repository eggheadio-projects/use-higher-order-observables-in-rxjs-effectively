const clickObservable = Rx.Observable
  .fromEvent(document, 'click');

function performRequest() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json());
}

const emailObservable = clickObservable
  .switchMap(click => performRequest(), 
             (click, res) => res.email);

// concatMap = map ... + ... concatAll
// mergeMap
// switchMap

emailObservable
  .subscribe(email => console.log(email) || displayInPreview(email));

  
// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}