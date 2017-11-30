/**
 * @Author: Edward <Edward>
 * @Date:   2017-10-30T23:34:38+08:00
 * @Email:  809537981@qq.com
 * @Last modified by:   Edward
 * @Last modified time: 2017-11-05T16:01:47+08:00
 */



// for(let i = 0; i < 20; i++) {
//     console.log(i);
// }
console.log(parseInt(20*Math.random()));
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
};
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
// $(this).on('click',function () {
//     console.log(this);
// });
let type = 'json';
switch(type) {
    case 'json': console.log('yes');
}
