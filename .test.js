function even () {
  let newArr = [];
  for(let num = 1; num <=50; num++) {
    if(num%2 ===0){
      newArr.push(num);
    }
  }
  return newArr;
}
