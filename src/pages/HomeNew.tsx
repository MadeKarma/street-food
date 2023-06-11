import { useEffect, useState } from "react";
import foodApi from "../api/foodApi";
import CardHome from "../component/CardHome";

interface IRandomData {
  idMeal: string;
  strArea: string;
  strCategory: string;
  strMealThumb: string;
  strMeal: string;
}

export default function HomeNew() {
  const [randomData, setRandomData] = useState<IRandomData[]>([]);

  async function getRandomData() {
    try {
      const res = await foodApi("/random.php");
      const data = res.meals;
      setRandomData((prevRes) => [...prevRes, ...data]);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (randomData.length < 11) {
      getRandomData();
    }
  }, [randomData]);
  console.log(randomData);

  return (
    <section className="fs-container py-24 ">
      <div className="flex justify-start py-4">
        <h1 className="font-bold pl-3 text-3xl">most viewed</h1>
      </div>
      <div className="gap-4 grid grid-cols-2 text-third md:grid-cols-4">
        {randomData.map((data) => {
          return (
            <CardHome
              key={data.idMeal}
              area={data.strArea}
              category={data.strCategory}
              direct={`meal/${data.idMeal}`}
              meal={data.strMeal}
              thumb={data.strMealThumb}
            />
          );
        })}
      </div>
    </section>
  );
}
