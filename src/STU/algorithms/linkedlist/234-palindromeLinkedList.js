/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */

// 对半分开, 翻转下半部分，比对上半部分和下半部分是否相等
var isPalindrome1 = function(head) {
    if(head == null) return false;
    let slow = head, fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    // 注意区分链表长度为奇数和偶数的情况
    if(fast != null){
        // fast !=null 说明链表长度为奇数
        // fast == null 说明链表长度为偶数
        slow = slow.next;
    }
    let lowHalf = slow, // 下半部分链表
        pre = null;
        cur = lowHalf;
    fast = head;
    // 翻转下半部分链表
    while(cur){
        let nextNode = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextNode;
    }
    // 判断翻转后的下半部分链表和链表的前半部分是否相等
    while(pre){
        if(pre.val != fast.val){
            return false;
        }
        pre = pre.next;
        fast = fast.next;
    }
    return true;
};


// 递归实现
var isPalindrome = function(head){
    let temp = head;
    function check(head){
        if(head == null) return true;
/* 
        if(check(head.next) && head.val == temp.val){
            temp = temp.next;
            return true;
        }else{
            return false;
        }
 */
        let res = check(head.next) && head.val == temp.val;
        temp = temp.next;
        return res;
    }
    return check(head);
}


// @lc code=end

