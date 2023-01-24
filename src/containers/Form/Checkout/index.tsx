/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useForm } from "react-hook-form";
import Input from "@components/Input/InputText";
import InputRadio from "@components/Input/InputRadio";
import FormSection from "../Section";

const radioValues = ["HTML", "JS", "CSS"];

const FormCheckout = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      lastName: "",
      technologies: radioValues[1],
    },
  });

  const handleData = (data: any) => {
    // console.log({ data });
    window.localStorage.setItem("checkoutForm", JSON.stringify(data));
  };

  //   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //     const name = e.target.name;
  //     setInput({ ...input, [name]: e.target.value });
  //     setRender(render + 1);
  //   };

  return (
    <div>
      <form onSubmit={handleSubmit(handleData)}>
        <Input
          label="Last Name"
          errorMessage={errors.lastName}
          {...register("lastName", {
            minLength: {
              value: 5,
              message: "Deben ser al menos 5 caracteres",
            },
          })}
        />
        <InputRadio values={radioValues} {...register("technologies")} />

        <FormSection
          title="personal info"
          inputs={[
            {
              component: Input,
              props: { label: "First Name", ...register("name") },
            },
          ]}
        />
        <button type="submit">Button send</button>
      </form>
    </div>
  );
};

export default FormCheckout;
