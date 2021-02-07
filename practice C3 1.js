let aaa = {q : 2, w : 4, e : 6, r : 8, t : 10, y : 20};

function first (obj) {
  for (let a in obj) {
    if (obj.hasOwnProperty(a)) {
      console.log(a, obj[a]);
    }
  }
}

first(aaa);