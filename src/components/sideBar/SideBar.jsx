import React from "react";

function SideBar({ steps, currentStep, handleChangeStep, isDisabled }) {
  return (
    <>
      <div className="sideBar py-12 xs:py-8 xl:py-8 px-8 xs:px-4 xl:px-4 rounded-lg bg-side-bar-background xs:bg-side-bar-background-mob bg-cover bg-center bg-no-repeat flex flex-col xs:flex-row  gap-8 overflow-auto xs:absolute xs:w-full xs:top-0 xs:h-64 xs:-z-1">
        {steps.map(({ label, value, stepNum }) => (
          <div
            className={`step flex items-center gap-1 h-max xs:ml-auto    ${
              isDisabled ? "pointer-events-none" : ""
            } cursor-pointer`}
            key={value}
            onClick={() => !isDisabled && handleChangeStep(value)}
          >
            <div
              className={` text-xl step-number  rounded-50% w-10 aspect-square h-6 border-1 p-5    border-solid ${
                value === currentStep
                  ? " text-MarineBlue bg-lightBlue border-2 border-solid border-lightBlue "
                  : " text-lightBlue bg-transparent "
              }   flex justify-center items-center`}
            >
              {value}
            </div>
            <div className="step-description flex flex-col  justify-center ml-4 xs:hidden">
              <p className=" xs:hidden  text-lightGray text-14.4 font-normal my-1 leading-6	">
                {" "}
                {stepNum}{" "}
              </p>
              <h3 className=" hidden md:block text-white text-base  font-extrabold	">
                {" "}
                {label}{" "}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SideBar;
