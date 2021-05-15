/*
 * @Description: 创建一个基于数组的栈
 * @Author: yanxbm
 * @Date: 2021-05-15 15:02:39
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-05-15 15:53:05
 */


// 栈遵从 Last In First Out 原则 
class Stack {
    constructor(){
        this.items = [];
    }
    // 只能用push和pop方法添加和删除栈中的元素，这样栈自然就遵从了LIFO原则。
    
    // 向栈添加元素(注意只添加元素到栈顶，即栈的末尾)
    push(element){
        this.items.push(element);
    }

    // 从栈移除元素，栈遵从LIFO原则，因此移除的是最后添加进去的元素
    pop(){
        return this.items.pop();
    }

    // 查看栈顶元素，可查看栈最后添加的元素是什么
    peek(){
        return this.items[this.items.length - 1];
    }

    // 检查栈是否为空
    isEmpty(){
        return this.items.length === 0;
    }

    // 栈的长度
    size(){
        return this.items.length;
    }

    // 清空栈的元素
    clear(){
        this.items.length = 0;
    }
}