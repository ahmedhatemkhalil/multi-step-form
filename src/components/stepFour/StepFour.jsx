import React, { useContext } from "react";

import { AppContext } from "../context/Context";
function StepFour({ plans, plansStep2 }) {
  const { selected_AddOns, selectedPlan, isMonthly, setStep, step  } =
    useContext(AppContext);

  function handleSubmitForm(event) {
    event.preventDefault();
    setStep(step + 1);
  }

  function handleBackButton() {
    const previousStep = step - 1;
    if (previousStep >= 1) {
      setStep(previousStep);
    }
  }

  const navigateToStepTwo = () => {
    setStep(2);
  };

  const selectedAddOnsDetails = plans.filter((plan) =>
    selected_AddOns.includes(plan.value)
  );

  const mainTotalPrice = isMonthly
    ? selectedPlan.monthlyPrice
    : selectedPlan?.yearlyPrice;

  const addOnsTotalPrice = selectedAddOnsDetails.reduce((total, addOn) => {
    const price = isMonthly ? addOn.monthlyPrice : addOn.yearlyPrice;
    return total + price;
  }, 0);

  const totalPrice = mainTotalPrice + addOnsTotalPrice;

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="description ">
          <h2 className="text-32 mb-1 font-extrabold xs:font-medium text-MarineBlue">
            Finishing up
          </h2>
          <p className="text-CoolGray text-base font-normal mb-10 leading-6">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className={`totalPrice mb-8 border-2 xs:py-8 xs:px-4  border-background-color bg-background-color rounded-lg ${selectedAddOnsDetails.length > 0 ? 'p-8' : 'px-3 py-4'} `}>
          <div className="flex justify-between">
            <h3 className="text-MarineBlue text-19.2 font-bold">
              {selectedPlan?.label}
              {isMonthly ? "(monthly)" : "(yearly)"}
            </h3>
            <p className="text-17.6 text-MarineBlue font-bold">
              ${mainTotalPrice}/{isMonthly ? "mo" : "yr"}
            </p>
          </div>
          <button
            onClick={navigateToStepTwo}
            className={  ` text-base ${selectedAddOnsDetails.length > 0 ? 'pb-7' : 'pb-3'} text-CoolGray underline hover:text-purplishBlue`}
          >
            Change
          </button>
          {selectedAddOnsDetails.length > 0 && (
            <>
              <div className="border-1 border-b-lightGray mb-6"></div>
              {selectedAddOnsDetails.map(
                ({ yearlyPrice, monthlyPrice, label }) => (
                  <div key={label} className="addOns flex justify-between mb-5">
                    <p className="text-CoolGray text-base font-normal">
                      {label}
                    </p>
                    <p className="text-MarineBlue font-medium text-base">
                      {" "}
                      +{isMonthly ? monthlyPrice : yearlyPrice}/
                      {isMonthly ? "mo" : "yr"}
                    </p>
                  </div>
                )
              )}
            </>
          )}
        </div>
        <div className="mt-7 totalPrice flex justify-between px-6">
          <p className="text-CoolGray text-base font-normal">
            Total (per {isMonthly ? "month" : "year"})
          </p>
          <p className="text-purplishBlue font-extrabold text-20.8">
            ${totalPrice}/{isMonthly ? "mo" : "yr"}
          </p>
        </div>
        <div className="mt-20 flex justify-between">
          <button
            onClick={handleBackButton}
            type="button"
            className={`text-CoolGray text-base py-4 px-6  font-medium hover:text-MarineBlue`}
          >
            Go Back
          </button>
          <button
            type="submit"
            className={`bg-purplishBlue text-white border-none py-0 px-1 w-28 rounded-xl text-base border-0 hover:brightness-150 delay-0  `}
          >
            Confirm
          </button>
        </div>
      </form>
    </>
  );
}

export default StepFour;