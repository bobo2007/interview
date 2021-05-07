/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 使用hashMap
var getIntersectionNode1 = function(headA, headB) {
    let set = new Set();
    while(headA){
        if(set.has(headA)) return headA;
        set.add(headA);
        headA = headA.next;
    }
    while(headB){
        if(set.has(headB)) return headB;
        set.add(headB);
        headB = headB.next;
    }
    return null;
};

// 使用双指针
//设链表A的长度为a+c，链表B的长度为b+c，a为链表A不公共部分，b为链表B不公共部分，c为链表A、B的公共部分
//将两个链表连起来，A->B和B->A，长度：a+c+b+c=b+c+a+c，若链表AB相交，则a+c+b与b+c+a就会抵消，它们就会在c处相遇；
//若不相交，则c为nullptr，则a+b=b+a，它们各自移动到尾部循环结束，即返回nullptr
// pA:1->2->3->4->5->6->null->9->5->6->null
// pB:9->5->6->null->1->2->3->4->5->6->null
var getIntersectionNode = function(headA, headB) {
    let pA = headA, pB = headB;
    while(pA != pB){
        // pA,pB 走到头分别指向headB, headA,直至相交。若不相交，则一同到达终点。
        // !!注意此处不能用 pA.next == null, pB.next == null判断,否则没有公共部分时会跳过(pA,pB同事为空) pA == null和 pB == null从而陷入死循环。
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }
    return pA;
}
// @lc code=end

