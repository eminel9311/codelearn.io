function getLargestPrimeNumber(n){
  if(n==1) {
      return 1;
  }
  let k = 2;
  let set = new Set();
  for(let i =2; i<=n; i++) {
      set.add(i);
  }
  while(k * k <= n) {
      for(let i = 2; i<= n; i++) {
      if(k*i <= n){
          set.delete(k*i);
      }
      }
      k++;
  }
  const myArray = Array.from(set);
  let u = [];
  for(let i=0; i<myArray.length-1; i++) {
      if(n%myArray[i] ==0) {
      u.push(myArray[i])
      }
  }
  return u;
}
function greatestCommonPrimeDivisor(a,b){
  const largestPrimeNumber1 = getLargestPrimeNumber(a);
  const largestPrimeNumber2 = getLargestPrimeNumber(b);
  if(largestPrimeNumber1.length == 0 || largestPrimeNumber2.length == 0) {
    return -1
  }else {
    const commonElements = largestPrimeNumber1.filter(element => largestPrimeNumber2.includes(element));
    const largestCommonElement = Math.max(...commonElements);
    return largestCommonElement;
  }
}