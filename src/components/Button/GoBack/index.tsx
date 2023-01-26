import Typography from "@components/Typography";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
  return <Typography onClick={handleClick}>Go Back</Typography>;
};

export default GoBack;
