import IconMeal from "../assets/img/icons-meal.png";
import IconEarth from "../assets/img/icons-earth.png";
import { Link } from "react-router-dom";

interface ICardHome {
  direct: string;
  area: string;
  category: string;
  meal: string;
  thumb: string;
}
const truncateText = (str: string, length?: number, ending?: string) => {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

export default function CardHome({
  area,
  thumb,
  direct,
  meal,
  category,
}: ICardHome) {
  return (
    <div className="bg-white flex flex-col justify-center p-3 relative rounded-[15px] shadow-md">
      <Link className="outline-1 outline-primary" to={direct} title={meal}>
        <div className="bg-primary h-40 rounded-[15px]">
          <img
            className="h-full object-center object-cover rounded-[15px] w-full"
            src={thumb}
            alt={meal}
          />
        </div>
        <h1 className="font-bold pt-2 text-lg md:text-xl">
          {truncateText(meal, 20)}
        </h1>
        <div className="flex items-center gap-2 mt-1 text-primary text-sm">
          <div className="flex items-center">
            <img
              className="h-[30px] pointer-events-none"
              src={IconMeal}
              alt="Icon Meal"
            />
            <p className="after:content-['|'] after:text-black after:pl-2">
              {category}
            </p>
          </div>
          <div className="flex items-center">
            <img
              className="h-[20px] mr-[6px] pointer-events-none"
              src={IconEarth}
              alt="Icon Earth"
            />
            <p>{area}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
