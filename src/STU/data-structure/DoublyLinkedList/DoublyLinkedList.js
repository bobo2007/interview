/*
 * @Description: 双向链表
 * @Author: yanxbm
 * @Date: 2021-04-15 13:39:40
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-04-15 17:38:26
 * @FilePath: /interview/src/STU/data-structure/DoublyLinkedList/DoublyLinkedList.js
 */

import Comparator from '../comparator/index';
import DoublyLinkedListNode from './DoublyLinkedListNode';

export default class DoublyLinkedList{
    constructor(compareFunction){
        this.head = null;
        this.tail = null;
        this.compare = new Comparator(compareFunction);
        this.count = 0;
    }

    // 添加头节点
    prepend(value){
        // 创建一个节点作为头节点
        const newNode = new DoublyLinkedListNode(value, this.head);
        if(this.head){
            // 头节点存在(非空链表)就设置当前头节点的previous指向新建节点
            this.head.previous = newNode; 
        }
        // 重置this.head
        this.head = newNode;
        // 如果尾部节点还不存在就将新建节点赋给尾部节点
        if(!this.tail){
            this.tail = newNode
        }
        this.count++;
        return this;
    }

    // 添加尾结点
    append(value){
        const newNode = new DoublyLinkedListNode(value);
        if(!this.head){
            // 空链表
            this.head = newNode;
            this.tail = newNode;
            this.count++;
            return this;
        }
        // 链表非空直接更新尾结点的next和新建节点的previous,并且更新this.tail。
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.count++;
        return this;
    }

    // 向任意索引位置插入新节点
    insert(value, index){
        if( index >=0 && index <= this.count){
            const newNode = new DoublyLinkedListNode(value);
            let current = this.head;
            if(index === 0){
                // 在表头插入新节点
                if(!this.head){
                    // 空链表
                    this.head = newNode;
                    this.tail = newNode;
                }else{
                    newNode.next = this.head;
                    current.previous = newNode;
                    this.head = newNode;
                }
            }else if(index === this.count){
                // 在表尾插入新节点
                current = this.tail;
                current.next = newNode;
                newNode.previous = current;
                this.tail = newNode;
            }else{
                // 在中间插入新节点, 找到索引节点，并在其之前插入新节点
                for(let i = 0; i < index; i++){
                    // 初始为this.head,索引为0, 执行index次后,索引为index。即定位到索引位置。
                    current = current.next;
                }
                current.previous.next = newNode;
                newNode.previous = current.previous;
                newNode.next = current;
                current.previous = newNode;
            }
            this.count++;
            return true;
        }
        return false;
    }

    // 根据值或callback查找节点
    find({value = undefined, callback = undefined}){
        let current = this.head;
        while(current){
            if(callback && callback(current.value)){
                return current;
            }
            if(value !== undefined && this.compare.equal(current.value, value)){
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // 删除节点数据
    remove(value){
        // 空链表
        if(!this.head) return null;
        let deletedNode = null;
        let current = this.head;
        while(current){
            if(this.compare.equal(current.value, value)){
                deletedNode = current;
                if(deletedNode === this.head){
                    // 值等于头节点，从头节点开始删除
                    this.head = this.head.next;
                    if(this.head){
                        // 判断是否为空,非空设置它的previous
                        this.head.previous = null;
                    }
                    // this.head为空
                    if(deletedNode === this.tail){
                        // 判断链表是否只有一个元素
                        this.tail = null;
                    }
                }else if(deletedNode === this.tail){
                    // 值等于尾结点，删除尾结点
                    this.tail = this.tail.previous;
                    this.tail.next = null;
                }else{
                    // 值等于中间节点，删除中间
                    const previousNode = current.previous;
                    const nextNode = current.next;
                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
            }
            current = current.next;
        }
        return deletedNode;
    }

    // 删除头节点
    removeHead(){
        // 空链表返回null
        if(!this.head) return null;
        const deletedHead = this.head;
        if(this.head.next){
            // 头节点不是尾结点
            this.head = this.head.next;
            this.head.previous = null;
        }else{
            // 头节点等于尾结点，链表长度为1
            this.head = null;
            this.tail = null;
        }
        this.count--;
        // 返回删除的节点
        return deletedHead;
    }

    // 删除尾节点
    removeTail(){
        // 空链表返回null
        if(!this.tail) return null;
        const deletedTail = this.tail;
        if(this.head === this.tail){
            // 链表只有一个节点
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.previous;
            this.tail.next = null;
        }
        this.count--;
        return deletedTail;
    }

    // 将数组转为双向链表
    fromArray(arr){
       arr.forEach(item => this.append(item));
       return this;
    }

    // 转换为数组
    toArray(){
        let current = this.head;
        let arr = [];
        while(current){
            arr.push(current);
            current = current.next;
        }
        return arr;
    }

    // 转换为字符串
    toString(){
        return this.toArray().map(node => node.toString()).toString();
    }

}


