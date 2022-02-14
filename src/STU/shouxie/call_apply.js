// "use strict";
// 模拟实现call
// 要点： 1. 第一个参数为空或null或undefined以普通函数形式调用(而不是以方法形式)  
// 2. 第一个参数为原始值 
// 3. 如何不覆盖对象属性  
// 4. 执行完后删除方法属性
Function.prototype.myCall = function(){
	// 通过argument获取context参数
	let context = arguments[0];
	// 获取参数
	let params = [...arguments].slice(1);

	// context参数为空 或 为undefined，null   直接调用目标函数.
	if(context == null || context == undefined){
		// 严格模式下context为空时，context指向undefined
		// 非严格模式下context为空时，context指向window或global
		return this(...params);
	}

	let contextType = typeof context;

	// 严格模式和非严格模式下都会将原始类型转换成对应的包装类型
	if(contextType === "number"){
		context = new Number(context);
	}else if(contextType === "string"){
		context = new String(context);
	}else if(contextType == "boolean"){
		context = new Boolean(context);
	}

	// 将目标函数添加到context对象，作为context对象的属性方法调用。
	const fn = Symbol("fn"); // 使用Symbol不覆盖对象的原有属性
	context[fn] = this;
	let result = context[fn](...params);

	// 调用完目标函数后删除方法
	delete context[fn];
	return result;
};

function test(){
	console.log(typeof this, this);
	console.log("call", this.a + this.b);
}

const obj = {
	a: 2,
	b: 3
};

test.myCall(obj); // call  5


// 模拟实现 apply  类似 call 只是接受参数为数组
// 要点： 1.  第二个参数为数组  
// 2. 实际调用时不传第二个参数或第二个参数不是数组
Function.prototype.myApply = function(context, args){
	// 判断第二个参数是否为数组, 非数组默认为空数组
	let params = Array.isArray(args) ? args : [];
	if(context == null || context == undefined){
		return this(...params);
	}
	let contextType = typeof context;
	if(contextType === 'number'){
		context = new Number(context);
	}else if(contextType === 'boolean'){
		context = new Boolean(context);
	}else if(contextType === 'string'){
		context = new String(context);
	}

	let fn = Symbol("fn");
	context[fn] = this;
	let result = context[fn](...params);
	
	delete context[fn];
	return result;
};

function test1(a, b){
	console.log('apply', this.sum + a + b);
}

const obj1 = {
	sum: 2,
};

test1.myApply(obj1, [1,1]); // apply  4
