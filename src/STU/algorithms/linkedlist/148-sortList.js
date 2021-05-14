/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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

// 解析：
// 对链表做归并排序可以通过修改引用来更改节点位置，因此不需要向数组一样开辟额外的O(n)空间，但是只要是递归就需要消耗log(n)的空间复杂度，要达到O(1)空间复杂度的目标，得使用迭代法。
// 对数组做归并排序需要的空间复杂度为O(n)-->新开辟数组O(n)+递归调用函数O(logn);

// 要求时间复杂度为nlogn 空间复杂度O(1),用归并排序

// 方法1 递归实现链表归并排序,自顶向下归并排序  空间复杂度O(logn)
var sortList = function(head) {
    if(head == null || head.next == null) return head;
    // cut环节：找到当前链表中点，从中点切断以便在下次递归cut时，链表片段有正确的边界,因为要切断链表所以需要维护一个前驱节点

    // 使用快慢双指针寻找中点，奇数个节点找到中点，偶数个节点找到中心左边的节点
    let fast = head.next, // !!!注意此处fast指向head.next,而不是head。
        slow = head;
    // 因为fast的初始值指向head.next故判断条件可以是 fast && fast.next; 
    // 如果 fast = head, slow = head; 为了使偶数个节点时slow指向中心左边的节点，判断条件应该是 fast.next && fast.next.next
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    // 保存下半部分的头结点
    let tmp = slow.next;
    // 找到中点slow后，执行slow.next = null,将链表切断;
    slow.next = null; // 断链操作
    // 递归分割链表时，输入当前链表头节点head和中心节点slow的下个节点tmp
    let left = sortList(head);
    let right = sortList(tmp);
    let dummy = new ListNode(null);
    let cur = dummy;
    // 合并 merge环节，将两个排序链表合并，转化为一个排序链表
    // 通过迭代实现合并left和right两个有序链表链表
/*     while(left && right){
        if(left.val < right.val){
            cur.next = left;
            left = left.next;
        }else{
            cur.next = right;
            right = right.next;
        }
        cur = cur.next;
    }
    cur.next = left == null ? right : left;
    return dummy.next; */

    // 递归实现合并两个有序链表
    return mergeTwoList(left, right);
};

// 递归实现合并两个有序链表
var mergeTwoList = function(l1, l2){
    if(l1 == null){
        return l2;
    }else if(l2 == null){
        return l1;
    }else if(l1.val < l2.val){
        let small = mergeTwoList(l1.next, l2);
        l1.next = small;
        return l1;
    }else{
        let small = mergeTwoList(l1, l2.next);
        l2.next = small;
        return l2;
    }
} 


// 方法2 自底向上归并排序 时间复杂度O(nlogn) 空间复杂度O(1)
var sortList = function(head) {
    let len = getLength(head); // 计算长度
    let dummy = new ListNode(null, head);
    // 依次将链表分成n个长度为size的块,当 size == len 时合并排序工作完成
    for(let size = 1; size < len; size *= 2){
        // 每次变换步长，pre指向链表头的前驱，cur指向链表头
        let pre = dummy;
        let cur = dummy.next;
        while(cur){
            let h1 = cur; // 第一块链表头 （第二次循环后cur为剩余部分头，不断往后把链表按照步长分成一块一块）
            let h2 = split(h1, size); // 获取第二块的链表头
            cur = split(h2, size); // cur指向下一块链表的头
            let temp = mergeTwoList(h1, h2); // 将一二两部分合并排序
            pre.next = temp; // pre指向已排好序部分
            // 向下移动pre，使pre指针移到已排好序部分的末尾, 方便将两两合并后的链表连接起来。
            while(pre.next){
                pre = pre.next; 
            }
        }
    }
    return dummy.next;
}

var split = function(head, size){
    // 断链操作，返回第二部分的头节点
    if(head == null) return null;
    let cur = head;
    // cur 走size-1步到块链表表尾
    for(let i = 1; i < size && cur.next; i++ ){
        cur = cur.next;
    }
    // 找到下一个块链表的表头
    let right = cur.next;
    cur.next = null; // 切断链表
    return right;
}

var getLength = function(head){
    let len = 0;
    while(head){
        len++
        head = head.next;
    }
    return len;
}
// @lc code=end

