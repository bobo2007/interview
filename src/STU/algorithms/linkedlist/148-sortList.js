/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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

// 要求时间复杂度为nlogn 用归并排序

// 方法1 递归实现链表归并排序  空间复杂度O(logn)
var sortList = function(head) {
    if(head == null || head.next == null) return head;
    // cut环节：找到当前链表中点，从中点切断以便在下次递归cut时，链表片段有正确的边界
    // 使用快慢双指针寻找中点，奇数个节点找到中点，偶数个节点找到中心左边的节点
    let fast = head.next, // !!!注意此处fast指向head.next,而不是head。
        slow = head;
    // 因为fast的初始值指向head.next故判断条件可以是 fast && fast.next; 
    // 如果 fast = head, slow = head; 为了使偶数个节点时slow指向中心左边的节点，判断条件应该是 fast.next && fast.next.next
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    // 保存下半部分的头结点
    let tmp = slow.next;
    // 找到中点slow后，执行slow.next = null,将链表切断;
    slow.next = null;
    // 递归分割链表时，输入当前链表头节点head和中心节点slow的下个节点tmp
    let left = sortList(head);
    let right = sortList(tmp)
};
// @lc code=end

