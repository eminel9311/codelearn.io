function maxFraction(numerators, denominators){
  let ms=0;
  for (let i = 1; i < numerators.length; i++) {
    if(numerators[ms] * denominators[i] < denominators[ms] * numerators[i] > 0) {
      ms = i;
    }
  }
  return ms;
}