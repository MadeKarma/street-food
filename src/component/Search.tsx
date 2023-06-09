import foodApi from "../api/foodApi";
import { useEffect, useState } from "react";

interface IMeals {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function Search() {
  const [categoryMeals, setCategoryMeals] = useState<IMeals[]>([]);
  async function getCategoryMeals() {
    const payload = await foodApi("/filter.php?c=Beef");
    setCategoryMeals(payload.meals);
  }
  useEffect(() => {
    getCategoryMeals();
  }, []);
  console.log(categoryMeals);
  return (
    <div className="grid grid-cols-4 gap-8 py8">
      {categoryMeals.map((data) => {
        return (
          <>
            <img src={data.strMealThumb} alt="" />
            <h1>{data.strMeal}</h1>
          </>
        );
      })}
    </div>
  );
}
