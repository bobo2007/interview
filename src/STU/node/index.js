/*
 * @Description: 
 * @Author: yanxbm
 * @Date: 2021-12-02 16:56:23
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-12-06 16:40:20
 */


// setImmediate(() => console.log('this is set immediate 1'));
// setImmediate(() => console.log('this is set immediate 2'));
// setImmediate(() => console.log('this is set immediate 3'));
// setTimeout(() => {
//     console.log('this is set timeout 2');
//     process.nextTick(() => console.log('this is process.nextTick added inside setTimeout'));
// }, 0);

// new Promise((resolve) => {
// 	resolve(1);
// }).then((data) => {
// 	console.log(data);
// })

// setTimeout(() => console.log('this is set timeout 3'), 0);
// setTimeout(() => console.log('this is set timeout 4'), 0);
// setTimeout(() => console.log('this is set timeout 5'), 0);

// process.nextTick(() => {
// 	const end = process.hrtime(start);
// 	console.log('this is process.nextTick' + `${end[0]}s and ${end[1]/Math.pow(10,9)}s`);
// });
// process.nextTick(() => {
//     process.nextTick(console.log.bind(console, 'this is the inner next tick inside next tick'));
// });
// process.nextTick(() => console.log('this is process.nextTick 2'));
// process.nextTick(() => console.log('this is process.nextTick 3'));
// process.nextTick(() => console.log('this is process.nextTick 4'));




// const start = process.hrtime();

// setTimeout(() => {
//     const end = process.hrtime(start);
//     console.log(`timeout callback executed after ${end[0]}s and ${end[1]/Math.pow(10,9)}s`);
// }, 1);




// let count = 0

// const cb = () => {
//     console.log(`Processing setImmediate cb ${++count}`)
//     setImmediate(cb)
// }

// setImmediate(cb)
// setTimeout(() => console.log('setTimeout executed'), 0)

// console.log('Start')




// setTimeout(() => {
// 	console.log('setTimeout');
// }, 1);

// setImmediate(() => {
// 	console.log('setImmediate');
// });



console.log('stack [1]');
setTimeout(() => console.log("macro [2]"), 0);
setTimeout(() => console.log("macro [3]"), 1);

const p = Promise.resolve();
for(let i = 0; i < 3; i++) p.then(() => {
    setTimeout(() => {
        console.log('stack [4]')
        setTimeout(() => console.log("macro [5]"), 0);
        p.then(() => console.log('micro [6]'));
    }, 0);
    console.log("stack [7]");
});

console.log("macro [8]");