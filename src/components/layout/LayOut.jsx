import React from "react";
import SideBar from "../sideBar/SideBar";
import StepOne from "../stepOne/StepOne";
import StepTwo from "../stepTwo/StepTwo";
import StepThree from "../stepThree/StepThree";
import StepFour from "../stepFour/StepFour";
import StepFive from "../stepFive/StepFive";
import { AppContext } from "../context/Context";

import {
  STEPS,
  STEP_THREE_PLAN,
  STEP_TWO_PLAN,
} from "../../constants/Constants";

import toast, { Toaster } from "react-hot-toast";

function LayOut() {
  const { step, setStep, completedStep1, completedStep2 } =
    React.useContext(AppContext);

  const notifyStepOne = () =>
    toast.error("Please provide a name and email before proceeding.");
  const notifyStepTwo = () =>
    toast.error("Please select a plan before proceeding.");
  return (
    <>
      <main className=" w-full h-screen py-8 px-4 grid place-items-center bg-background-color xs:p-0">
        <div className=" multiStepForm  bg-Alabaster w-custom-width h-custom-height p-4 rounded-lg grid grid-cols-custom shadow-custom-shadow overflow-hidden xs:grid-cols-1 xs:h-full xs:p-0 xs:rounded-none xs:relative xs:isolate">
          <SideBar
            steps={STEPS}
            currentStep={step}
            handleChangeStep={(newStep) => {
              if (newStep > 1 && !completedStep1) {
                notifyStepOne();
                return;
              }
              if (newStep > 2 && !completedStep2) {
                notifyStepTwo();
                return;
              }
              setStep(newStep);
            }}
            isDisabled={step === 5}
          />
          <div className="form p-custom-padding xs:p-0 xl:p-custom-padding-xl w-full max-w-600 flex flex-col overflow-hidden gap-8 self-center xs:mt-32">
            <div className=" flex-1 overflow-auto xxs:mx-2 xs:mx-4 xxs:py-8 xxs:px-4 xs:p-8  xs:bg-white xs:rounded-2xl xs:flex-initial xs:shadow-custom-shadow">
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo plans={STEP_TWO_PLAN} />}
            {step === 3 && <StepThree plans={STEP_THREE_PLAN} />}
            {step === 4 && (
              <StepFour plans={STEP_THREE_PLAN} plansStep2={STEP_TWO_PLAN} />
            )}
            {step === 5 && <StepFive />}

            </div>
          </div>
        </div>
        <Toaster
          toastOptions={{ className: "text-xl text-MarineBlue" }}
          position="top-center"
          reverseOrder={false}
        />
      </main>
    </>
  );
}

export default LayOut;
