class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const getLeafCount = node => {
  if (node === null) return 0
  if (node.left === null && node.right === null) return 1
  return getLeafCount(node.left) + getLeafCount(node.right) + 1
}

/*
let root = new Node(40);
let node20 = new Node(20);
let node10 = new Node(10);
let node30 = new Node(30);
let node60 = new Node(60);
let node50 = new Node(50);
let node70 = new Node(70);

root.left = node20;
root.right = node60;
  
node20.left = node10;
node20.right = node30;
  
node60.left = node50;
node60.right = node70;

          40
      20      60
    10  30   50 70

console.log('number of leaves -- ', getLeafCount(root)) // 7

*/