import React from "react";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import AssociatedWith from "../../components/AssociatedWith";
import Footer from "../../components/Footer";
import LeadForm from "../../components/LeadForm";
import Header from "../../components/Website/Header";
import Banner from "../../components/Website/Banner";
import line from "../../assets/images/line.png";
import whyone from "../../assets/images/whyone.jpg";
import whytwo from "../../assets/images/whytwo.jpg";
import whythree from "../../assets/images/whythree.jpg";
import { focusedOn, industriesCompanyServe, services } from "../../constant";
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
            <h6 className="font-medium text-main capitalize">our services</h6>
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
            A Future-Focused Partnership
          </h2>
          {/* <p data-aos="fade-up" className="mt-2 text-center mb-3">
            We cater to a wide range of industries, delivering tailored AI and
            tech solutions to meet specific needs:
          </p> */}
        </div>
        <div className={`mt-6 grid sm:grid-cols-1 lg:grid-cols-3 gap-7 mb-7`}>
          {focusedOn.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className={`p-5 rounded-lg shadow-lg relative group overflow-hidden ${
                index === 0 || index === focusedOn.length - 1
                  ? "lg:col-span-3" // First and last items take full width
                  : "lg:col-span-1" // Other items take 1 column in lg
              } h-full`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover absolute top-0 left-0 rounded group-hover:scale-110 transition-all duration-300"
              />
              <div className="w-full h-full absolute top-0 left-0 bg-white/70 group-hover:bg-primary/20 transition-all duration-700"></div>

              <p className="focused-text text-gray-800 text-md  mt-2 relative z-10 group-hover:text-white transition-all duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* <WorkFlow /> */}
        <div className="wrapper pb-10 flex flex-col items-center gap-5 z-10">
          <div data-aos="fade-up" className="flex flex-col items-center gap-3">
            <div className="flex items-center">
              <img src={line} alt="line" className="w-[3rem] h-1" />
              <h6 className="font-medium text-main">
                Why NEXTGENAI SYSTEMS LLP?
              </h6>
            </div>
            <p className="font-medium mt-3 text-center text-white">
              in an era where technology evolves at a rapid pace, choosing the
              right partner can be the difference between success and
              stagnation. At NEXTGENAI SYSTEMS LLP, we pride ourselves on our
              ability to provide comprehensive, scalable, and tailored solutions
              that perfectly align with your business objectives. Our approach
              is not just about delivering a service – it's about crafting a
              digital strategy that fuels your long-term success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
            <div className="relative" data-aos="fade-right">
              <img
                src={whyone}
                loading="lazy"
                alt="about company"
                className="rounded-lg h-[20rem] md:h-full md:max-h-[25rem] w-full object-cover object-right"
              />
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading-2">Customized Solutions:</h3>
              <p>
                We recognize that every business is distinct, and so are our
                solutions. We invest time and effort into thoroughly
                understanding your specific challenges and aspirations, allowing
                us to craft technology that fits your needs like a tailored
                glove. From cutting-edge web development to sophisticated AI
                systems and seamless automation, our solutions are meticulously
                customized to drive tangible results. By aligning our expertise
                with your objectives, we ensure that each solution not only
                meets your immediate requirements but also propels your business
                toward sustainable growth and success in an increasingly
                competitive landscape.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
            <div data-aos="fade-left" className="flex flex-col gap-5">
              <h3 className="heading-2">AI-Driven Innovation:</h3>
              <p>
                We harness the transformative power of Artificial Intelligence
                to revolutionize the way your business operates. Our
                cutting-edge AI solutions—ranging from intelligent automation
                and advanced data analysis to sophisticated predictive
                modeling—are designed to enhance efficiency and drive strategic
                decision-making. By integrating AI into your operations, we
                equip you with the competitive edge needed to thrive in today’s
                tech-driven landscape. Our commitment to innovation ensures that
                you not only keep pace with industry advancements but also stay
                ahead of the curve, empowering your organization to unlock new
                opportunities and achieve sustainable success. With NEXTGENAI
                SYSTEMS LLP, you’re not just adopting technology; you’re
                embracing a future where AI fuels your growth and elevates your
                business to new heights.
              </p>
            </div>
            <div className="relative" data-aos="fade-left">
              <img
                src={whytwo}
                loading="lazy"
                alt="about company"
                className="rounded-lg h-[20rem] md:h-full md:max-h-[25rem] w-full object-cover object-right"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
            <div className="relative" data-aos="fade-right">
              <img
                src={whythree}
                loading="lazy"
                alt="about company"
                className="rounded-lg h-[20rem] md:h-full md:max-h-[25rem] w-full object-cover object-right"
              />
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading-2">Seamless Digital Transformation:</h3>
              <p>
                we expertly guide you through every phase of your digital
                transformation journey, ensuring that technology serves as a
                powerful enabler rather than a hurdle. Our approach encompasses
                everything from revamping your existing systems to architecting
                entirely new platforms, all while delivering seamless
                integration that elevates operational efficiency and enriches
                customer experiences. We understand that digital transformation
                is not just about adopting new technologies; it's about
                reshaping your business for the future. Our dedicated team works
                collaboratively with you to create a holistic strategy that
                aligns with your vision, empowering you to navigate the
                complexities of transformation with confidence. Together, we
                will unlock new realms of possibility, drive innovation, and
                position your organization at the forefront of your industry.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper pt-10 flex flex-col items-center gap-5 z-10">
          <div className="grid md:grid-cols-2 gap-10 md:mb-[7rem]">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <img src={line} alt="line" className="w-[3rem]" />
              <h3 className="heading-2 capitalize">who We Are</h3>
              <p>
                At NEXTGENAI SYSTEMS LLP, our relentless drive for technological
                innovation fuels transformative solutions that reshape the
                digital world. Our team—comprised of visionary developers,
                creative designers, and seasoned technologists—crafts unique
                digital experiences finely tuned to each business's DNA. Whether
                it's a captivating website, an immersive mobile app, or a custom
                automation system, we turn your vision into reality with
                unmatched precision and creativity.
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
          <p className="max-w-6xl">
            we envision our relationship with you as a long-term partnership
            dedicated to driving your business’s success. We believe that our
            role goes beyond merely delivering technology solutions; we strive
            to build enduring relationships that foster growth and
            innovation.Our primary goal is to understand your unique business
            objectives and challenges, allowing us to tailor our solutions to
            your specific needs. We take the time to engage deeply with your
            team, ensuring we fully grasp your vision and operational
            requirements. By doing so, we create customized solutions that not
            only meet your immediate needs but also align with your long-term
            goals.As technology continues to advance at a rapid pace, we
            recognize the importance of adaptability. We are committed to
            ensuring that your business remains agile and ready to embrace the
            future. Our team continuously monitors emerging trends and
            technological innovations, providing you with insights and
            recommendations that position you to take advantage of new
            opportunities.Our relationship doesn’t end once the solution is
            deployed. We offer ongoing support and maintenance to ensure that
            your systems run smoothly and efficiently. Our dedicated support
            team is always available to address any issues, implement updates,
            and make necessary enhancements as your business evolves. We view
            ourselves as an extension of your team, always ready to help you
            navigate challenges and capitalize on opportunities.We committed to
            empowering your business through the use of advanced technologies.
            From artificial intelligence and robotic process automation to
            custom software solutions, we help you leverage these tools to
            achieve significant improvements in efficiency, productivity, and
            customer satisfaction. Our focus is on providing you with
            long-lasting competitive advantages that enhance your market
            position.We believe that a successful partnership is built on trust,
            transparency, and mutual growth. By working closely with you, we aim
            to cultivate a collaborative environment that encourages innovation
            and exploration. Together, we can navigate the complexities of the
            digital landscape and build a sustainable future for your business.
          </p>
        </div>
      </div>
      {/* <Experience /> */}
      {/* <Testimonials /> */}
      <LeadForm />
      {/* <AssociatedWith /> */}

      <Footer />
    </div>
  );
};

export default Home;
