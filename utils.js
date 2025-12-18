export function getRiskColor(score) {
  if (score > 60) return "red";
  if (score > 30) return "orange";
  return "green";
}
