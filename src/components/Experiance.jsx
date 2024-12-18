import React from "react";

const Experiance = () => {
  return (
    <div
      id="experiance"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36  bg-orange-300"
    >
      <h1 className="text-center text-5xl font-light ">Experience</h1>
      <div className="flex flex-wrap gap-0 md:flex-nowrap md:gap-10">
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left  ">
            <h3 className="text-xl font-semibold md:text-2xl ">
              Virtusa-Colombo
            </h3>
            <p className="font-light text-lg text-gray-600 ">
              Intern-Technology
            </p>
            <p className="text-sm text-gray-600">
              I am an experienced intern with over a year of hands-on experience
              at Virtusa, specializing in Azure Synapse, Power BI, and Power
              Automate.
            </p>
            <span className="absolute -left-[11px] top-9 h-5 w-5 rounded-full bg-teal-500"></span>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative space-y-1 border-l-2 p-8 text-left  ">
            <h3 className="text-xl font-semibold md:text-2xl ">DXDY-colombo</h3>
            <p className="font-light text-lg text-gray-600 ">
              Software Engineer - Intern
            </p>
            <p className="text-sm text-gray-600">
              Developed and maintained Student Managment System using
              HTML,CSS,PHP,SQL
            </p>
            <span className="absolute -left-[11px] top-9 h-5 w-5 rounded-full bg-teal-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
