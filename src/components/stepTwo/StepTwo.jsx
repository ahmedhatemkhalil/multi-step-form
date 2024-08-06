import React from "react";
import { AppContext } from "../context/Context";
function StepTwo({ plans }) {
  const {
    isMonthly,
    setIsMonthly,
    selectedPlan,
    setSelectedPlan,
    step,
    setStep,
    completedStep1,
    completedStep2,
  } = React.useContext(AppContext);

  const handlePlanChange = (newPlan) => {
    setSelectedPlan(newPlan);
  };

  const toggleButton = () => {
    setIsMonthly((isMonthly) => !isMonthly);
  };

  function handleSubmitForm(event) {
    event.preventDefault();
    if (step === 1 && !completedStep1) return;
    if (step === 2 && !completedStep2) return;
    setStep(step + 1);
  }

  function handleBackButton() {
    setStep(step - 1);
  }
  return (
    <>
      <div onClick={handleSubmitForm}>
        <div className="description ">
          <h2 className=" text-32 font-extrabold mb-1 text-MarineBlue ">
            Select your plan
          </h2>
          <p className="text-CoolGray text-base font-normal mb-10 leading-6 ">
            {" "}
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="packages  gap-4  grid grid-cols-3 xs:grid-cols-1 mb-8    ">
          {plans.map(({ image, label, monthlyPrice, yearlyPrice }) => (
            <div
              key={label}
              className={`package flex flex-col max-h-44   xs:flex-row xs:gap-4  border-1 border-solid border-lightGray hover:border-purplishBlue delay-150 cursor-pointer p-4 xs:p-3 rounded-lg 
              ${
                selectedPlan?.label === label
                  ? "bg-background-color border-purplishBlue"
                  : "border-lightGray"
              }        `}
              onClick={() =>
                handlePlanChange({ image, monthlyPrice, label, yearlyPrice })
              }
            >
              <img
                src={image}
                alt={label}
                className=" w-10 h-10 object-cover  mb-10 xs:mb-0"
              />
              <div className=" mb-6 plan flex flex-col justify-center">
                <h4 className=" text-17.6 text-MarineBlue font-semibold mt-auto">
                  {" "}
                  {label}
                </h4>
                <p className=" text-14.4 font-normal text-CoolGray leading-6">
                  {" "}
                  ${isMonthly ? monthlyPrice : yearlyPrice}/
                  {isMonthly ? "mo" : "yr"}{" "}
                </p>
                <p className="text-MarineBlue text-14.4 font-medium ">
                  {isMonthly ? "" : "2 months free"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="monthly-plan  flex items-center justify-center gap-4 border-2 bg-background-color  border-background-color rounded-lg p-4">
          <h5
            className={` ${
              isMonthly ? "text-MarineBlue ml-2 " : "text-CoolGray"
            }  text-13.28 mb-3.32px font-extrabold`}
          >
            {" "}
            Monthly
          </h5>
          <button
            type="button"
            onClick={toggleButton}
            className=" cursor-pointer flex w-12 p-2px  bg-MarineBlue px-1 rounded-full"
          >
            <span
              className={` ${
                isMonthly ? "ml-1" : "ml-7"
              } w-4 h-4 ml-1 bg-white rounded-full `}
            ></span>
          </button>
          <h5
            className={` ${
              isMonthly ? " text-CoolGray" : " text-MarineBlue"
            }  text-CoolGray text-13.28 mb-3.32px font-extrabold`}
          >
            Yearly
          </h5>
        </div>
        <div className=" flex justify-between mt-14">
          <button
            onClick={handleBackButton}
            type="button"
            className={`mb-3 text-CoolGray text-base py-3 px-3  font-medium hover:text-MarineBlue`}
          >
            Go Back
          </button>
          <button
            type="submit"
            className={`mb-3 bg-MarineBlue text-white border-none py-0 px-1 w-28 rounded-xl text-base border-0 hover:brightness-150 delay-0  `}
            disabled={!completedStep2}
            style={{
              cursor: !completedStep2 ? "not-allowed" : "pointer",
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
}

export default StepTwo;
