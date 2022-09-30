import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { useFormik } from "formik";
import * as Yup from "yup";
function Contact() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(30, "Maximum 30 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      phone: Yup.string().required("Required!"),
      message: Yup.string().required("Required!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Head>
        <title>MegaStack</title>
        <meta name="megastack app" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className=" bg-[url('/glass.png')] bg-no-repeat bg-cover flex flex-col items-center w-full h-full xl:h-1002 pt-24 gap-24 mb-8 md:gap-32 md:pt-32 xl:pt-36 xl:gap-40 px-6 md:px-22 xl:py-6 xl:px-32">
        <div className=" flex flex-col items-center justify-center text-center w-full mt-12  md:px-22 xl:px-26 gap-8">
          <h1 className=" flex items-center font-bold text-3xl md:text-5xl text-center tracking-wide xl:text-7xl  text-megaStackSecondary xl:px-48">
            Become our partner. Let’s talk about your next project
          </h1>
          <p className=" mb-8 xl:mb-0 font-light text-xl md:text-1xl xl:text-2xl  text-center md:28 xl:px-36 ">
            Drop us a line with the form below or better still shoot us an email
            on <strong className=" font-semibold">hello@magastack.tech</strong>
          </p>
          {/* <button className=" bg-megaStackPrimaryBlueBase w-40 h-15 rounded-lg py-5 px-10 font-semibold text-white text-base">
            Lets Talk
          </button> */}
        </div>
      </div>
      <div className=" flex justify-center items-center xl:-mt-356 w-full">
        <form
          onSubmit={formik.handleSubmit}
          className=" flex flex-col justify-center items-start "
        >
          <div className=" mb-4 xl:mb-8">
            <label
              htmlFor="full_name"
              className=" block mb-2 font-semibold text-lg xl:text-xl text-[#111222]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              placeholder="Your name"
              value={formik.values.full_name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className=" form-input text-gray-500 font-light text-base xl:text-lg p-4 xl:p-6 w-64 xl:w-672 h-16 bg-[#FFFFFF] border border-solid border-1 border-[#C3C5DC] rounded-lg "
            />
            {formik.errors.full_name && formik.touched.full_name && (
              <p className=" text-red-500">{formik.errors.full_name}</p>
            )}
          </div>
          <div className=" mb-8">
            <label
              htmlFor="email"
              className=" block mb-2 font-semibold text-lg xl:text-xl text-[#111222]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className=" form-input text-gray-500 font-light text-base xl:text-lg p-4 xl:p-6 w-64 xl:w-672 h-16 bg-[#FFFFFF] border border-solid border-1 border-[#C3C5DC] rounded-lg "
            />
            {formik.errors.email && formik.touched.email && (
              <p className=" text-red-500">{formik.errors.email}</p>
            )}
          </div>
          <div className=" mb-8">
            <label
              htmlFor="phone"
              className=" block mb-2 font-semibold text-lg xl:text-xl text-[#111222]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Your number"
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className=" form-input text-gray-500 font-light text-base xl:text-lg p-4 xl:p-6 w-64 xl:w-672 h-16 bg-[#FFFFFF] border border-solid border-1 border-[#C3C5DC] rounded-lg "
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className=" text-red-500">{formik.errors.phone}</p>
            )}
          </div>
          <div className=" mb-8">
            <label
              htmlFor="phone"
              className=" block mb-2 font-semibold text-lg xl:text-xl text-[#111222]"
            >
              Message
            </label>
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="Tell us briefly about your project"
              className="  p-6 w-64 xl:w-672 h-60 bg-[#FFFFFF] border border-solid border-1 border-[#C3C5DC] rounded-lg"
            ></textarea>
            {formik.errors.message && formik.touched.message && (
              <p className=" text-red-500">{formik.errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className=" w-64 xl:w-672 h-16 bg-megaStackPrimaryBlueBase rounded-lg py-5 px-10 font-semibold text-white text-base"
          >
            Submit
          </button>
        </form>
        {/* <Formik
          initialValues={{
            fullName: "",
            email: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className=" flex-col">
            <div className=" flex-col mb-8">
              <label htmlFor="fullName" className=" block mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                placeholder="Jane Doe"
                value={formik.values.full_name}
                onChange={formik.handleChange}
                className=" p-6 w-672 h-16 bg-[#FFFFFF] border border-solid border-1 border-[#C3C5DC] rounded-lg "
              />
            </div>
            <div className=" mb-8">
              <label htmlFor="email" className=" block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                className=" p-6 w-672 h-16 bg-[#FFFFFF] border border-solid border-1 border-[#C3C5DC] rounded-lg "
              />
            </div>
            <button
              type="submit"
              className=" w-672 h-16 bg-megaStackPrimaryBlueBase rounded-lg py-5 px-10 font-semibold text-white text-base"
            >
              Submit
            </button>
          </Form>
        </Formik> */}
      </div>

      <Footer />
    </>
  );
}
export default Contact;
