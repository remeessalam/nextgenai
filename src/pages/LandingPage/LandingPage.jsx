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
import {
  industriesCompanyServe,
  portfolioDataApp,
  portfolioDataWeb,
} from "../../constant";
import WorkFlow from "../../components/WorkFlow";

const LandingPage = ({ page }) => {
  const portfolioData =
    page === "web-development" ? portfolioDataWeb : portfolioDataApp;
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
            Our Portfolio
          </h2>
          <p data-aos="fade-up" className="mt-2 mb-3">
            Explore some of the successful projects we have delivered,
            showcasing our expertise across diverse domains. Here are some of
            our valued clients and the work we've done for them
          </p>
        </div>
        <ul className="md:pl-5 mt-3 flex flex-col gap-8">
          {portfolioData.map((project, index) => (
            <li
              key={index}
              data-aos="fade-up"
              className="flex flex-col md:flex-row items-start gap-6"
            >
              <img
                src={project.image}
                alt={`${project.name} website preview`}
                className="w-full md:w-1/3 h-auto object-cover rounded-lg"
              />
              <div>
                <strong className="text-[1.3rem] text-main">
                  {project.name}
                </strong>
                <p className="mt-2">{project.description}</p>
                {page === "web-development" && (
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="mt-3 primary-btn hover:text-black"
                  >
                    Visit Website
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="wrapper py-[2rem] flex flex-col gap-3">
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
      </div> */}
      <WorkFlow page={page} />
      {/* <Experience /> */}
      <Testimonials />
      <LeadForm />
      {/* <AssociatedWith /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
