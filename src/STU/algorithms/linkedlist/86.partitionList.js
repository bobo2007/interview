/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
// 拼接两个链表  <目标值放入链表a, >=目标值放入链表b  时间复杂度O(n)  空间复杂度O(1)
var partition0 = function(head, x) {
    if(head == null || head.next == null) return head;
    let aCur = aHead = new ListNode();// 小于x的链表
    let bCur = bHead = new ListNode();// 大于x的链表
    while(head){
        // if(head.val < x){
        //     // 创建小于x的链表
        //     aCur.next = head;
        //     aCur = aCur.next;
        // }else{
        //     // 创建大于等于x的链表
        //     bCur.next = head;
        //     bCur = bCur.next;
        // }
        // 简写
        head.val < x ? aCur = aCur.next = head : bCur = bCur.next = head;
        head = head.next;
    }
    aCur.next = bHead.next;
    bCur.next = null;
    return aHead.next;
};


// 拼接数组， <目标值放入数组a, >=目标值放入数组b
var partition = function(head, x){
    if(head == null || head.next == null) return head;
    let a = [], b= [], i = 0, j = 0;
    while(head){
        head.val < x ? a.push(head) : b.push(head);
        head = head.next;
    }
    // 注意两种特别情况
    if(a.length == 0) return b[0];
    if(b.length == 0) return a[0];
    // a,b两个数组分别整理成链表
    while(++i <= a.length){
        a[i - 1].next = a[i] || b[0]; // a链表到头后接上b链表的头节点
    }
    while(++j <= b.length){
        b[j - 1].next = b[j] || null;  // b链表到头后尾结点的后继设置为null
    }
    return a[0];
}


// 双指针实现 慢指针在小于目标值时移动，快指针始终移动
var partition = function(head,x){
    if(head == null || head.next == null) return head;
    let dummy = slow = new ListNode(0, head);  // 慢指针指向dummy,方便获取慢指针的前驱节点以插入节点
    let fast = head.next; // 快指针指向头节点的下个节点
    while(fast){
        // head始终指向fast的前驱节点，方便删除节点.
        if(slow.next.val < x){
            // 慢指针只有在小于目标值时移动
            slow = slow.next;
            // head指针指向fast，始终指向fast的前驱节点
            head = fast;
        }else if(fast.val < x){
            // 当慢指针大于目标值，快指针小于目标值时，移动快指针节点到慢指针节点前
            head.next = fast.next;
            fast.next = slow.next;
            slow.next = fast;
            slow = fast;
        }else{
            // 快慢指针位置都大于目标值,节点位置不变，head指针跟随fast下移
            head = fast;
        }
        // 快指针始终移动
        fast = head.next;
    }
    return dummy.next;
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = partition;
// @after-stub-for-debug-end