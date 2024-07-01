import { useParams } from "react-router-dom";
import { FaStar, FaPlay } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { Topbar } from "../../components/topbar/Topbar";
import { Bottombar } from "../../components/bottombar/Bottombar";
import { useFetch } from "../../hooks/useFetch";
import url from "../../data/url";

export const Detail = () => {
  const { id } = useParams();
  const movie = useFetch(url.default + `/${id}`);

  return (
    <div>
      <Topbar />
      {movie && (
        <div className="w-screen h-screen">
          <img
            src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
            alt={movie.original_title}
            className="object-cover h-2/5 sm:h-full w-full opacity-50"
          />
          <div className="absolute top-32 sm:top-0 h-screen w-screen flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:justify-evenly">
            <img
              src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
              alt={movie.original_title}
              className="w-32 sm:w-52"
            />
            <div className="w-11/12 sm:w-2/5">
              <div className="flex justify-center sm:justify-start sm:items-end space-x-1 sm:space-x-3">
                <h1 className="font-bold text-xl sm:text-3xl">
                  {movie.original_title}
                </h1>
                <h1 className="font-bold text-md sm:text-xl text-white/80">
                  &#40;{movie.release_date.split("-")[0]}&#41;
                </h1>
              </div>
              <div className="flex justify-center sm:justify-start items-center space-x-1 pt-1 pb-3">
                <span className="text-yellow-400">
                  <FaStar />
                </span>
                <p className="text-white/80">
                  {movie.vote_average} Average Rating
                </p>
              </div>
              <p className="text-justify">{movie.overview}</p>
              <div className="mt-3 flex space-x-3">
                <button className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium backdrop-blur-lg bg-white/30 hover:bg-blue-400 rounded-full">
                  <span>Watch Trailer </span>
                  <FaPlay />
                </button>
                <button className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium border border-white rounded-full">
                  <span>Favorite </span>
                  <MdOutlineFavorite />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {!movie && <p>No Detail Available</p>}
      <Bottombar />
    </div>
  );
};
