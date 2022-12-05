let l1 = [0], l2 = [0]; // expect [0]
// let l1 = [2,4,3], l2 = [5,6,4]; expect [7, 0, 8]
let l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]; // expect [8, 9, 9, 9, 0, 0, 0, 1]

var addTwoNumbers = function(l1, l2) {
  let node = [];
  let sum = 0;
  let carry = [];
  
  for(let i = 0; i < l1.length; i++) {
    sum = 0;
    let a = l1[i] ? l1[i] : 0;
    let b = l2[i] ? l2[i] : 0;
    
    sum += (a+b);
    
    if (sum >= 10) {
      sum = sum-10;
      carry[i] = 1;
    }

    if (carry[i-1] > 0) {
      sum += carry[i-1];
      if (sum >= 10) {
        sum = sum-10;
        carry[i] = 1;
      }
    }
    
    node.push(sum);
  }
  if (carry[node.length -1] > 0) {
    node.push(carry[node.length -1]);
  }
  carry = [];
  return node;  
};

console.log(addTwoNumbers(l1, l2))
