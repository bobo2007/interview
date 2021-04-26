/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代  复杂度O(n) 为链表节点数，空间复杂度O(1)
var reverseList0 = function(head) {
    let prevNode = null,
        nextNode = null,
        current = head;  // 当前指向head
    while(current){
        // 先缓存当前节点的下个节点
        nextNode = current.next;
        // 当前节点直向前一个节点
        current.next = prevNode;
        // 向后移动指针
        prevNode = current;
        current = nextNode;
    }
    return prevNode;
};

// 递归实现
var reverseList = function(head){

};

// @lc code=end

