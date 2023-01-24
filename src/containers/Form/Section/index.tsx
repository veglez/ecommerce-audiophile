import { AllInputs } from "@components/Input";
import Flex from "@components/UI/Flex";
import { FC, ForwardRefExoticComponent } from "react";
import { useForm } from "react-hook-form";
import { Text } from "./form.section.styles";

export type IFormSectionInputs = {
  component: ForwardRefExoticComponent<AllInputs>;
  props: AllInputs & ReturnType<typeof useForm>["register"];
};

export interface IFormSectionProps {
  title: string;
  inputs: IFormSectionInputs[];
}

const FormSection: FC<IFormSectionProps> = (props) => {
  const { title, inputs } = props;
  return (
    <Flex direction="column" gap={24} align="flex-start">
      <Text variant="subtitle">{title}</Text>
      {inputs.map((input, index) => {
        const Component = input.component;
        return <Component key={index} {...input.props} />;
      })}
    </Flex>
  );
};

export default FormSection;
