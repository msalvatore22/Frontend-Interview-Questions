// A closure is an enclosed function with references to its surrounding state or lexical environment
// Closure gives you access to an outer functions scope from an inner function

function counter(){
  let count = 0;
  return () => {
    return count++
  }
}

const c = counter()
console.log(typeof c)

console.log(c())
console.log(c())
console.log(c())