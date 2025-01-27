// ExperienceCard.js
import React from "react";

const ExperienceCard = ({
  companyName,
  role,
  duration,
  responsibilities,
  image,
  index,
}) => {
  const isOdd = index % 2 !== 0;
  const flexDirection = isOdd ? "flex-row-reverse" : "flex-row";

  return (
    <div
      className={`expcard w-full desktop:h-96 laptop:h-96 tablet:h-96 phone:h-fit rounded-xl shadow-xl mb-16 bg-white font-poppins overflow-hidden flex desktop:${flexDirection} laptop:${flexDirection}  tablet:${flexDirection} phone:flex-col`}
    >
      <div className="desktop:w-7/12 laptop:7/12 tablet:7/12 h-full border-black p-4">
        <label className="border-b-2 border-black px-1 desktop:text-2xl laptop:text-2xl tablet:text-xl phone:text-lg font-bold text-[#b73535]">
          {companyName}
          <span className="px-1 desktop:text-xl laptop:text-xl tablet:text-lg phone:text-base font-bold text-[#056583]">
            ({role})
          </span>
        </label>
        <br />
        <label className="block desktop:text-lg laptop:text-lg tablet:text-base phone:text-sm font-medium mt-2">
          {duration}
        </label>
        <label className="mt-3 desktop:text-lg laptop:text-lg tablet:text-base phone:text-base font-semibold">
          Roles & Responsibilities:
        </label>
        <ul className="list-disc text-justify desktop:p-4  laptop:p-4  tablet:text-base phone:text-base font-normal">
          {responsibilities.map((responsibility, idx) => (
            <li key={idx}>
              <p>{responsibility}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="desktop:w-5/12 laptop:5/12 tablet:5/12 h-full border-l">
        <img src={image} alt="" className="h-full mx-auto object-contain" />
      </div>
    </div>
  );
};

export default ExperienceCard;
