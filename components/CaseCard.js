import Image from "next/image";

function CaseCard({ img, study, aboutStudy }) {
  return (
    <div>
      <div className=" bg-[#F3F8FC] h-256  w-356 xl:w-672 xl:h-542 pt-27.75 px-14.5 mb-4 flex justify-center items-end rounded-2xl">
        <img
          src={img}
          alt="case study"
          className=" rounded-t-lg w-256 h-196 xl:h-256 xl:w-356"
        />
      </div>
      <div>
        <h3 className=" text-xl md:text-2xl xl:text-3xl font-semibold text-megaStackNeutralblack mb-2">
          {study}
        </h3>
        <p className=" font-light text-sm md:text-base  xl:text-xl text-gray-500">
          {aboutStudy}
        </p>
      </div>
    </div>
  );
}

export default CaseCard;
