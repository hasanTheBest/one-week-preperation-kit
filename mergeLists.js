function mergeLists(head1, head2) {
  // if (head1 === null) return head2;
  // if (head2 === null) return head1;

  let mergedList = null,
    nodesArr = [];

  while (head1 && head2) {
    nodesArr.push(head1.data);
    nodesArr.push(head2.data);

    // traverse one level dipper
    head1 = head1.next;
    head2 = head2.next;
  }

  if (head1 != null) {
    nodesArr.push(head1.data);
  }
  if (head2 != null) {
    nodesArr.push(head2.data);
  }

  // console.log("node arr", nodesArr.sort( (a, b) => a - b ) );

  for (let n of nodesArr.sort((a, b) => a - b)) {
    const node = { data: n, next: null };

    if (mergedList == null) {
      mergedList = node;
    } else {
      let tempList = mergedList;

      while (tempList.next != null) {
        tempList = tempList.next;
      }

      tempList.next = node;
    }
  }

  return mergedList;
}
// console.log(mergeLists mergedList);

console.log(
  mergeLists(
    { data: 1, next: { data: 2, next: { data: 3, next: null } } },
    { data: 3, next: { data: 4, next: null } }
  )
);

// ========== Linked list practice
class Node2 {
  constructor(value) {
    (this.node = value), (this.next = null);
  }
}

const numbers = [1, 2, 3];
let linkedList = null;

for (let num of numbers) {
  let node = new Node2(num);

  if (linkedList === null) {
    linkedList = node;
  } else {
    // console.log("first", linkedList);
    let temRoot = linkedList;
    while (temRoot.next != null) {
      temRoot = temRoot.next;
    }
    temRoot.next = node;
  }
}
