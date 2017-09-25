const busObservable = Rx.Observable.of(
  {code: 'en-us', value: '-TEST-'},
  {code: 'en-us', value: 'hello'},
  {code: 'es', value: '-TEST-'},
  {code: 'en-us', value: 'amazing'},
  {code: 'pt-br', value: '-TEST-'},
  {code: 'pt-br', value: 'olá'},
  {code: 'es', value: 'hola'},
  {code: 'es', value: 'mundo'},
  {code: 'en-us', value: 'world'},
  {code: 'pt-br', value: 'mundo'},
  {code: 'es', value: 'asombroso'},
  {code: 'pt-br', value: 'maravilhoso'}
).concatMap(x => Rx.Observable.of(x).delay(500));

const all = busObservable
  .groupBy(obj => obj.code)
  .mergeMap(innerObs => innerObs.skip(1).map(obj => obj.value));

all.subscribe(x => console.log(x) || displayInPreview(x));


// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}