/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  // create a new linked list to hold the merged values
  let mergedList = new ListNode(-1);
  // create a pointer to keep track of the current node in the merged list
  let current = mergedList;

  // iterate through both lists, comparing the values of their nodes
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // append any remaining nodes from list1 or list2 to the merged list
  if (list1) current.next = list1;
  if (list2) current.next = list2;

  // return the head of the merged list (skip the dummy node)
  return mergedList.next;
}
