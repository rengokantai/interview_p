// https://gist.github.com/mkuklis/5294248
function toArray(args) {
  return [].slice.call(args);
}

function autocurry(fn) {
  var len = fn.length;
  var args = [];
  return function next() {
    args = args.concat(toArray(arguments));
    return (args.length >= len) ? 
      fn.apply(this, args.splice(0)) : 
      next;
  }
}

// usage

var add = autocurry(function (a, b, c, d) {
  return a + b + c + d;
});

add(1)(2)(3)(4); // 10

var one = add(1);
one(4, 5, 6); // 16


add(2)(3, 4)(5); // 14
