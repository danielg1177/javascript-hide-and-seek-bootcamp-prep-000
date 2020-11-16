function getFirstSelector(select) {
  return document.querySelector(select)
}

function nestedTarget(target, nested) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list')
  
  for(let i = 0; list.length > i; i++) {
    
    let test = list[i].children
    
    for(let j = 0; test.length > j; j++) {
      test[j].innerHTML = parseInt(test[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  
  let start = document.getElementById('grand-node')
  let next = start.children[0]
  
  while(next) {
    
    start = next
    next = start.children[0]
  }
  return next
}