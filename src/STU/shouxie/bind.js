/*
 * @Description: 
 * @Author: yanxbm
 * @Date: 2022-02-14 17:06:59
 * @LastEditors: yanxbm
 * @LastEditTime: 2022-03-08 10:21:47
 */

// 要点  1.返回一个新的函数 2. 新的函数可以预置参数

let obj = {
	a: 123,
	b: {
		test
	}
};

function test(){
	console.log("test");
}

console.log(JSON.parse(JSON.stringify(obj)));
