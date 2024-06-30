/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { movieId, movieTitle, moviePoster } = props;
  const navigate = useNavigate();
  const filteredTitle =
    movieTitle.length > 15 ? `${movieTitle.substring(0, 15)}...` : movieTitle;

  return (
    <div
      onClick={() => navigate(`/movies/detail/${movieId}`)}
      className="w-32 sm:w-40 inline-block cursor-pointer relative rounded-xl z-0 hover:scale-90 hover:-translate-y-4 hover:transition-all hover:delay-75"
    >
      <img
        className="w-full h-auto block rounded-xl"
        src={`https://image.tmdb.org/t/p/w500/${moviePoster}`}
        alt={filteredTitle}
      />
      <div className="flex items-center justify-between">
        <p>{filteredTitle}</p>
        <p>
          <FaRegHeart />
        </p>
      </div>
    </div>
  );
};

export default Card;
