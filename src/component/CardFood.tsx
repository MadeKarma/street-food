interface ICardFood {
  imgSrc: string;
  placeholder: string;
  title: string;
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

export default function CardFood({ imgSrc, title, placeholder }: ICardFood) {
  return (
    <div
      className="bg-sky-300 border border-slate-100 flex flex-col justify-center relative rounded-xl shadow"
      title={placeholder}
    >
      <div className="rounded-t-xl overflow-hidden">
        <img className="mx-auto rounded" src={imgSrc} alt="gambar" />
      </div>
      <div className="flex-auto p-4 ">
        <h1 className="text-lg font-semibold mb-2">
          {truncateText(title, 20)}
        </h1>
      </div>
    </div>
  );
}
