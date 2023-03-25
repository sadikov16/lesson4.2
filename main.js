function findEkuk(a, b) {
  if (!b) {
    return a;
  }
  return findEkuk(b, a % b);
}
function findEkub(a, b) {
  return (a * b) / findEkub(a, b);
}