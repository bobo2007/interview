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

// 普通递归实现 从链表的尾端向前开始处理  时间复杂度O(n)  空间复杂度O(n)
var reverseList1 = function(head){
    if(head == null || head.next == null){
        return head;
    }
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

// 尾递归  只有递没有归，从前往后处理，处理完直接返回递的结果，效率比上一种好很多.
// 尾递归，比线性递归多一个参数，这个参数是上一次调用函数得到的结果；
// 所以，关键点在于，尾递归每次调用都在收集结果，避免了线性递归不收集结果只能依次展开消耗内存的坏处。
var reverseList_tail_recursive = function(head) {
    return reverseListInt(head, null);
}

var reverseListInt = function(head, pre) {
    // 终止条件
    if(head == null) return pre;
    let nextNode = head.next;
    // 翻转
    head.next = pre;
    return reverseListInt(nextNode, head); // head即为上次调用的结果
}

class ListNode {
    constructor(val, next){
        this.next = next == undefined ? next : null;
        this.val = val == undefined ? val : null;
    }
};

// 头插入  每遍历到一个节点，让这个新节点来到反转部分的起始位置
var reverseList = function(head){
    if(head == null || head.next == null) return head;
    let dummy = new ListNode(-1, head);
    let pre = dummy, cur = head;
    while(cur.next != null){
        let nextNode = cur.next;
        cur.next = nextNode.next;
        nextNode.next = pre.next;
        pre.next = nextNode;
    }
    return dummy.next;
}


// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseList;
// @after-stub-for-debug-end