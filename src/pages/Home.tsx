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

export default function Home() {
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
      <div className="grid grid-cols-4 gap-8 py-8">
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
