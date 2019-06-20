const MyStack = function() {
  this.inputStack = []
  this.outputStack = []
};

MyStack.prototype.push = function(x) {
  this.inputStack.push(x)
};

MyStack.prototype.pop = function() {
  while (this.inputStack.length > 1){
      this.outputStack.push(this.inputStack.shift());
  }
  let item = this.inputStack.pop();
  this.inputStack = this.outputStack;
  this.outputStack = [];
  return item;
};

MyStack.prototype.top = function() {
  return this.inputStack[this.inputStack.length - 1];
};

MyStack.prototype.empty = function() {
  return this.inputStack.length === 0
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/