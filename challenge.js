class Stack {
  stack = [];
  push(number) {
    this.stack.push(number);
  }

  pop() {
    if (this.stack.length === 0) {
      return 'undeflow';
    }
    return this.stack.pop();
  }

  min() {
    let temp = this.stack[0];
    this.stack.forEach((element) => {
      if (temp > element) {
        temp = element;
      }
    });
    return temp;
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
console.log(stack.min());
// => 3

stack.pop();
stack.push(7);
console.log(stack.min());
// => 3

stack.push(2);
console.log(stack.min());
// => 2

stack.pop();
console.log(stack.min());
// => 3

module.exports = Stack;
