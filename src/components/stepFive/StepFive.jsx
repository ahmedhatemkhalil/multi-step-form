import React from "react";
import icon from "./images/icon-thank-you.svg";
import { AppContext } from "../context/Context";

function StepFive() {
  const { name, resetButton } = React.useContext(AppContext);

  return (
    <div className="success flex flex-col  justify-center items-center ">
      <img src={icon} alt="success-icon" className="  mb-8  " />
      <h2 className=" text-4xl text-MarineBlue mb-2 font-extrabold-">
        Thank you!
      </h2>
      <p className=" text-base text-CoolGray text-center font-medium leading-6">
        Thanks <span className=" text-MarineBlue font-semibold">{name}</span>{" "}
        for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      <div className="text-center mt-8">
        <button
          onClick={resetButton}
          className="bg-MarineBlue text-white border-none mt-14 py-3 px-3 w-28 rounded-xl text-base border-0 hover:brightness-150 delay-0"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default StepFive;