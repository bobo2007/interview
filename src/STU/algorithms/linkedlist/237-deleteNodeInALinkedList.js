/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 给定链表中的一个节点，在链表中删除它，给定节点为非末尾节点。
var deleteNode = function(node) {
    // 无法访问想要删除的节点的前驱节点，因此不能修改前驱节点的 next 指针,
    // 可以将想要删除的节点的值替换为它后面节点的值，然后删除它之后的节点即可.
    node.val = node.next.val;
    node.next = node.next.next;
};
// @lc code=end

