import { AllInputs } from "@components/Input";
import { IInputRadioProps } from "@components/Input/InputRadio";
import { IInputTextProps } from "@components/Input/InputText";
import { ForwardRefExoticComponent } from "react";

type Args<T> = {
  component: T extends IInputTextProps
    ? ForwardRefExoticComponent<IInputTextProps>
    : ForwardRefExoticComponent<IInputRadioProps>;
  props: T extends IInputRadioProps ? IInputTextProps : IInputRadioProps;
};

export default function typeInference<T extends AllInputs>(args: Args<T>[]) {
  return args;
}
