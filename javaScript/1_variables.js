// const is immutable cannot reassign
const a = "a"
// a = 1 would not be allowed

// let is mutable and block scoped

if(true){
  let block = "I am a blocked scoped variable"
}
// cannot console.log(block) outside of the code block

// var is mutable like let but it is not block scoped due to hoisting

console.log(hoist)

if(true){
  var hoist = "I am a non block scoped variable that can be accessed anywhere in this file"
}

