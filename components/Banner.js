import Link from "next/link";
function Banner() {
  return (
    <div className=" bg-[url('/glass.png')] bg-no-repeat bg-cover flex flex-col items-center w-full h-full pt-24 gap-24 mb-8 md:gap-32 md:pt-32 xl:pt-36 xl:gap-40 px-6 md:px-22 xl:py-6 xl:px-32">
      <div className=" flex flex-col items-center justify-center text-center w-full mt-12  md:px-22 xl:px-26 gap-8">
        <h1 className=" flex items-center font-bold text-3xl md:text-5xl text-center tracking-wide xl:text-7xl  text-megaStackSecondary xl:px-48">
          Your partner in building amazing digital products
        </h1>
        <p className=" font-light text-xl md:text-1xl xl:text-2xl  text-center md:28 xl:px-36 ">
          We are a software development agency leveraging design thinking
          framework to help our clients meet their increasing revenue with best
          users experience.
        </p>
        <Link href="/contact-us">
          <a>
            <button className=" bg-megaStackPrimaryBlueBase w-30 md:w-38 xl:w-40 h-10 md:h-12 xl:h-15 rounded-lg flex items-center justify-center py-5 px-5 font-semibold text-white text-sm">
              Lets Talk
            </button>
          </a>
        </Link>
      </div>
      <div className=" flex flex-col md:flex-row xl:flex-row gap-4 md:gap-4 xl:gap-8 ">
        <div className=" flex flex-col gap-2 ">
          <h3 className=" text-megaStackNeutralblack font-semibold text-xl md:text-1xl xl:text-2xl ">
            We Ideate
          </h3>
          <p className=" font-light text-base xl:text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam
            erat quam tellus feugiat risus semper. Amet orci facilisi nec.
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          <h3 className=" text-megaStackNeutralblack font-semibold text-xl md:text-1xl xl:text-2xl ">
            We Design
          </h3>
          <p className=" font-light text-base xl:text-xl  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam
            erat quam tellus feugiat risus semper. Amet orci facilisi nec.
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          <h3 className=" text-megaStackNeutralblack font-semibold text-xl md:text-1xl xl:text-2xl ">
            We Develop
          </h3>
          <p className=" font-light text-base xl:text-xl  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam
            erat quam tellus feugiat risus semper. Amet orci facilisi nec.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
