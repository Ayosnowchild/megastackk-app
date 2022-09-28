import CaseCard from "./CaseCard";
import Link from "next/link";
function Case() {
  return (
    <div className=" p-6 md:p-22 xl:p-32 w-full">
      <div className=" flex justify-between items-center mb-8">
        <h2 className=" font-bold text-3xl md:text-4xl xl:text-5xl  text-megaStackSecondary">
          Case Study
        </h2>
        <Link href="/case-study">
          <a>
            <p className=" font-bold text-base xl:text-xl text-megaStackSecondary border-b-8 border-solid border-[#F7BA72]">
              View More
            </p>
          </a>
        </Link>
      </div>
      <div className=" flex flex-col xl:flex-row xl:flex-wrap md:flex-row md:flex-wrap gap-16 xl:gap-32 w-full">
        <CaseCard
          img={"/images/mockup.png"}
          study={"Yummy Spot"}
          aboutStudy={"UI/UX Design, Desktop App"}
        />
        <CaseCard
          img={"/images/mockup.png"}
          study={"Yummy Spot"}
          aboutStudy={"UI/UX Design, Desktop App"}
        />{" "}
        <CaseCard
          img={"/images/mockup.png"}
          study={"Yummy Spot"}
          aboutStudy={"UI/UX Design, Desktop App"}
        />{" "}
        <CaseCard
          img={"/images/mockup.png"}
          study={"Yummy Spot"}
          aboutStudy={"UI/UX Design, Desktop App"}
        />
      </div>
    </div>
  );
}

export default Case;
