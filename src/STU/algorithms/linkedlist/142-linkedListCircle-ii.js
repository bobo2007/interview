/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
// 将节点放到集合中
var detectCycle1 = function(head) {
    if(head == null || head.next == null) return null;
    let set = new Set();
    while(head){
        if(set.has(head)) return head;
        set.add(head);
        head = head.next;
    }
    return null;
};


// 使用双指针
var detectCycle = function(head) {
    if(head == null || head.next == null) return null;
    let slow = fast = head;
    while(fast &&fast.next){
        // 注意先让快慢指针往下走直到相遇
        fast = fast.next.next;
        slow = slow.next;
        // 判断是否相遇
        if(fast == slow){
            // 相遇后，慢指针再走a步到环入口位置
            fast = head;
            while(fast != slow){
                fast = fast.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
}
// @lc code=end

