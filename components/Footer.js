import Image from "next/image";

function Footer() {
  return (
    <div className=" w-full md:h-fit mt-24 px-6 md:px-22 xl:px-32 pt-6 md:pt-8 xl:pt-12 pb-3 text-[#FFFFFF] bg-megaStackSecondary">
      <div className=" flex flex-col gap-4 md:gap-6 xl:gap-8 border-b border-solid border-[#C3C5DC] border-1 pb-8 md:pb-12 xl:pb-18 mb-8 md:mb-12 xl:mb-18">
        <h3 className=" font-bold text-xl md:text-2xl xl:text-3xl mb-2">
          Get in touch
        </h3>
        <div className=" flex flex-col-reverse gap-4 md:flex-row xl:flex-row justify-between md:items-end xl:items-end h-36">
          <div className=" w-2/5 mb-2">
            <button className=" bg-megaStackPrimaryBlueBase w-30 md:w-38 xl:w-40 h-10 md:h-12 xl:h-15 rounded-lg flex items-center justify-center py-5 px-5 font-semibold text-white text-base">
              Lets Talk
            </button>
          </div>
          <div className=" flex flex-col gap-1 md:gap-4 xl:gap-6">
            <p className=" text-xs md:text-base xl:text-lg font-light">
              Reach out to find out how we can be of help to you. Hit the button
              below to send us an email at hello@megastack.tech
            </p>
            <p className=" text-xs md:text-base xl:text-lg font-light">
              You can also check out some of our previous project we’ve helped
              our partners ship to their users. Click here to see our works.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col-reverse gap-2 xl:flex-row justify-between xl:items-center">
        <small className=" text-xs md:text-sm xl:text-sm">
          ©Copyright 2022, Megastack Technologies Limited
        </small>
        <div className=" flex gap-2 md:gap-4 xl:gap-6">
          <div className=" flex justify-center items-center gap-2">
            <img
              src="/Negative.svg"
              alt="action"
              className=" w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-5"
            />
            <p className=" text-xs md:text-lg xl:text-xl font-light">
              Instagram
            </p>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <img
              src="/Negative (1).svg"
              alt="action"
              className=" w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-5"
            />
            <p className=" text-xs md:text-lg xl:text-xl font-light">
              {" "}
              LinkedIn
            </p>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <img
              src="/Negative (2).svg"
              alt="action"
              className=" w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-5"
            />
            <p className=" text-xs md:text-lg xl:text-xl font-light">
              Facebook
            </p>
          </div>
          <div className=" flex justify-center items-center gap-2">
            <img
              src="/Negative (3).svg"
              alt="action"
              className=" w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-5"
            />
            <p className=" text-xs md:text-lg xl:text-xl font-light">Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
