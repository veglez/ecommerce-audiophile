import Typography from "@components/Typography";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const GoBack: FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
  return (
    <Typography onClick={handleClick} {...props}>
      Go Back
    </Typography>
  );
};

export default GoBack;
