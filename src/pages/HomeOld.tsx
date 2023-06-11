// import Card from "../component/Card";
import foodApi from "../api/foodApi";
import { useEffect, useState } from "react";
import CardCategory from "../component/CardCategory";

interface IDataCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default function HomeOld() {
  const [dataCategory, setDataCategory] = useState<IDataCategory[]>([]);
  async function getDataCategory() {
    const payload = await foodApi("/categories.php");
    setDataCategory(payload.categories);
  }
  useEffect(() => {
    getDataCategory();
  }, []);
  console.log(dataCategory);

  return (
    <section className="container pt-28">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Beragam aneka olahan masakan</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
        {dataCategory.map((data) => {
          console.log(data);
          return (
            <CardCategory
              key={data.idCategory}
              imgSrc={data.strCategoryThumb}
              title={data.strCategory}
              desc={data.strCategoryDescription}
              link={`food/${data.strCategory}`}
            />
          );
        })}
      </div>
    </section>
  );
}
