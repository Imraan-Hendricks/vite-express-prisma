export async function fetchTest() {
  const res = await fetch('/api/test');
  if (!res.ok) throw res.json();
  const data = res.json();
  return data;
}
