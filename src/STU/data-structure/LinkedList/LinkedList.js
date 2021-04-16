/*
 * @Description:  不带虚拟头结点的链表
 * @Author: yanxbm
 * @Date: 2021-04-12 13:43:47
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-04-15 19:07:36
 * @FilePath: /interview/src/STU/data-structure/LinkedList/LinkedList.js
 */
import LinkedListNode from './LinkedListNode';
import Comparator from '../comparator';

export default class LinkedList{
    /**
     * @description: 如果我们要在链表中判断当前节点是否是我们需要的节点，而链表中的节点不仅仅是值类型
     *               还有可能是引用类型，因此需要我们提供一个比较方法，当没有这个方法的时候则使用默认的comparator，因为
     *               它有可能会在其他数据结构中也用到，因此把他提取到comparator文件中。
     * @param {*} comparatorFunction
     */
    constructor(comparatorFunction){
        // 链表是动态的，需要将收尾元素的引用保存下来.
        this.head = null; // LinkedListNode
        this.tail = null; // LinkedListNode
        this.compare = new Comparator(comparatorFunction);
        this.count = 0; // 链表中的元素数量
    }

    /**
     * @description:  向链表头部添加元素
     * @param {*} value
     * @return { LinkedList }
     */
    prepend(value){
        // 新建节点指针指向当前的头结点
        const newNode = new LinkedListNode(value, this.head);
        // 重新设置当前的头结点为新建节点
        this.head = newNode;
        // 如果没有尾部节点，则新建节点为尾部节点
        if(!this.tail){
            this.tail = newNode;
        }
        this.count++;
        return this;
    }

    /**
     * @description: 向链表尾部添加元素
     * @param {*} value
     * @return {LinkedList}
     */
    append(value){
        const newNode = new LinkedListNode(value);
        // 如果还没有头结点，空链表，则将新建节点设置为头节点
        if(!this.head){
            // 首尾节点均为newNode
            this.head = newNode;
            this.tail = newNode;
            this.count++;
            return this;
        }
        // 将新建节点添加到链表尾部
        // 将当前尾部节点的next指向newNode
        this.tail.next = newNode;
        // 将新建节点设置为当前尾部节点
        this.tail = newNode;
        this.count++
        return this;
    }

    /**
     * @description: 返回链表中指定位置的节点, 如果链表中不存在指定节点，返回undefined
     * @param {*} index
     * @return {LinkedListNode}
     */
    getNodeAt(index){   
        // 0 <= index < n
        if(index >=0 && index < this.count){
            let current = this.head;
            for(let i = 0; i < index; i++){
                // 找到索引为index的节点, 从head遍历index次到索引位置。
                // 沿着指针遍历整个列表直到合适的位置（从0开始直到index-1）
                current = current.next;
            }
            return current;
        }
        // 位置越界返回undefined
        return undefined;
    }

    /**
     * @description: 向链表的指定位置插入一个新元素(不带虚拟节点注意首尾位置的插入)
     * @param {*} value
     * @param {*} pos
     * @return {boolean}
     */
    insert(value, index){
        // 检查位置是否越界, 位置从0--n
        if(index >=0 && index <= this.count){
            const newNode = new LinkedListNode(value);
            // 在链表中添加元素关键要找到要添加节点的前一个节点，因此对于索引为0的节点添加元素需要单独处理
            if(index === 0){
                // 在链表第一个位置添加
                const current = this.head;
                newNode.next = current;
                this.head = newNode;
                this.count++;
            }else if(index === this.count){
                // 在链表尾部添加
                this.append(value);
            }else{
                // 在链表中间添加
                const previous = this.getNodeAt(index - 1); // 要插入位置之前的节点
                const current = previous.next;
                newNode.next = current;
                previous.next = newNode;
                this.count++;
            }
            return true;
        }
        return false;
    }

    /**
     * @description: 返回符合条件的元素在链表中的索引, 没有该元素返回-1
     * @param {Object} findParams
     * @param {*} value
     * @param {function} callback   根据callback的条件查找node
     * @return {number}
     */
    indexOf({ value = undefined, callback = undefined }){
        // 空链表直接返回-1
        if(!this.head) return -1;
        let current = this.head;
        for(let i = 0; i< this.count; i++){
            if(callback && callback(current.value)){
                // 如果传入callback，则根据callback搜索符合条件的节点，如果存在返回索引
                return i;
            }
            if(value!==undefined && this.compare.equal(current.value, value)){
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    /**
     * @description: 根据value或自定义条件查找节点
     * @param {*} value
     * @param {*} callback
     * @return {LinkedListNode}
     */
    find({ value = undefined, callback = undefined }){
        // 空链表
        if(!this.head){
            return null;
        }
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

    /**
     * @description: 移除指定位置的节点
     * @param {*} index
     * @return {*}
     */
    removeAt(index){
        if(index >=0 && index < this.count){
            let current = this.head;
            if(index === 0){
                this.head = current.next;
            }else{
                // 找到前一个元素
                let previous = this.getNodeAt(index-1);
                // 找到要移除的元素
                current = previous.next;
                // 将前一个元素的next指向要移除元素的next
                previous.next = current.next;
                // 将被移除的节点从链表当中脱离出来，也就是将移除元素的next指向null
            }
            // 计数减1
            this.count--;
        }
    }

    /**
     * @description: 移除1个或多个元素
     * @param {LinkedListNode} value
     * @return {*}
     */
    remove(value){
        if(!this.head){
            return null;
        }
        // const index = this.indexOf({value});
        // if(index !== -1){
        //     this.removeAt(index);
        // }
        let delNode = null;
        while(this.head && this.compare.equal(this.head.value, value)){
            // 如果值等于头节点则删除头节点
            delNode = this.head;
            this.head = this.head.next;
        }
        let current = this.head;
        while(current.next){
            if(this.compare.equal(current.next.value, value)){
                // 下个节点为要删除的节点
                delNode = current.next;
                // 当前节点指向下下个节点
                current.next = current.next.next;
            }else{
                current = current.next;
            }
        }

        // 如果是最后一个节点，则更新this.tail
        if(this.compare.equal(this.tail.value, value)){
            this.tail = current;
        }
        // 返回删除的节点
        return delNode;
    }

    /**
     * @description: 删除末尾节点
     * @param {*}
     * @return {LinkedListNode}
     */
    removeTail(){
        const deletedTail = this.tail;
        if(this.head === this.tail){
            // 链表只有一个节点
            this.head = null;
            this.tail = null;
            return deletedTail;
        }
        let current = this.head;
        // 遍历到最后第一个节点的前一个节点，并且删除的它的next
        while(current.next){
            if(!current.next.next){
                // 删除前一个节点的next
                current.next = null;
            }else{
                current = current.next;
            }
        }
        this.tail = current;
        return deletedTail;
    }

    /**
     * @description: 是否为空链表
     * @param {*}
     * @return {*}
     */
    isEmpty(){
        return this.size() === 0;
    }

    /**
     * @description: 链表元素个数
     * @param {*}
     * @return {*}
     */
    size(){
        return this.count;
    }

    /**
     * @description: 删除头节点
     * @param {*}
     * @return {*}
     */
    removeHead(){
        if(!this.head){
            return null;
        }
        const deletedHead = this.head;
        if(this.head.next){
            this.head = this.head.next;
        }else{
            // 链表只有一个节点
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    }

    /**
     * @description: 将数组转换为链表
     * @param {*[]} values
     * @return {*}
     */
    fromArray(values){
        values.forEach(value => this.append(value));
        return this;
    }

    /**
     * @description: 将链表转为数组
     * @param {*}
     * @return {*}
     */
    toArray(){
        const nodes = [];
        let current = this.head;
        while(current){
            nodes.push(current);
            current = current.next;
        }
        return nodes;
    }

    /**
     * @description: 将链表的值转换为字符串
     * @param {*} callback
     * @return {*}
     */
    toString(callback){
        let array = this.toArray();
        return array.map(node => node.toString(callback)).toString();
    }

    /**
     * @description: 翻转链表
     * @param {*}
     * @return {LinkedList}
     */
    reverse(){
        let current = this.head,
            nextNode = null,
            prevNode = null;
        while(current){
            // 先缓存当前节点的下个节点
            nextNode = current.next;
            // 将当前节点的next指向前一个节点
            current.next = prevNode;

            // 将前一个节点往后移一个
            prevNode = current;
            // 当前节点向后移一个
            current = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
};

