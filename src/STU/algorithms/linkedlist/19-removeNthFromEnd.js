/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function(head, n) {
    if (head.next === null) return null;
    let count = 1;
    // 慢指针指向头节点
    let ptrBeforeN = head;
    // 快指针指向第二个节点
    let el = head.next;
    // 为了慢指针指向前驱结点，判断条件执行length-1次
    while (el !== null) {
      // 采用快慢指针实现, 慢指针向下更新(len-n)次到达要删除的节点位置.
      //  为方便删除目标节点，需要慢指针指向目标节点的前驱节点
      if (count > n) ptrBeforeN = ptrBeforeN.next; // 移动length-n-1次到达前驱节点
      el = el.next;
      count++;  // 加了length-1次, 最终count = length
    }
  
    // 若删除的是倒数最后一个节点(头节点), 返回头节点的下一个节点
    if (count === n) return head.next;
  
    // 删除目标节点
    ptrBeforeN.next = ptrBeforeN.next.next;
    return head;
};

function ListNode(value = null, next = null){
    this.value = value;
    this.next = next;
}

var removeNthFromEnd = function(head, n){
    if(!head) return null;
    let dummy = new ListNode(0, head);
    let slow = dummy,
        fast = head;
    let count = 1;
    while(fast !== null){
        if(count > n) slow = slow.next;
        fast = fast.next;
        count++;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end