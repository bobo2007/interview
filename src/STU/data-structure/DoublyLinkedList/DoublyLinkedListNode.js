/*
 * @Description: 
 * @Author: yanxbm
 * @Date: 2021-04-15 13:39:53
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-04-15 13:43:04
 * @FilePath: /interview/src/STU/data-structure/DoublyLinkedList/DoublyLinkedListNode.js
 */

export default class DoublyLinkedListNode{
    constructor(value, next = null, previous = null){
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
    toString(callback){
        // 传入方法将链表数据转为字符串
        return callback ? callback(this.value) : `${this.value}`;
    }
}