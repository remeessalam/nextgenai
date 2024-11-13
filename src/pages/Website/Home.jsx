import React from "react";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import Header from "../../components/Website/Header";
import Banner from "../../components/Website/Banner";
import line from "../../assets/images/line.png";
import { industriesCompanyServe, services } from "../../constant";
import aboutImg from "../../assets/images/home-aboutus.jpg";
import whoWeAre from "../../assets/images/who-we-are.jpg";
import ServiceItemCard from "../../components/Website/ServiceItemCard";
import { Link } from "react-router-dom";
import WorkFlow from "../../components/WorkFlow";

const Home = () => {
  return (
    <div className="landing-bg">
      <Header />
      <Banner />
      <div
        id="services"
        className="w-screen min-h-[70vh] flex justify-center relative pt-[3rem]"
      >
        <div className="blurred-blue left-[-10%] top-[-10%]"></div>
        <div className="wrapper py-10 flex flex-col items-center gap-5 z-10">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <img src={line} alt="line" className="w-[3rem]" />
            <h6 className="font-medium text-secondary capitalize">
              our services
            </h6>
          </div>
          <h1 data-aos="fade-up" className="heading text-center">
            We provide the Best IT solution services
          </h1>
          <p data-aos="fade-up" className="text-center max-w-2xl">
            At AI WebX, we offer a full range of advanced technology services
            designed to empower businesses with scalable, intelligent, and
            secure solutions.
          </p>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 mx-auto max-w-6xl"
          >
            {services.map((item) => (
              <ServiceItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="wrapper py-[2rem] flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h2 data-aos="fade-up" className="heading text-center">
            Industries We Serve
          </h2>
          <p data-aos="fade-up" className="mt-2 text-center mb-3">
            We cater to a wide range of industries, delivering tailored AI and
            tech solutions to meet specific needs:
          </p>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
          {industriesCompanyServe.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="p-5 rounded-lg shadow-lg relative group overflow-hidden min-h-[12rem]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-300"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-white/70 group-hover:bg-black/60 transition-all duration-300"></div>
              <p className="text-center text-[1.3rem] font-medium relative z-10 group-hover:text-white transition-all duration-300">
                {item.title}
              </p>
              <p className="text-gray-800 text-md mt-2 relative z-10 group-hover:text-white transition-all duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <WorkFlow />
        <div className="wrapper pb-10 flex flex-col items-center gap-5 z-10">
          <div data-aos="fade-up" className="flex items-center gap-3">
            <img src={line} alt="line" className="w-[3rem]" />
            <h6 className="font-medium text-secondary">About Company</h6>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
            <div className="relative" data-aos="fade-right">
              <img
                src={aboutImg}
                loading="lazy"
                alt="about company"
                className="rounded-lg h-[20rem] md:h-full md:max-h-[25rem] w-full object-cover object-right"
              />
              <div className="w-full sm:w-fit sm:max-w-[18rem] text-white h-full sm:h-fit absolute md:-bottom-[5rem] bottom-0 left-0 bg-primary/70 sm:bg-primary p-5 rounded-lg">
                <h1 className="text-5xl font-bold text-white">2+</h1>
                <p className="font-medium mt-3 text-white">
                  Years of Experience
                </p>
                <p className="pl-5 border-l-2 border-white text-md mt-3 text-white">
                  The trusted choice for your software development solutions
                </p>
              </div>
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading-2">
                Our Vision: Empowering Global Businesses with Intelligent
                Technology
              </h3>
              <p>
                At AI WebX, we are committed to delivering innovative AI,
                Machine Learning, and Blockchain solutions that help businesses
                adapt and excel in an increasingly complex and competitive
                marketplace.
              </p>
              <Link to="/about-us" className="primary-btn mt-7 w-fit">
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="wrapper pt-10 flex flex-col items-center gap-5 z-10">
          <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <img src={line} alt="line" className="w-[3rem]" />
              <h3 className="heading-2 capitalize">who We Are</h3>
              <p>
                AI WebX is a globally recognized leader in delivering
                cutting-edge technology solutions. Our expertise spans AI,
                Machine Learning, Blockchain, and Cloud Computing, offering
                businesses the tools they need to stay competitive and
                innovative in today’s digital economy. Serving industries
                ranging from healthcare to e-commerce and energy, we work
                closely with clients to transform challenges into opportunities.
              </p>
            </div>
            <div data-aos="fade-left" className="">
              <img
                src={whoWeAre}
                loading="lazy"
                alt="about company"
                className="rounded-lg h-[20rem] md:h-full md:max-h-[25rem] w-full object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper mb-10">
        <div
          data-aos="fade-right"
          className="flex flex-col items-center text-center gap-5"
        >
          <div className="flex items-center gap-3">
            <img src={line} alt="line" className="w-[3rem]" />
            <h3 className="heading-2 capitalize">our mission</h3>
          </div>
          <p className="max-w-3xl">
            We aim to empower businesses globally by providing scalable,
            intelligent solutions that enable innovation, streamline operations,
            and drive sustainable growth
          </p>
        </div>
      </div>
      <Experience />
      <Testimonials />
      <LeadForm />
      <AssociatedWith />
      <Footer />
    </div>
  );
};

export default Home;
