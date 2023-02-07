import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieRating = ({number}) => {
  return <div>
      <FontAwesomeIcon icon={faStar} />
      <span>{number}</span>
    </div>
}

export default MovieRating;
