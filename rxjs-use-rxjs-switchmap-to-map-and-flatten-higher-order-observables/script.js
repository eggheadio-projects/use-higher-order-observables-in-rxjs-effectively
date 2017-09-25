const clickObservable = Rx.Observable
  .fromEvent(document, 'click');

function performRequest() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json());
}

// Observable<Event> ---> Observable<Response>
const responseObservable = clickObservable
  .switchMap(click => performRequest());

// switchMap = map ... + ... switch

responseObservable
  .subscribe(x => console.log(x.email) || displayInPreview(x.email));

  
// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}