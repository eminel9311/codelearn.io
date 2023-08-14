function calculator(n) {
  let sum = 0;
  if(n==1) return sum;
  let i = 2;
  while(i <= n) {
      if(n % i ==0) {
          n = n /i;
          sum += i;
      }else {
          i++;
      }
  }
  return sum;
}
function factorSum(n){
 while (n != calculator(n)) {
     console.log(calculator(n))
     n = calculator(n)
 };
 return n
}