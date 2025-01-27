import React, { useEffect } from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
 import pic1 from "../Assests/Homee.png";
 import ExperienceCard from "../Components/ExperienceCard";

const Experiance = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    navigate({ unlisten });
    return () => {
      navigate({ unlisten: undefined });
    };
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 w-full phone:p-4 phone:pt-8 tablet:p-12 laptop:p-16 desktop:p-16 desktop:pt-40 laptop:pt-40 tablet:pt-32 text-black">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl text-[#056583] font-sans phone:mt-16 phone:mb-8 laptop:mb-12 desktop:mb-12">
          professional <label className="text-[#b73535]">Experience</label>
        </h1>

         <ExperienceCard 
          index={1}
          companyName="SAP LABS"
          role="Software Developer"
          duration="2020-2023"
          responsibilities={[
            "Developed scalable microservices using Java 11+ and Spring Boot,increasing system scalability by 18% and ensuring seamless backend operations.",
            "Built and documented RESTful APIs for automated reporting and error-handling systems, driving a 40% boost in user engagement and a 30% improvement in dashboard performance.",
            "Participated in architectural discussions and design reviews contributing to high-quality technical documentation."
          ]}
          image={pic1}
        /> 
        <ExperienceCard 
          index={1}
          companyName="SAP LABS"
          role="Associate Developer"
          duration="2020-2023"
          responsibilities={[
            "Designed and implemented Python SDKs for data management applications, streamlining workflows and improving processing efficiency by 35%.",
            "Containerized applications with Docker, reducing deployment overhead by 30%.",
            "Optimized application performance by integrating GPU support in AI workloads, enhancing efficiency by 50% and cutting processing time by 40%."
          ]}
          image={pic1}
        /> 

        <div className="expcard w-full h-fit rounded-xl shadow-xl p-[1.5em] mb-10">
          <p className="phone:pt-2 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:px-2 tablet:px-3 laptop:px-4 desktop:px-4 text-justify phone:text-xl tablet:text-2xl laptop:text-3xl desktop:text-3xl font-bold m-0 text-[#b73535]">
            
          </p>
          <p className="phone:p-2 tablet:p-3 laptop:p-4 desktop:p-4 font-medium phone:text-sm tablet:text-base text-justify laptop:text-lg desktop:text-lg">
            I bring a fresh perspective and a strong foundation in{" "}
            <text className="text-[#056583] underline font-bold">
              {" "}
              frontend/backend development,
            </text>{" "}
            coupled with a proactive attitude and a proven ability to quickly
            adapt to new environments. My experience  have
            honed my problem-solving abilities and teamwork skills, making me a
            reliable and collaborative team member. I am enthusiastic,
            dedicated, and ready to contribute to your company's success from
            day one. My passion for{" "}
            <text className="text-[#056583] underline font-bold">
              Java Developer, Frontend development, Backend developer, React
              Developer.
            </text>{" "}
            and my drive to excel make me an ideal candidate for this position.
           <p>Utilized my career break to upskill in cloud computing, inprogress to achieve the AWS Certified Developer,showcasing my proficiency in developing and maintaining applications on the AWS platform.</p>
          </p>
        </div>
      </div>
      <Footer className="absolute bottom-0" />
    </div>
  );
};

export default Experiance;
