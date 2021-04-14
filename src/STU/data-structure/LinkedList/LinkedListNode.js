/*
 * @Description: 
 * @Author: yanxbm
 * @Date: 2021-04-12 13:44:18
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-04-12 15:31:23
 * @FilePath: /stu/data-structure/LinkedList/LinkedListNode.js
 */

export default class LinkedListNode {
    constructor(value, next = null){
        // 要加入链表元素的值
        this.value = value;
        // 指向链表下一个元素的指针
        this.next = next;
    }
    
    toString(callback){
        return callback ? callback(this.value) : `${this.value}`;
    }
}