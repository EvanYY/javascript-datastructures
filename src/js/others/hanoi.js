// @ts-check
import Stack from '../data-structures/stack';

/**
 * @param {number} plates
 * @param {Stack} source
 * @param {Stack} helper
 * @param {Stack} dest
 * @param {string} sourceName
 * @param {string} helperName
 * @param {string} destName
 * @param {any[]} moves
 */
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

/**
 * @param {any} plates
 */
export function hanoiStack(plates) {
  const source = new Stack();
  const dest = new Stack();
  const helper = new Stack();

  for (let i = plates; i > 0; i--) {
    source.push(i);
  }

  return towerOfHanoi(plates, source, helper, dest, 'source', 'helper', 'dest');
}

/**
 * @param {number} plates
 * @param {any} source
 * @param {any} helper
 * @param {any} dest
 */
export function hanoi(plates, source, helper, dest, moves = []) {
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
