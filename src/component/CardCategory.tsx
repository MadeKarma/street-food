import { Link } from "react-router-dom";

interface CardInterface {
  imgSrc: string;
  title: string;
  desc: string;
  link: string;
}
const truncateText = (str: string, length: number, ending?: string) => {
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

export default function CardCategory({
  imgSrc,
  title,
  desc,
  link,
}: CardInterface) {
  return (
    <div className="border border-slate-300 flex flex-col justify-center overflow-clip relative rounded-xl shadow-lg">
      <img className="mt-4 mx-auto rounded w-3/4" src={imgSrc} alt="gambar" />
      <div className="flex-auto p-4">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p>{truncateText(desc, 100)}</p>
      </div>
      <div className="bg-sky-300 font-bold text-end py-2 px-4">
        <Link className="hover:underline" to={link}>
          Read more
        </Link>
      </div>
    </div>
  );
}
