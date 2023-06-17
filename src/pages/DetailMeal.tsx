import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import foodApi from "../api/foodApi";
import Loading from "../component/Loading";

interface IMeal {
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strMeal: string;
  strMealThumb: string;
}
export default function DetailMeal() {
  const { idMeal } = useParams();
  const [mealData, setMealData] = useState<IMeal[]>([]);
  {
    /*async function getMealData() {
    const res = await foodApi(`/lookup.php?i=${idMeal}`);
    setMealData(res.meals);
  }

  useEffect(() => {
    getMealData();
  }, [getMealData]);*/
  }

  useEffect(() => {
    async function getMealData() {
      const res = await foodApi(`/lookup.php?i=${idMeal}`);
      setMealData(res.meals);
    }
    getMealData();
  }, [idMeal]);

  console.log(mealData);

  return (
    <section className="fs-container pt-20">
      {mealData.length > 0 ? (
        mealData.map((data) => (
          <div key={data.strMeal}>
            <div className="bg-red-400 h-[300px] overflow-clip rounded-[15px]">
              <img
                className="h-full object-cover w-full"
                src={data.strMealThumb}
                alt={data.strMeal}
              />
            </div>
            <div className="border-b-2 border-third mb-8 pl-2 pr-8 w-max max-w-full">
              <h1 className="font-extrabold text-3xl text-second mt-3 w-full">
                {data.strMeal}
              </h1>
            </div>
            <div className="flex justify-between gap-16 my-3 w-3/4">
              <ListMeal title="Category" content={data.strCategory} />
              <ListMeal title="Area" content={data.strArea} />
            </div>
            <p>Instructions: {data.strInstructions}</p>
          </div>
        ))
      ) : (
        <div className="my-12 mx-auto w-3/4">
          <Loading />
        </div>
      )}
    </section>
  );
}
function ListMeal(props: { title: string; content: string }) {
  return (
    <div className="font-bold w-1/2">
      <h3 className="border-b-2 border-third mb-2 pb-1 pl-2 text-xl text-second">
        {props.title}
      </h3>
      <p className="font-semibold pl-2 text-fourth">{props.content}</p>
    </div>
  );
}
