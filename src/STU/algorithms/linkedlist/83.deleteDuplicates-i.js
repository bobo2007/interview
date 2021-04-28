/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    if(head == null || head.next == null) return head;
    // 因为链表是已排序的，所以重复元素位置都是连续的,只需一次遍历即可删除重复元素
    // cur指向头节点，随后开始遍历，若当前cur.val 与cur.next.val相等，就将cur.next删除。
    let dummy = new ListNode(-1, head);
    let cur = head;
    while(cur.next){
        if(cur.val == cur.next.val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
    }
    return dummy.next;
};
// @lc code=end

