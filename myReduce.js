function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function reduce(func,acc,arr){
  for(let i=0;i<arr.length;i++){
      var temp = [arr[i],acc];
      acc = func(...temp);
  }
  return acc;
}

var curriedReduce = curry(reduce)
function sum(x, y){
    return x + y
}

curriedReduce(sum)(0)([1,2,3,4])

//Implementing map() using reduce()

function map(arr, func){
  return reduce((item, acc) => [...acc, func(item)], [], arr)
}

var curriedMap = curry(map)

function double(x){
  return 2 * x
}

curriedMap([1,2,3,4], double)

//Implementing filter() using reduce()

function filter(arr, func){
  return reduce((item, acc) => func(item) ? [...acc, item] : acc, [], arr)
}

var curriedFilter = curry(filter)

function even(x){
  return (x % 2 === 0);
}

curriedFilter([1,2,3,4], even)

//Implementing flat() using reduce()

function flat(arr){
  return reduce((item, acc) => acc.concat(item), [], arr)
}

var curriedFlat = curry(flat)

curriedFlat([1, 2, [3, 4]])

