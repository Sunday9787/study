// for(let i = 0; i < 20; i++) {
//     console.log(i);
// }
// console.log(parseInt(20*Math.random()));

var obj = {
  a: 1,
  b: 2,
  c: {
    d: 1,
    e: {
      f: 1,
      g: {
        h: 1,
        i: {
          j: 1
        }
      }
    }
  }
}

// function mmp(obj) {
//   for (var i in obj) {
//     if (typeof obj[i] !== 'object') {
//       // console.log(i+'    '+obj[i]);
//       console.log(i);
//     }
//     if(typeof obj[i] === 'object') {
//       mmp(obj[i]);
//     }
//   }
// }
// mmp(obj);
walk(obj, []);

function walk(obj, prefix) {
  Object.keys(obj).forEach((it) => {
    const x = obj[it];
    prefix.push(it);

    if (typeof x === 'object') {
      return walk(x, prefix);
    }

    console.log(prefix.join('.'), x);
  });
}