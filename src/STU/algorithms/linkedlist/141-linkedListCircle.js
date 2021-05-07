/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
// 逐个删除法, 最后如果head == head.next 则存在环，否则不存在
var hasCycle1 = function(head) {
    if(head == null || head.next == null) return false;
    if(head == head.next) return true;
    let nextNode = head.next;
    head.next = head;
    return hasCycle(nextNode);
};

// 双指针 慢指针每次走一步，快指针每次走两步，两者相遇表示有环，如果有一个为空表示没有环
var hasCycle2 = function(head) {
    if(head == null || head.next == null) return false;
    let slow = fast = head;
    while(fast){
        if(fast.next == null || fast.next.next == null) return false;
        fast = fast.next.next;
        slow = slow.next;
        if(fast == slow){
            return true;
        }
    }
}

// 将节点存放到集合中
var hasCycle3 = function(head) {
    let set = new Set();
    while(head){
        // 判断set中是否已存在节点
        if(set.has(head)) return true;
        // 注意此处是将节点存放到set中
        set.add(head);
        head = head.next;
    }
    return false;
}

// 先翻转链表再判断, 如果存在环则翻转前和翻转后的头节点都是同一个
var reverseList = function(head) {
    if(head == null || head.next == null) return head;
    let pre = null;
        cur = head;
    while(cur){
        let nextNode = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextNode;
    }
    return pre;
}
var hasCycle = function(head) {
    let reverse = reverseList(head);
    if(reverse != null && reverse.next != null && reverse == head){
        return true;
    }
    return false;
}

// @lc code=end

