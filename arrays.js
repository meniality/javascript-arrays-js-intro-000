var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var anotherArray = [`${element}`,...array]
  return anotherArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(`{element}`);
  return array
}

