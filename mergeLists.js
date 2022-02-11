class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeLists(head1, head2) {
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  let mergedList = null;
  // both list have data
  // let tempH1 = head1, tempH2 = head2;

  while (head1 && head2) {
    let h1 = head1.data;
    let h2 = head2.data;

    console.log("h1", h1);
    console.log("h2", h2);

    const h1Node = new Node(h1);
    const h2Node = new Node(h2);

    if (mergedList === null) {
      if (h1 < h2) {
        mergedList = h1Node;
        mergedList.next = h2Node;
      } else {
        mergedList = h2Node;
        mergedList.next = h1Node;
      }
    }

    // if (h1 > h2) {
    //   let node = new Node(h2);
    //   if (mergedList === null) {
    //     mergedList = node;
    //   } else {
    //     tempList = mergedList;
    //     while (tempList.next != null) {
    //       tempList = tempList.next;
    //     }

    //     mergedList = tempList;
    //   }
    // } else {
    //   let node = new Node(h1);

    //   if (mergedList === null) {
    //     mergedList = node;
    //   } else {
    //     tempList = mergedList;
    //     while (tempList.next != null) {
    //       tempList = tempList.next;
    //     }

    //     mergedList = node;
    //   }
    // }

    // traverse one level dipper
    head1 = head1.next;
    head2 = head2.next;

    console.log("head1", head1);
    console.log("head2", head2);
  }

  console.log("mergedList", mergedList);
}

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
