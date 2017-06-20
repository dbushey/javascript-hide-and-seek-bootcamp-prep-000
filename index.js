function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');


  for (let i = 0; i < lis.length; i++) {
    debugger
    var newElem = parseInt(lis[i].innerHTML);
    lis[i].innerHTML = newElem + n;
    }
}

function deepestChild(){
  const lis = document.getElementById('grand-node').querySelectorAll('div');

  for (let i = 0; i < lis.length; i++){
    if(!(lis[i].querySelector("div"))){
      return lis[i];
    }
  }
}
