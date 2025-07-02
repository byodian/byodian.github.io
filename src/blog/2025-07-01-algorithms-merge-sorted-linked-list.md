---
title: LeetCode - 合并有序链表
description: "LeetCode: Merge Sorted Linked List"
created: 2025-07-02T14:24:04.246Z
draft: false
tags:
    - LeetCode
    - Algorithm
slug: leetcode-merge-sorted-linked-list
---

## 题目
You are given the heads of two **sorted linked lists** list1 and list2.

**Merge the two lists into one sorted list.** The list should be made by splicing together the nodes of the first two lists.  Return the head of the merged linked list.

Example:
```
input: list1 = [1,2,4], list = [1,3,5]
output: [1,2,3,4,5]

input: list1 = [], list2 = [1]
outpu: [1]

input: list1 = [1], list2 = []
outpu: [1]
```

## 解题思路
1. 初始化两个指针，分别指向两个链表或列表的开头
2. 比较两个指针所指元素的值：
    - 如果 list.val < list2.val，将 list1 当前节点加入结果集，list1 指针向后移动；
    - 否则，将 list2 当前节点加入结果集，list2指针向后移动。
3. 重复上述过程直到至少一个链表或列表为空。
4. 最后，如果还有一个链表没有处理完，直接将其剩余部分拼接到结果集。
5. 返回合并后的链表或列表。

## 实现

Java 版本

```java
class Solution {
    public static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }

    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null && list2 == null) {
            return null;
        } else if (list1 == null) {
            return list2;
        } else if (list2 == null) {
            return list1;
        }

        ListNode dummy = new ListNode();
        ListNode current = dummy;
        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        if (list1 != null) {
            current.next = list1;
        }

        if (list2 != null) {
            current.next = list2;
        }

        return dummy.next;
    }
}
```

## 技巧

**使用虚拟结点（`dummy` node）保存合并后的链表，可以减少边界处理逻辑，让代码结构更清晰。**

下面是不使用虚拟结点的版本，逻辑上必须额外判断第一次赋值的情况，即初始化合并链表的头结点：

```java
public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    if (list1 == null && list2 == null) {
        return null;
    } else if (list1 == null) {
        return list2;
    } else if (list2 == null) {
        return list1;
    }

    ListNode current = null;
    ListNode head = null;

    // 初始化头结点
    if (list1.val < list2.val) {
        head = list1;
        list1 = list1.next;
    } else {
        head = list2;
        list2 = list2.next;
    }
    current = head;

    // 合并剩余结点
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 != null) {
        current.next = list1;
    }

    if (list2 != null) {
        current.next = list2;
    }

    return head;
}
```