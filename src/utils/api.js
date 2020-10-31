export async function getQueenById() {
  const url = "http://www.nokeynoshade.party/api/queens";
  const response = await fetch(url, {
    method: "GET",
  });
  const randomImage = await response.json();
  return randomImage;
}
