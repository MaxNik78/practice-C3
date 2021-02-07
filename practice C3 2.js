let aaa = 'qwerty';
let bbb = {qwerty : 2, w : 4, e : 6, r : 8, t : 10, y : 20};
let ccc = {q : 2, w : 4, e : 6, r : 8, t : 10, y : 20};

function second (str, obj) {
  return (str in obj);
}

let ddd = second (aaa, bbb);
console.log(ddd);

let eee = second (aaa, ccc);
console.log(eee);