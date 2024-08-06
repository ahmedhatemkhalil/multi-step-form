import React, { useContext } from "react";
import { AppContext } from "../context/Context";

function StepThree({ plans }) {
  const {
    selected_AddOns,
    setSelected_AddOns,
    isMonthly,
    step,
    setStep,
    completedStep2,
  } = useContext(AppContext);
  const id = React.useId();

  const handleAddOnChange = (event) => {
    const { value, checked } = event.target;

    setSelected_AddOns((previousAddOn) =>
      checked
        ? [...previousAddOn, value]
        : previousAddOn.filter((addOns) => addOns !== value)
    );
  };

  function handleBackButton() {
    const previousStep = step - 1;
    if (previousStep >= 1) {
      setStep(previousStep);
    }
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if (step === 2 && !completedStep2) return;
    setStep(step + 1);
  }

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className=" description mt-10">
          {" "}
          <h2 className=" text-32 mb-1 font-extrabold  text-MarineBlue">
            Pick add-ons
          </h2>
          <p className=" text-CoolGray text-base font-normal mb-10 leading-6  ">
            Add-ons help to enhance your gaming experience.
          </p>
        </div>
        <div className="all-plans mb-16 flex flex-col gap-4">
          {plans.map(
            ({ value, monthlyPrice, yearlyPrice, label, description }) => {
              const isSelected = selected_AddOns.includes(value);
              const optionId = `plan-${id}-${value} `;
              return (
                <div
                  key={value}
                  className={`plans flex items-center gap-8 xs:gap-10   ${
                    isSelected ? "bg-background-color" : ""
                  }    border-1 border-solid border-lightGray p-6  rounded-lg hover:border-purplishBlue  cursor-pointer`}
                >
                  <input
                    type="checkbox"
                    className=" w-5 h-5 cursor-pointer  accent-purplishBlue "
                    name={id}
                    value={value}
                    id={optionId}
                    checked={isSelected}
                    onChange={handleAddOnChange}
                  />
                  <label htmlFor={optionId}>
                    <div className="  ">
                      <h4 className=" text-MarineBlue text-17.6 xs:text-13 font-semibold mb-1">
                        {label}
                      </h4>
                      <p className=" font-normal text-CoolGray text-base xs:text-sm leading-6">
                        {description}
                      </p>
                    </div>
                  </label>
                  <p className=" text-purplishBlue text-base font-medium ml-auto  ">
                    +${isMonthly ? monthlyPrice : yearlyPrice}/
                    {isMonthly ? "mo" : "yr"}
                  </p>
                </div>
              );
            }
          )}
        </div>
        <div className=" flex justify-between mb-5">
          <button
            onClick={handleBackButton}
            type="button"
            className={`mt-9 text-CoolGray text-base py-4 px-6  font-medium hover:text-MarineBlue`}
          >
            Go Back
          </button>
          <button
            type="submit"
            className={`mt-9 bg-MarineBlue text-white border-none py-0 px-1 w-28 rounded-xl text-base border-0 hover:brightness-150 delay-0  `}
          >
            Next Step
          </button>
        </div>
      </form>
    </>
  );
}

export default StepThree;
