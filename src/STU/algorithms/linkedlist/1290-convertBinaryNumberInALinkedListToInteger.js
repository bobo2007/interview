/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
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
 * @return {number}
 */
// 直接遍历
var getDecimalValue1 = function(head) {
    let ans = 0, cur = head;
    while(cur){
        // ans = ans * 2 + cur.val;
        // 或者通过左移一位实现*2
        ans = (ans << 1) + cur.val;
        cur = cur.next;
    }
    return ans;
};


// 递归实现  通过二进制转十进制方法计算
var getDecimalValue = function(head) {

    let count = 0;
    function calculate(head){
        if(head == null) return 0;
        let ans = calculate(head.next) + Math.pow(2, count) * head.val;
        count++;
        return ans;
    }
    return calculate(head);
}

// @lc code=end

