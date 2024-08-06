import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../signUpSchema/SignUpSchema";
import { AppContext } from "../context/Context";
import { zodResolver } from '@hookform/resolvers/zod';

function StepOne() {
  const { setName, setPhone, setEmail, step, setStep } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    setName(data.userName);
    setEmail(data.email);
    setPhone(data.phone);
    setStep(step + 1);
    console.log(data);
  };

  const watchUserName = watch("userName");
  const watchEmail = watch("email");
  const watchPhoneNumber = watch("phone");

  const isStep1completed =
    watchUserName?.trim() !== "" &&
    watchEmail?.trim() !== "" &&
    watchEmail?.includes("@") &&
    watchPhoneNumber?.trim() !== "";

  const id = React.useId();

  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      
      >
      <div className="description mt-10">
        <h2 className="text-4xl font-extrabold  text-MarineBlue mb-1">
          Personal info
        </h2>
        <p className="text-CoolGray text-base font-normal mb-10 leading-6 ">
          Please provide your name, email, address, and phone number.
        </p>
      </div>

      <div className="input-name flex flex-col mb-6 relative gap-1">
        <label
          htmlFor={`name-${id}`}
          className="text-MarineBlue text-base ml-1 mb-2 font-medium"
          >
          Name
          
        </label>
        <input
          {...register("userName")}
          aria-invalid={errors.userName ? "true" : "false"}
          type="text"
          placeholder="e.g. Stephen King"
          className={`text-base ml-1 text-MarineBlue font-medium border border-solid border-lightGray bg-background-color p-3 rounded-lg focus:outline-none ${
            errors.userName
              ? "border-red-500 focus:border-red-500"
              : "border-lightGray focus:border-purplishBlue"
          }`}
          id={`name-${id}`}
        />
         {errors.userName && (
          <p role="alert" className="text-red-500 text-12.8 font-medium absolute ml-1 right-0 ">
            {errors.userName.message}
          </p>
        )}
       
      </div>

      <div className="input-email  flex flex-col mb-6 relative gap-1">
        <label
          htmlFor={`email-${id}`}
          className="text-MarineBlue text-base ml-1 mb-2 font-medium"
        >
          Email Address
        </label>
        <input
          type="email"
          id={`email-${id}`}
          placeholder="e.g. stephenking@lorem.com"
          className={`text-base ml-1 text-MarineBlue font-medium border border-solid border-lightGray bg-background-color p-3 rounded-lg focus:outline-none ${
            errors.email
              ? "border-red-500 focus:border-red-500"
              : "border-lightGray focus:border-purplishBlue"
            }`}
            {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
        />
         {errors.email && (
           <p role="alert" className="text-red-500 text-12.8 font-medium absolute ml-1 right-0 ">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="input-phone  flex flex-col mb-6 relative gap-1">
        <label
          htmlFor={`phone-${id}`}
          className="text-MarineBlue text-base ml-1 mb-2 font-medium"
          >
          Phone Number{" "}
        </label>
        <input
          id={`phone-${id}`}
          placeholder="e.g. +02 01011223344"
          className={`text-base ml-1 text-MarineBlue font-medium border border-solid border-lightGray bg-background-color p-3 rounded-lg focus:outline-none ${
            errors.phone
              ? "border-red-500 focus:border-red-500"
              : "border-lightGray focus:border-purplishBlue"
            }`}
          {...register("phone")}
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone && (
          <p role="alert" className="text-red-500 text-12.8 font-medium absolute ml-1 right-0 ">
            {errors.phone.message}
          </p>
        )}
      </div>

    <div className=" flex mt-auto">
    <button
          type="submit"
          className={`  bg-MarineBlue text-white border-none ml-auto py-3 px-3  w-28 rounded-xl text-base border-0 hover:brightness-150 delay-0`}
          disabled={!isStep1completed}
          style={{
            cursor: !isStep1completed ? "not-allowed" : "pointer",
          }}
        >
          Next Step
        </button>

    </div>
    </form>
        </>
  );
}

export default StepOne;