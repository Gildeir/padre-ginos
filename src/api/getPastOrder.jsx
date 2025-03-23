export default async function getPastOrder(order) {
  const response = await fetch(`http://localhost:3000/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
