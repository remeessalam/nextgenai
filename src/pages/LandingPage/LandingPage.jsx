import React from "react";
import Header from "../../components/LandingPages/Header";
import Banner from "../../components/LandingPages/Banner";
import Services from "../../components/LandingPages/Services";
import Development from "../../components/LandingPages/Development";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { industriesCompanyServe } from "../../constant";
import WorkFlow from "../../components/WorkFlow";

const LandingPage = ({ page }) => {
  return (
    <div className="landing-bg">
      <WhatsAppIcon />
      <Header />
      <Banner page={page} />
      <Services page={page} />
      <Development page={page} />
      <div className="wrapper py-[2rem] flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h2
            data-aos="fade-up"
            className="text-[2rem] md:text-4xl leading-tight font-semibold text-center"
          >
            Our Expertise
          </h2>
          <p data-aos="fade-up" className="mt-2 mb-3">
            At <strong>AI WebX</strong>, we leverage cutting-edge technology to
            deliver custom solutions that drive innovation and efficiency across
            industries. Our areas of expertise include:
          </p>
        </div>
        <ul className="list-disc pl-5 mt-3 flex flex-col gap-4">
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Artificial Intelligence & Machine Learning:
            </strong>{" "}
            We build intelligent systems that enhance decision-making, automate
            processes, and provide deep insights for businesses.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Blockchain Development: </strong>
            Secure and decentralized solutions for transactions, data integrity,
            and digital assets.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Web & Mobile App Development:{" "}
            </strong>{" "}
            Crafting high-performance, user-centric applications that drive
            engagement and revenue growth.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Cloud Computing Services:{" "}
            </strong>{" "}
            Optimizing operations with scalable, secure cloud infrastructure and
            seamless cloud migration services.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">Cybersecurity Solutions: </strong>{" "}
            Comprehensive security measures to protect your business from cyber
            threats and ensure data privacy.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">AR/VR Development:</strong>{" "}
            Immersive virtual and augmented reality experiences that transform
            user interactions.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Data Analytics & Business Intelligence:
            </strong>{" "}
            Actionable insights from big data to drive informed decision-making
            and growth strategies.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">IoT Development: </strong>{" "}
            Connecting devices and systems to enhance automation and operational
            efficiency
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Natural Language Processing (NLP):
            </strong>{" "}
            Advanced text and speech recognition for enhanced customer service
            and communication.
          </li>
          <li data-aos="fade-up" className="">
            <strong className="text-[1.1rem]">
              Robotic Process Automation (RPA):
            </strong>{" "}
            Streamlining repetitive tasks to improve operational efficiency and
            reduce costs.
          </li>
        </ul>
      </div>
      <div className="wrapper py-[2rem] flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <h2
            data-aos="fade-up"
            className="text-[2rem] md:text-4xl leading-tight font-semibold text-center"
          >
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
      </div>
      <WorkFlow page={page} />
      <Experience />
      <Testimonials />
      <LeadForm />
      <AssociatedWith />
      <Footer />
    </div>
  );
};

export default LandingPage;
