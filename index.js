function getFirstSelector(select) {
  return document.querySelector(select)
}

function nestedTarget(target, nested) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list').children
  
  for(let i = 0; list.length > i; i++) {
    
    let test = list[i].children
    
    for()
  }
}