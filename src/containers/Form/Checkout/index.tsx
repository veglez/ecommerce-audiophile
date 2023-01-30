/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useForm } from "react-hook-form";
import InputText from "@components/Input/InputText";
import InputRadio from "@components/Input/InputRadio";
import FormSection from "../Section";
import typeInference from "utilities/typeInference";
import Typography from "@components/Typography";
import { FormStyled, InputSection } from "./checkout.styles";
import Summary from "@components/Card/Summary";
import { FC } from "react";

const paymentMethods = ["e-Money", "Cash on Delivery"];

const FormCheckout: FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const { onClick } = props;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethods: paymentMethods[0],
      emoneyNumber: "",
      emoneyPin: "",
    },
  });

  const handleData = (data: any) => {
    // console.log({ data });
    window.localStorage.setItem("checkoutForm", JSON.stringify(data));
    onClick();
    window.scrollTo(0, 0);
  };

  const billingDetailsSection = typeInference([
    {
      component: InputText,
      props: {
        label: "Name",
        errorMessage: errors.name,
        ...register("name", {
          required: { value: true, message: "Wrong format" },
        }),
      },
    },
    {
      component: InputText,
      props: {
        label: "Email Address",
        errorMessage: errors.email,
        ...register("email", {
          required: { value: true, message: "Wrong format" },
        }),
      },
    },
    {
      component: InputText,
      props: {
        label: "Phone Number",
        errorMessage: errors.phone,
        ...register("phone", {
          required: { value: true, message: "Wrong format" },
        }),
      },
    },
  ]);

  const shippingInfoSection = typeInference([
    {
      component: InputText,
      props: {
        label: "Your address",
        errorMessage: errors.address,
        ...register("address", {
          required: { value: true, message: "Wrong format" },
        }),
      },
    },
    {
      component: InputText,
      props: {
        label: "Zip Code",
        errorMessage: errors.zipCode,
        ...register("zipCode", {
          required: { value: true, message: "Wrong format" },
        }),
      },
    },
    {
      component: InputText,
      props: {
        label: "City",
        errorMessage: errors.city,
        ...register("city", {
          required: { value: true, message: "Wrong format" },
        }),
      },
    },
    {
      component: InputText,
      props: {
        label: "Country",
        errorMessage: errors.country,
        ...register("country", {
          required: { value: true, message: "Wrong format" },
        }),
      },
    },
  ]);

  const paymentDetails = typeInference([
    {
      component: InputRadio,
      props: { values: paymentMethods, ...register("paymentMethods") },
    },
    {
      component: InputText,
      props: {
        label: "e-Money Number",
        ...register("emoneyNumber", {
          required: { value: true, message: "Wrong format" },
        }),
      },
    },
    {
      component: InputText,
      props: {
        label: "e-money PIN",
        ...register("emoneyPin", {
          required: { value: true, message: "Wrong format" },
        }),
      },
    },
  ]);

  return (
    <FormStyled id="checkoutForm" onSubmit={handleSubmit(handleData)}>
      <InputSection>
        <Typography variant="h4" style={{ marginBlockEnd: 32 }}>
          Checkout
        </Typography>
        <FormSection title="Billing details" inputs={billingDetailsSection} />
        <FormSection title="shipping info" inputs={shippingInfoSection} />
        <FormSection title="payment details" inputs={paymentDetails} />
      </InputSection>
      <Summary style={{ marginBlockStart: 32 }} />
    </FormStyled>
  );
};

export default FormCheckout;
