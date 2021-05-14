/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
// 方法1  使用slow，fast 快慢指针实现(分别指向奇数和偶数)
var oddEvenList1 = function(head) {
    if(head == null || head.next == null) return head;
    let dummy = new ListNode(null,head);
    let slow = head; 
    let fast = head.next;
    let evenHead = head.next;
    while(slow.next && slow.next.next){
        // 奇数
        let oddNext = slow.next.next;
        slow.next = oddNext;
        slow = oddNext;
        // 偶数
        let evenNext = fast.next.next;
        fast.next = evenNext;
        fast = evenNext;
    }
    slow.next = evenHead;
    return dummy.next;
};

// 方法2
var oddEvenList = function(head) {
    if(head == null || head.next == null) return head;
    let evenHead = head.next; // 保存偶数链表的头节点
    let odd = head, even = evenHead;
    while(even && even.next){
        odd.next = even.next; // 偶数节点的下一个即为奇数节点，所以将奇数节点的next指向它。
        odd = odd.next; // odd 指针后移，指向奇数链表的最后
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}

// @lc code=end

