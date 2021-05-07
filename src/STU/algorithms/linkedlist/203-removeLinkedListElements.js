/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
// 迭代  使用虚拟头节点
var removeElements1 = function(head, val) {
    let dummy = new ListNode(null, head);
    let cur = dummy;
    while(cur && cur.next){
        if(cur.next.val == val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return dummy.next;
};

// 迭代  删除头节点时单独考虑
var removeElements2 = function(head, val) {
    while(head && head.val == val){
        head = head.next;
    }
    if(head == null) return null;
    let cur = head;
    while(cur.next){
        if(cur.next.val == val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return head;
}

// 递归  
var removeElements = function(head, val) {
    if(head == null) return null;
    head.next = removeElements(head.next, val);
    if(head.val == val) {
        return head.next;
    }else{
        return head;
    }
}
// @lc code=end

