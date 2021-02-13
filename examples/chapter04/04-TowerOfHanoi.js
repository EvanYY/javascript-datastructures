// const { hanoiStack } = PacktDataStructuresAlgorithms;
// const { hanoi } = PacktDataStructuresAlgorithms;

// console.log(hanoiStack(3));

// console.log(hanoi(3, 'source', 'helper', 'dest'));


// @ts-check
// class Stack {
//   constructor() {
//     this.count = 0;
//     this.items = {};
//   }

//   push(element) {
//     this.items[this.count] = element;
//     this.count++;
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     this.count--;
//     const result = this.items[this.count];
//     delete this.items[this.count];
//     return result;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     return this.items[this.count - 1];
//   }

//   isEmpty() {
//     return this.count === 0;
//   }

//   size() {
//     return this.count;
//   }

//   clear() {
//     /* while (!this.isEmpty()) {
//         this.pop();
//       } */
//     this.items = {};
//     this.count = 0;
//   }

//   toString() {
//     if (this.isEmpty()) {
//       return '';
//     }
//     let objString = `${this.items[0]}`;
//     for (let i = 1; i < this.count; i++) {
//       objString = `${objString},${this.items[i]}`;
//     }
//     return objString;
//   }
// }

function towerOfHanoi(plates, source, helper, dest, sourceName, helperName, destName, moves = []) {
  if (plates <= 0) {
    return moves;
  }
  if (plates === 1) {
    dest.push(source.pop());
    const move = {};
    move[sourceName] = source.toString();
    move[helperName] = helper.toString();
    move[destName] = dest.toString();
    moves.push(move);
  } else {
    towerOfHanoi(plates - 1, source, dest, helper, sourceName, destName, helperName, moves);
    dest.push(source.pop());
    const move = {};
    move[sourceName] = source.toString();
    move[helperName] = helper.toString();
    move[destName] = dest.toString();
    moves.push(move);
    towerOfHanoi(plates - 1, helper, source, dest, helperName, sourceName, destName, moves);
  }
  return moves;
}

function hanoiStack(plates) {
  const source = new Stack();
  const dest = new Stack();
  const helper = new Stack();

  for (let i = plates; i > 0; i--) {
    source.push(i);
  }

  return towerOfHanoi(plates, source, helper, dest, 'source', 'helper', 'dest');
}

function hanoi(plates, source, helper, dest, moves = []) {
  if (plates <= 0) {
    return moves;
  }
  if (plates === 1) {
    moves.push([source, dest]);
  } else {
    hanoi(plates - 1, source, dest, helper, moves);
    moves.push([source, dest]);
    hanoi(plates - 1, helper, source, dest, moves);
  }
  return moves;
}
console.log(hanoiStack(3));

console.log(hanoi(3, 'source', 'helper', 'dest'));