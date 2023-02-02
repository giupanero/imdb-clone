import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieRating = ({number}) => {
  return <>
      <FontAwesomeIcon icon={faStar} />
      <span>{number}</span>
    </>
}

export default MovieRating;
