/*
 * @Description: 
 * @Author: yanxbm
 * @Date: 2021-04-16 10:57:12
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-04-16 20:24:53
 * @FilePath: /interview/src/STU/algorithms/linkedlist/02-add_two_numbers.js
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import LinkedListNode from '../../data-structure/LinkedList/LinkedListNode';
/**
 * @description: 
 * @param {ListNode} L1
 * @param {ListNode} L2
 * @return {LinkedList}
 */

export default function addTwoNumbers(L1, L2){
    // 新建虚拟头节点
    let dummy = new LinkedListNode();
    // current 指向头节点
    let current = dummy;
    // 是否有进位
    let hasCarry = false;
    while(L1 || L2 || hasCarry){
        // 同步遍历两个链表并对 每对节点的值相加(如果有进位，加上进位)
        let tmp = ((L1 && L1.value) || 0) + ((L2 && L2.value) || 0) + (hasCarry ? 1 : 0);
        hasCarry = tmp >=10 ? true : false;
        current.next = new LinkedListNode(tmp % 10);
        // 当前指针指向下一个节点
        current = current.next;
        // 继续下一个节点的相加
        if(L1){
            L1 = L1.next;
        }
        if(L2){
            L2 = L2.next;
        }
    }
    // 返回头节点
    return dummy.next;
}
