export default async function foodApi(url:string, method="GET") {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1${url}`,
    {
      method: method
    }
    );
  const payload = await response.json();
  return payload;
}
