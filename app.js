function dot_product(v1, v2) {
  let resultprod = 0;
  orthogonal = String;
  for (let i = 0; i < 3; i++) {
    resultprod += v1[i] * v2[i];
    if (resultprod == 0) {
      orthogonal = "the vectors are orthogonal,good";
    } else {
      orthogonal = "the vectors are not orthogonal,sorry";
    }
  }
  return resultprod;
}
console.log(dot_product([3, -3, 0], [3, 3, 0]), orthogonal);
