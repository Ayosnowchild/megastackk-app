import AboutCard from "./AboutCard";
import Link from "next/link";
function About() {
  return (
    <div className=" p-6 md:p-22 xl:p-32 w-full">
      <div className=" w-full md:w-3/5 xl:w-2/4">
        <Link href="/AboutUs">
          <a>
            <h2 className=" font-bold text-3xl md:text-4xl xl:text-5xl mb-4 xl:mb-6 text-megaStackSecondary">
              What we do
            </h2>
          </a>
        </Link>

        <p className=" font-light text-lg xl:text-xl text-megaStackNeutralblack">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
          feugiat a volutpat potenti nisi,{" "}
        </p>
      </div>
      <div className=" flex flex-wrap w-full gap-1 md:flex-row md:flex-wrap md:gap-16 xl:flex-row xl:flex-wrap xl:gap-28">
        <AboutCard
          img={"/images/Service-Illustration.png"}
          title={"Web/Mobile Development"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus, purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus vel tempus ullamcorper. "
          }
        />
        <AboutCard
          img={"/images/Service-Illustration-1.png"}
          title={"Web/Mobile Development"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus, purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus vel tempus ullamcorper. "
          }
        />
        <AboutCard
          img={"/images/Service-Illustration-2.png"}
          title={"Web/Mobile Development"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus, purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus vel tempus ullamcorper. "
          }
        />
        <AboutCard
          img={"/images/Service-Illustration-4.png"}
          title={"Web/Mobile Development"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate feugiat a volutpat potenti nisi, et eget facilisis facilisi. Purus, purus tincidunt metus, euismod. Aliquam ullamcorper dolor sit lacus vel tempus ullamcorper. "
          }
        />
      </div>
    </div>
  );
}

export default About;
