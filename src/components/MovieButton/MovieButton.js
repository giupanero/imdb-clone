import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MovieButton.css";

const MovieButton = ({ text, icon }) => {
  return (
    <a href="">
      <FontAwesomeIcon style={{paddingRight: "5px"}} icon={icon} />
      {text}
    </a>
  );
};

export default MovieButton;
