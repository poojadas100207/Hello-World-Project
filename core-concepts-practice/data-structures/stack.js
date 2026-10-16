class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items.at(-1);
  }

  get size() {
    return this.items.length;
  }
}

const browserHistory = new Stack();
browserHistory.push('home');
browserHistory.push('topics');
browserHistory.push('algorithms');
console.log(browserHistory.peek());
console.log(browserHistory.pop());
console.log(browserHistory.size);

module.exports = Stack;
