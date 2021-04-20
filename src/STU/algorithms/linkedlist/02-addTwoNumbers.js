/*
 * @Description: 
 * @Author: yanxbm
 * @Date: 2021-04-20 13:51:37
 * @LastEditors: yanxbm
 * @LastEditTime: 2021-04-20 20:01:32
 * @FilePath: /interview/src/STU/algorithms/linkedlist/02-addTwoNumbers.js
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val = null, next = null){
     this.val = val;
     this.next = next;
 }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(L1, L2) {
    // 新建虚拟头节点
    let dummy = new ListNode();
    // current 指向头节点
    let current = dummy;
    // 是否有进位
    let hasCarry = false;
    while(L1 || L2 || hasCarry){
        // 同步遍历两个链表并对 每对节点的值相加(如果有进位，加上进位)
        let tmp = ((L1 && L1.val) || 0) + ((L2 && L2.val) || 0) + (hasCarry ? 1 : 0);
        hasCarry = tmp >=10 ? true : false;
        current.next = new ListNode(tmp % 10);
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
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end