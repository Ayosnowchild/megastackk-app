import Image from "next/image";

function AboutCard({ img, title, desc }) {
  return (
    <div className=" flex flex-col gap-2 w-full md:w-3/5 xl:w-2/5 xl:gap-6">
      <div className=" w-64 h-64">
        <img src={img} alt="action" className=" w-256 h-256 md:w-50 md:h-50" />
      </div>
      <h3 className=" text-megaStackPrimaryBlueShade font-semibold text-base md:text-base xl:text-xl w-full ">
        {title}
      </h3>
      <p className=" font-light text-base md:text-xs xl:text-lg w-full">
        {desc}
      </p>
    </div>
  );
}
// {`${img}`}
export default AboutCard;
