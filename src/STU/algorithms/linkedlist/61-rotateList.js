/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
// 方法1 求得链表长度， 先闭合为环， 然后在倒数第k个节点的前驱节点处断开.  时间复杂度O(n),最坏情况下遍历两边，空间复杂度O(1)
var rotateRight1 = function(head, k) {
    if(head == null || head.next == null || k == 0) return head;
    let cur = head;
    let len = 1;  
    // 计算长度, 遍历完cur指向最后一个节点, 注意len的初始值为1
    while(cur.next){
        cur = cur.next;
        len++;
    }
    // 将链表闭合为环
    cur.next = head;
    // 找到倒数第k个节点的前驱节点pre
    // 计算cur从当前位置到pre要移动的步数
    let steps = len - k%len;
    // 找到倒数第k+1个节点,再遍历一遍
    while(steps--){
        cur = cur.next;
    }
    // 找到倒数第k个节点，将其设置为头节点
    head = cur.next;
    // 在前驱节点位置将链表断开
    cur.next = null;
    return head;
};

// 方法2  快慢指针， 快指针走完后，此时慢指针的下一个节点就是新的头节点，慢指针指向的是新的尾结点。最后把快指针下的节点指向原来的头节点即可。
var rotateRight = function(head, k){
    if(head == null || head.next == null || k == 0) return head;
    let len = 0,
        slow = head,
        fast = head,
        cur = head;
    // 先计算长度
    while(cur){
        cur = cur.next;
        len++;
    }
    // 移动步数
    let steps = k%len;
    // 将fast指向第k%len个节点
    for(let i=0; i< steps; i++){
        fast = fast.next;
    }
    // fast走完后，slow指向新的头节点的前驱节点
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    fast.next = head;
    head = slow.next;
    slow.next = null;
    return head;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = rotateRight;
// @after-stub-for-debug-end