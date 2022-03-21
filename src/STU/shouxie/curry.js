/*
 * @Description: 函数柯里化, 柯里化是 f(a, b, c) --> f(a)(b)(c), 函数参数个数固定，js中高级实现,可以多个参数调用。
 * @Author: yanxbm
 * @Date: 2022-03-05 11:10:45
 * @LastEditors: yanxbm
 * @LastEditTime: 2022-03-05 15:43:05
 */

function curry(func){
	return function curried(...args){
		if(args.length >= func.length){
			return func.apply(this, args);
		}else{
			return function (...args2){
				// 参数没有达到长度继续柯里化
				return curried.apply(this, args.concat(args2));
			}
		}
	}
}

function test(a, b, c){
	return a + b + c;
}

// 柯里化test
const curried = curry(test);

// 参数长度不满足继续柯里化
console.log(curried(1));
console.log(curried(1, 2));

// 参数长度满足返回值
console.log(curried(1)(2)(3)); // 6
console.log(curried(1,2)(3));	// 6
console.log(curried(1)(2,3));	// 6