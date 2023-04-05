

function Person(){
  this.name = 'bob';
}

Person.prototype.sayHello = function()
{
  console.log("Hello")
}

const p = new Person()

p.sayHello()


class Animal {
  constructor(){
    this.type = 'dog'
  }

  wagTail(){
    console.log("wags tail")
  }
}

const d = new Animal()
d.wagTail()