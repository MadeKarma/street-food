export default async function foodApi(url:string) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1${url}`);
  const payload = await response.json();
  return payload;
}
