/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
// 递归 时间复杂度O(n)，需要对每个节点进行更新指针操作.  空间复杂度O(n)
var swapPairs1 = function(head) {
    if(head == null || head.next == null) return head;
    let newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};

// 迭代  时间复杂度为O(n),n为链表节点数量，需要对每个节点进行更新指针操作
var swapPairs = function(head){
    let dummy = new ListNode(0, head);
    let temp = dummy;
    while(temp.next != null && temp.next.next != null){
        let node1 = temp.next;
        let node2 = temp.next.next;
        temp.next = node2,
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
    }
    return dummy.next;
}
// @lc code=end

