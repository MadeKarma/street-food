import { useParams } from "react-router-dom";
import foodApi from "../api/foodApi";
import { useEffect, useState } from "react";
import CardFood from "../component/CardFood";

interface IMeals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function DetailCategory() {
  const value = useParams();
  const [categoryMeals, setCategoryMeals] = useState<IMeals[]>([]);
  useEffect(() => {
    async function getCategoryMeals() {
      const payload = await foodApi(`/filter.php?c=${value.strCategory}`);
      setCategoryMeals(payload.meals);
    }
    getCategoryMeals();
  }, []);
  console.log(categoryMeals);

  return (
    <section className="container pt-28">
      <div className="grid grid-cols-5 gap-8 py-8">
        {categoryMeals.map((data) => {
          console.log(data);
          return (
            <CardFood
              key={data.idMeal}
              imgSrc={data.strMealThumb}
              placeholder={data.strMeal}
              title={data.strMeal}
            />
          );
        })}
      </div>
    </section>
  );
}
