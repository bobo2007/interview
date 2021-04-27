/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 穿针引线，找到left的前驱节点，right的后继节点。翻转left到right部分以后，再拼接起来. 
// 缺点：遍历一次找到left和right，再递归遍历一遍翻转链表，如果left和right分别是首尾节点会遍历两边链表
// 时间复杂度O(n)
var reverseBetween1 = function(head, left, right) {
    let dummy = new ListNode(-1, head);
    let cur = dummy;
    for(let i=0; i < left-1; i++){
        cur = cur.next;
    }
    let pre = cur; // left的前驱节点
    let leftNode = pre.next;
    // 从left的前驱节点继续移动right-left+1次到right节点
    for(let i=0; i < right-left+1; i++){
        cur = cur.next;
    }
    let rightNode = cur;
    let rightNextNode = rightNode.next;// right的后一个节点
    // 切断连接
    pre.next = null;
    rightNode.next = null;
    let newLeftNode = reverseList(leftNode);
    pre.next = newLeftNode;
    leftNode.next = rightNextNode;
    return dummy.next;
};

// 迭代
function reverseList0(head){
    if(head == null || head.next == null) return head;
    let prev = null,
        cur = head;
    while(cur){
        let nextNode = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextNode;
    }
    return prev;
}
// 递归
function reverseList(head){
    if(head == null || head.next == null) return head;
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}


// 头插法(把头节点之后的节点陆续移到头节点前面)  只遍历一次 时间复杂度O(n)  空间复杂度O(1)
// 整体思想: 在需要反转的区间里，每遍历到一个节点，让这个新节点来到反转部分的起始位置;
// 需要三个指针变量:
// cur: 指向待翻转区域的第一个节点left；  
// nextNode： 永远指向cur的下一个节点，需要移到头部的节点，循环过程中，cur变化以后nextNode会变化；
// pre永远指向待翻转区的第一个节点left的前驱节点，循环过程中不变。
var reverseBetween = function(head, left, right){
    let dummy = new ListNode(-1, head);
    let pre = dummy;
    // 找到left的前驱节点
    for(let i = 0; i < left-1; i++){
        pre = pre.next;
    }
    let cur = pre.next; // 当前节点指向left
    let nextNode;
    // 插入right-left次可以完成插入操作
    for(let i = 0; i < right-left; i++){
        nextNode = cur.next; // 当前节点的后继节点
        // 断开要移动节点的前驱，再断开它的后继
        cur.next = nextNode.next;
        nextNode.next = pre.next;
        pre.next = nextNode;
    }
    return dummy.next;
}
// @lc code=end

