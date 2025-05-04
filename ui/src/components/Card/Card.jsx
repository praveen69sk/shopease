import ArrowIcon from "../Common/ArrowIcon";

const Card = ({ image, title, description, actionArrow, height, width }) => {
  return (
    <div className="flex flex-col p-6">
      <img
        className={`max-h-[${height ? height : "240px"}] max-w-[${
          width ? width : "200px"
        }]
        bg-cover bg-center rounded cursor-pointer hover:scale-105`}
        src={image}
        alt=""
      />
      <div className="group flex justify-between items-center">
        <div className="flex flex-col p-1">
          <p className="text-[16px]">{title}</p>
          {description && (
            <p className="text-[12px] px-1 text-gray-600">{description}</p>
          )}
        </div>
        {actionArrow && (
          <span className="transition delay-150 duration-300 ease-in-out group-hover:translate-x-2 cursor-pointer">
            <ArrowIcon />
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
