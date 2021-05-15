/*
 * @Description: 创建一个基于js对象的Stack类
 * @Author: yanxbm
 * @Date: 2021-05-15 15:48:39
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-05-15 16:44:12
 */

/*   
    创建一个Stack类最简单的方式是使用一个数组来储存其元素，使用数组时大部分方法事件复杂度为O(n)，因为需要迭代整个整个数组知道找到
 要找的那个元素，最坏情况下需要迭代数组的所有位置，如果数组有更多元素的话，所需时间更长，另外数组是元素的一个有序集合，为保证元素
 排列有序，它会占用更多内存空间。若能直接获取元素，占用较少的内存空间，且保证所有元素按照我们的需要排列，可使用一个js对象来储存所有的栈元素。
*/
 
// 出了toString方法，我们创建的其他方法复杂度均为O(1),标识我们可以直接找到目标元素并对其操作(push, pop或peek)。
class Stack {
    constructor(){
        this.count = 0; // 记录栈的大小，也能辅助在数据结构中添加删除元素
        this.items = {};
    }

    // 向栈中插入元素
    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    // 从栈中弹出元素
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        // 保存最后一个值
        let result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    // 栈的大小
    size(){
        return this.count;
    }

    // 栈是否为空
    isEmpty(){
        return this.count === 0;
    }

    // 查看栈顶元素
    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }

    // 清空栈
    clear(){
        this.items = {};
        this.count = 0;
    }

    // 数组版本中不需关心toString方法的实现，因为数据结构可直接使用数组已提供的toString方法，
    // 对象版本需要创建一个toString方法来向数组一样打印出栈的内容。
    toString(){
        if(this.isEmpty) return "";
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}