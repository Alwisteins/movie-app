import { useFetch } from "../../hooks/useFetch";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Card from "../Card/Card";

export const Section = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, fetchURL, rowID } = props;
  const movies = useFetch(fetchURL);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h1 className="font-medium text-xl py-5 sm:py-10">{title}</h1>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white text-slate-950 -left-5 rounded-full absolute opacity-50 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full space-x-4 sm:space-x-8 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies &&
            movies.results.map((movie, id) => (
              <Card
                key={id}
                movieId={movie.id}
                moviePoster={movie.poster_path}
                movieTitle={movie.original_title}
              />
            ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white text-slate-950 -right-5 rounded-full absolute opacity-50 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        {!movies && <p>No Movies Availables</p>}
      </div>
    </>
  );
};
