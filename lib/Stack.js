class Stack {
	// initial stack
	constructor() {
		this.__data__ = [];
	}
	// get top element of stack
	top() {
		return this.__data__[this.__data__.length - 1];
	}
	// check empty stack
	empty() {
		return this.__data__.length === 0;
	}
	// pop top element of stack
	pop() {
		this.__data__.pop();
	}
	// push element to top stack
	push(x) {
		this.__data__.push(x);
	}
}

module.export = Stack;
