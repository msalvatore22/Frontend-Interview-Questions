// this reference will be passed along in arrow functions
// arrow functions will bind this in the background

class Person {
  constructor(){
    this.name = "john"
  }

  sayHello(){
    setTimeout(() => {
      console.log('hello' + " " + this.name)
    }, 1000)
  }

  sayGoodbye(){
    setTimeout(function() {
      console.log('goodbye' +" "+this.name)
    }, 2000)
  }
}

const p = new Person()

p.sayHello()
p.sayGoodbye()