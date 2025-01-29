import React, { useContext } from "react";
import bannerImg from "../../assets/images/conductone.jpg";
import { Link } from "react-router-dom";
import Header from "../../components/Website/Header";
import Footer from "../../components/Footer";
import line from "../../assets/images/line.png";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import {
  PiEnvelopeLight,
  PiMapPinAreaLight,
  PiPhoneCallLight,
} from "react-icons/pi";
import { companyDetails } from "../../constant";
import MapComponent from "../../components/Website/MapComponent";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "../../components/SpinnerContext";

const ContactUs = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.companyemail,
      subject: "You have a new message from NEXTGENAI",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div className="bg-[#fafafa] text-black">
      <Header />
      <div className="min-h-[45vh] md:min-h-[70vh] w-full page-banner relative">
        <img
          src={bannerImg}
          loading="lazy"
          className="absolute h-full w-full object-cover object-center z-0"
          alt=""
        />
        <div className="absolute h-full w-full bg-black/20"></div>
        <div className="absolute z-10 py-2 top-[50%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1 data-aos="fade-up" className="heading text-main text-center">
            Contact Us
          </h1>
          <div
            data-aos="fade-up"
            className="mt-3 text-base sm:text-xl font-medium px-3 py-2 w-fit flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>/<Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      <section className="wrapper py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 lg:gap-5">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 flex flex-col gap-3">
            <div data-aos="fade-up" className="flex items-center gap-3">
              <img src={line} alt="line" className="w-[3rem]" />
              <h6 className="font-medium text-main">Contact Us</h6>
            </div>
            <h2 data-aos="fade-up" className="heading-2 capitalize">
              We are ready for your help
            </h2>
            <p data-aos="fade-up" className="max-w-[35rem] lg:max-w-max">
              We’d love to hear from you! Whether you have a project in mind,
              need expert guidance, or want to explore how our solutions can
              benefit your business, we are just a message or phone call away.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-md relative bg-primary/5 group hover:bg-primary  p-7 border-t-2 border-main  flex flex-col"
          >
            <div className="text-black flex group-hover:text-main items-center justify-center h-[4rem] w-[4rem] rounded-full bg-primary/5 text-4xl">
              <PiPhoneCallLight />
            </div>
            <PiPhoneCallLight className="absolute  bottom-2 right-2 text-[6rem] lg:text-[10rem] text-gray-200" />
            <span className="relative z-10 group-hover:text-main font-semibold mt-4">
              Phone Number
            </span>
            <span className="relative z-10 group-hover:text-main mt-2">
              {companyDetails.phone}
            </span>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-md relative bg-primary/5 group hover:bg-primary p-7 border-t-2 border-main flex flex-col"
          >
            <div className="text-main flex items-center justify-center group-hover:bg-white h-[4rem] w-[4rem] rounded-full bg-primary/5 text-4xl">
              <PiEnvelopeLight />
            </div>
            <PiEnvelopeLight className="absolute  bottom-2 right-2 text-[6rem] lg:text-[10rem] text-gray-200" />
            <span className="relative z-10 group-hover:text-main font-semibold mt-4">
              Email Address
            </span>
            <span className="relative z-10 group-hover:text-main mt-2">
              {companyDetails.email}
            </span>
            <span className="relative z-10 group-hover:text-main font-semibold mt-4">
              Company Email Address
            </span>
            <span className="relative z-10 group-hover:text-main mt-2">
              {companyDetails.companyemail}
            </span>
          </div>
          <div
            data-aos="fade-up"
            className="rounded-md relative bg-primary/5 group hover:bg-primary p-7 border-t-2 border-main flex flex-col"
          >
            <div className="text-main flex items-center justify-center group-hover:bg-white h-[4rem] w-[4rem] rounded-full bg-primary/5 text-4xl">
              <PiMapPinAreaLight />
            </div>
            <PiMapPinAreaLight className="absolute  bottom-2 right-2 text-[6rem] lg:text-[10rem] text-gray-200" />
            <span className="relative z-10 group-hover:text-main font-semibold mt-4">
              Location
            </span>
            <span className="relative z-10 group-hover:text-main mt-2">
              {companyDetails.location}
            </span>
          </div>
        </div>
      </section>
      <section className="wrapper mt-10">
        <div
          data-aos="fade-up"
          className="max-w-5xl mx-auto -mb-[8rem] bg-white p-8 shadow-large shadow-black/10 rounded-lg relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-5">
            <div className="flex flex-col gap-3">
              <div data-aos="fade-up" className="flex items-center gap-3">
                <img src={line} alt="line" className="w-[3rem]" />
                <h6 className="font-medium text-main">Contact Us</h6>
              </div>
              <h2 data-aos="fade-up" className="heading-2 capitalize">
                Let’s Collaborate to Innovate
              </h2>
              <p data-aos="fade-up" className="max-w-[35rem] lg:max-w-max">
                At NEXTGENAI SYSTEMS LLP, we’re committed to delivering
                technology solutions that drive business transformation. Contact
                us today to explore how our expertise can support your business
                goals.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              data-aos="fade-up"
              className="flex flex-col gap-1"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                    placeholder="Full Name"
                    {...register("name", {
                      required: "Full name is required",
                      validate: (val) => {
                        if (val.trim() !== "") {
                          return true;
                        } else {
                          return "Full name is required";
                        }
                      },
                    })}
                  />
                  <small className="error-message">
                    {errors.name?.message}
                  </small>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                    placeholder="Email Address"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "Entered email is invalid",
                      },
                    })}
                  />
                  <small className="error-message">
                    {errors.email?.message}
                  </small>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm ml-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                    placeholder="Phone Number"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/i,
                        message: "Entered phone number is invalid",
                      },
                    })}
                  />
                  <small className="error-message">
                    {errors.phone?.message}
                  </small>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="" className="text-sm ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                    placeholder="Enter Subject"
                    {...register("subject", {
                      required: "Subject is required",
                      validate: (val) => {
                        if (val.trim() !== "") {
                          return true;
                        } else {
                          return "Subject is required";
                        }
                      },
                    })}
                  />
                  <small className="error-message">
                    {errors.subject?.message}
                  </small>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Message
                </label>
                <textarea
                  type="text"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                  placeholder="Enter Message"
                  rows="4"
                  {...register("message", {
                    required: "Message is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Message is required";
                      }
                    },
                  })}
                />
                <small className="error-message">
                  {errors.message?.message}
                </small>
              </div>
              <button
                disabled={isSubmitting}
                // type="submit"
                className="px-4 py-3 text-white bg-secondary rounded-sm w-full max-w-[50%]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <MapComponent />
      {/* <div className="-mt-[8rem] relative z-10">
        <SolveITNeeds />
      </div> */}
      <Footer />
    </div>
  );
};

export default ContactUs;
