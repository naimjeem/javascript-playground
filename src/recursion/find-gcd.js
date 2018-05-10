const gcd = (n1, n2) => {
  if (!n2) {
    return n1;
  }
  return gcd(n2, n1 % n2);
}

console.log(gcd(6, 18));
