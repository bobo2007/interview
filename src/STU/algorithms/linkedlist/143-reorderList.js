/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 递归
function ListNode(val, node){
    this.next = node;
    this.val = val;
}
var reorderList1 = function(head) {
    let temp = head;
    let cur = head;
    let dummy = new ListNode(null, head);
    let length = 0, half = 0;
    function reorderListHelper(temp){
        if(temp == null) return;
        length ++; // 记录链表长度
        half = length>>1; // 计算长度的一半
        reorderListHelper(temp.next);
        if(length <= half){
            // 长度小于等于链表总长度的一半时，不做任何操作。
            return;
        }else if(cur == temp || cur.next == temp){
            // cur == temp 链表长度为奇数时， cur.next == temp 链表长度为偶数时
            // 满足cur == temp或 cur.next == temp 时将末尾节点的后继节点指向null。
            temp.next = null;
            // 长度减一
            length--;
            return;
        }
        let nextNode = cur.next;
        cur.next = temp;
        temp.next = nextNode;
        cur = nextNode;
        length--;
    }
    reorderListHelper(temp);
    return dummy.next;
};

// 分成上下两部分, 后半部分反转，然后再组合
var reorderList = function(head) {
    let slow = head, fast = head;
    // 注意为了找到下半部分的前驱节点，判断条件为 fast.next && fast.next.next
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    let low = slow.next;
    // 翻转下半部分
    // low = reverseList(low);
    low = reverseList(null, low);
    // 注意从链表中间截断，否则产生环
    slow.next = null;
    fast = head;

    while(low){
        let nextNode = head.next, lowNext = low.next;
        head.next = low;
        low.next = nextNode;
        head = nextNode;
        low = lowNext;
    }
    return fast;
}

// 正常的递归实现
var reverseList1 = function(head) {
    if(head == null || head.next == null) return head;
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}

// 尾递归实现
var reverseList = function(head, newHead) {
    // 下个节点为null，已遍历完成，返回它的上一个节点。
    if(newHead == null) return head;
    let nextNode = newHead.next;
    newHead.next = head;
    return reverseList(newHead, nextNode);
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = reorderList;
// @after-stub-for-debug-end