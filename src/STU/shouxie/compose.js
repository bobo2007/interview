/*
 * @Description: compose(func1, func2, func3)  ---> (...args) => func1(func2(func3(...args)))
 * 1.compose的参数是一系列单参数函数构成，执行方向是自右向左的，初始函数一定放到参数的最右面。最右侧函数可接受多个参数，返回的也是一个函数。
 * 2.除了最右侧函数的接受参数，其他函数的接受参数都是上一个函数的返回值，所以初始函数的参数是多个的，而其他函数的接受值是一个。 
 * @Author: yanxbm
 * @Date: 2022-03-05 14:11:46
 * @LastEditors: yanxbm
 * @LastEditTime: 2022-03-21 10:16:09
 */

// 使用reudce
function compose_reduce(...funcs){
	if(funcs.length == 0){
		return args => args;
	}

	if(funcs.length == 1){
		return funcs[0];
	}

	return funcs.reduce((prev, cur) => (...args) => prev(cur(...args)));
}

function sayHello(name, gender){
	return "hi, my name is " + name + ", I am a " + gender;
}

function setAge(str){
	return str + ", I'm 20 and";
}

function setJob(str){
	return str + " I am a programmer!";
}

// const intr = compose(setJob, setAge, sayHello)("bo");
// console.log('introduce: ', intr);

// 使用for循环
function compose_traverse(...funcs){
	if(funcs.length == 0){
		return args => args;
	}
	if(funcs.length == 1){
		return funcs[0];
	}

	return (...args) => {
		let lastIndx = funcs.length - 1;
		// 最右侧函数接收多个参数
		let result = funcs[lastIndx](...args);
		for(lastIndx -= 1 ; lastIndx >= 0; lastIndx--){
			result = funcs[lastIndx](result);
		}
		return result;
	}
}

console.log(compose_traverse(setJob, setAge, sayHello)('bozai', 'boy'));

// pipe与compose的原理相同，只不过函数参数的执行顺序是从左至右
function pipe(...funcs){
	if(funcs.length == 0){
		return args => args;
	}
	if(funcs.length == 1){
		return funcs[0];
	}
	return (...args) => {
		let idx = 0;
		let result = funcs[idx](...args);
		for( idx += 1; idx < funcs.length; idx ++){
			result = funcs[idx](result);
		}
		return result;
	}
}

console.log(pipe(sayHello, setAge, setJob)('yunbao', "girl"));