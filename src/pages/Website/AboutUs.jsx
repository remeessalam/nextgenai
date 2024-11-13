import React from "react";
import Header from "../../components/Website/Header";
import banner from "../../assets/images/aboutusbanner.jpg";
import line from "../../assets/images/line.png";
import img1 from "../../assets/images/about-us-page-2.png";
import img2 from "../../assets/images/about-us-page-3.png";
import projectsImg from "../../assets/images/icons/projects.png";
import clientsImg from "../../assets/images/icons/clients.png";
import awardsImg from "../../assets/images/icons/awards.png";
import bgShape from "../../assets/images/bg-shape.png";
import process1 from "../../assets/images/w-process1.png";
import process2 from "../../assets/images/w-process2.png";
import process3 from "../../assets/images/w-process3.png";
import arrow from "../../assets/images/icons/Arrow.png";
import SolveITNeeds from "../../components/Website/SolveITNeeds";
import Footer from "../../components/Footer";
import { aboutusDetails, whyusDetails } from "../../constant";

const AboutUs = () => {
  return (
    <div className="landing-bg">
      <Header />
      <div data-aos="fade-down" className="h-[50vh] md:h-[60vh]">
        <img
          loading="lazy"
          src={banner}
          className="h-full object-cover w-full object-left md:object-top"
          alt="banner"
        />
      </div>
      <section className="wrapper py-[5rem]">
        <div className="grid lg:grid-cols-2 lg:items-start gap-10">
          <div>
            <div data-aos="fade-up" className="flex items-center gap-3">
              <img src={line} alt="line" className="w-[3rem]" />
              <h6 className="font-medium text-secondary capitalize">
                Know about us
              </h6>
            </div>
            <h2 className="heading capitalize mt-5">
              Redefining Technology Partnerships.
            </h2>
            <p className="mt-6">
              We redefines the technology partnership paradigm, fusing strategic
              expertise with visionary innovation to guide businesses through
              the dynamic landscape of digital transformation. At our core lies
              an unwavering commitment to crafting tailored, state-of-the-art
              solutions that harness AI's limitless potential, automation's
              precision, and software engineering's creative genius.
            </p>
          </div>
          <div className="h-full w-full">
            <img
              src={img1}
              loading="lazy"
              alt="about us"
              className="object-contain max-h-[30rem] mx-auto"
            />
          </div>
        </div>
      </section>

      <section className="w-full grid lg:grid-cols-[60%_35%] items-end relative">
        <img
          src={img2}
          alt="experience"
          loading="lazy"
          className="w-full h-[80vh] lg:block hidden object-contain z-10 grayscale-[20%]"
        />
        <div
          data-aos="fade-left"
          className="px-6 flex flex-col items-center lg:items-start lg:pl-5 w-full z-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <img src={line} alt="line" className="w-[3rem]" />
            <h6 className="font-medium text-secondary">
              Our expertly crafted services
            </h6>
          </div>
          <h2 className="text-[2rem] md:text-4xl capitalize text-center lg:text-start font-semibold mb-5">
            bespoke software development, intelligent automation, and advanced
            data analytics
          </h2>
          <img
            src={img2}
            loading="lazy"
            alt="experience"
            className="w-full max-w-[20rem] block lg:hidden object-contain mx-auto object-right z-10"
          />
          <div className="z-10 bg-[#010C2A] w-full p-5  gap-5 lg:w-[70vw] lg:-translate-x-[30vw]">
            <p>
              converge to address your unique challenges and aspirations. By
              integrating technological expertise with industry insights, we
              deliver solutions that are not only visionary but also
              precision-aligned with your business strategy, yielding tangible
              results and long-term success. Unlock the future of your business
              with NEXTGENAI SYSTEMS LLP. Our partnership ignites a
              transformative revolution, propelling you to industry leadership
              and unleashing a synergy of growth, agility, and resilience.
              Together, we'll pioneer a path of limitless possibility,
              harnessing emerging opportunities, and redefining success in the
              dynamic digital landscape.
            </p>
            {/* <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5">
              <img
                src={projectsImg}
                loading="lazy"
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">50+</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white items-start md:border-r-2 border-white/40 p-5 md:pl-10">
              <img
                src={clientsImg}
                loading="lazy"
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">100%</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">
                Satisfied clients
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white items-start p-5 md:pl-10">
              <img
                src={awardsImg}
                loading="lazy"
                alt="projects-icon"
                className="h-[2rem] obj2ct-c -mb-4ontain"
              />
              <h2 className="text-4xl font-bold">2+</h2>
              <p className="border-l-2 border-[#00CDFF] pl-3">Awards</p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="relative my-[5rem]">
        {/* <img
          src={bgShape}
          loading="lazy"
          className="w-[37%] absolute left-3 top-0 object-contain"
          alt=""
        />
        <img
          src={bgShape}
          loading="lazy"
          className="w-[37%] absolute right-3 rotate-[125deg] top-0 object-contain"
          alt=""
        /> */}
        <div className="wrapper flex flex-col items-center">
          <div className="flex items-center gap-3 mb-5">
            <img src={line} alt="line" className="w-[3rem]" />
            <h6 className="font-medium text-secondary">Work Process</h6>
          </div>
          <h2 className="heading mt-2">Our Work Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 mt-10 gap-6 lg:gap-10">
            {aboutusDetails.map((items) => (
              <div className="max-w-[20rem] sm:max-w-full sm:w-full z-10 relative bg-black/80 flex flex-col gap-2 items-center text-center justify-center aspect-square rounded-lg p-5 border-2 border-primary">
                <img
                  src={process1}
                  loading="lazy"
                  className="w-[3rem] sm:w-[5rem] object-contain"
                  alt="process"
                />
                <h5 className="text-xl font-semibold">{items.heading}</h5>
                <p className="px-6 text-sm">{items.description}</p>
                {/* <img
                src={arrow}
                className="h-[5rem] sm:h-[6rem] object-contain absolute right-[-2rem] sm:right-[-3.5rem] rotate-[100deg] lg:rotate-12 bottom-[-3.5rem] lg:top-0"
                alt=""
              /> */}
              </div>
            ))}
            {/* <div className="max-w-[20rem] lg:w-full z-10 relative bg-white/80 flex flex-col gap-2 items-center text-center justify-center aspect-square rounded-full p-5 border-2 border-primary">
              <img
                src={process2}
                loading="lazy"
                className="w-[3rem] sm:w-[5rem] object-contain"
                alt="process"
              />
              <h5 className="text-xl font-semibold">Select Service</h5>
              <p className="px-6 text-sm">
                Choose the right solution tailored to your requirements.
              </p>
              <img
                src={arrow}
                className="h-[5rem] sm:h-[6rem] object-contain absolute left-[-2rem] sm:left-[-3.5rem] lg:left-auto lg:right-[-3.5rem] rotate-[80deg] lg:-rotate-12 scale-y-[-1] bottom-[-3.5rem] sm:bottom-0"
                alt=""
              />
            </div>
            <div className="max-w-[20rem] lg:w-full z-10 relative bg-white/80 flex flex-col gap-2 items-center text-center justify-center aspect-square rounded-full p-5 border-2 border-primary">
              <img
                src={process3}
                loading="lazy"
                className="w-[3rem] sm:w-[5rem] object-contain"
                alt="process"
              />
              <h5 className="text-xl font-semibold">Solve Problem</h5>
              <p className="px-6 text-sm">
                We deliver smart solutions to overcome any challenges.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <section className="wrapper text-center">
        <h1 className="heading mb-6">Who We Are</h1>
        <p>
          Our expertly crafted services - bespoke software development,
          intelligent automation, and advanced data analytics - converge to
          address your unique challenges and aspirations. By integrating
          technological expertise with industry insights, we deliver solutions
          that are not only visionary but also precision-aligned with your
          business strategy, yielding tangible results and long-term success.
          Unlock the future of your business with NEXTGENAI SYSTEMS LLP. Our
          partnership ignites a transformative revolution, propelling you to
          industry leadership and unleashing a synergy of growth, agility, and
          resilience. Together, we'll pioneer a path of limitless possibility,
          harnessing emerging opportunities, and redefining success in the
          dynamic digital landscape.
        </p>
      </section>

      <section data-aos="fade-down" className="wrapper text-center mt-20">
        <h1 className="heading mb-6">Why NEXTGENAI SYSTEMS LLP</h1>
        <p>
          In an era where technology evolves at a rapid pace, choosing the right
          partner can be the difference between success and stagnation. At
          NEXTGENAI SYSTEMS LLP, we pride ourselves on our ability to provide
          comprehensive, scalable, and tailored solutions that perfectly align
          with your business objectives. Our approach is not just about
          delivering a service – it's about crafting a digital strategy that
          fuels your long-term success.
        </p>

        <div className="mt-9 mb-14 flex flex-col gap-6">
          {whyusDetails.map((item) => (
            <div className="text-start bg-white/40 hover:scale-95 hover:bg-main/70 transition-all duration-500 rounded-md px-5 py-9">
              <h1 className="text-4xl mb-3 font-semibold">{item.heading}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* <SolveITNeeds /> */}
      <Footer />
    </div>
  );
};

export default AboutUs;
