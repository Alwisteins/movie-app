import { Topbar } from "../../components/topbar/Topbar";
import { Section } from "../../components/section/Section";
import { Bottombar } from "../../components/bottombar/Bottombar";
import url from "../../data/url";

export const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="pt-16 pb-24 sm:py-20 px-7 sm:px-36">
        <Section rowID={1} title="Now Playing" fetchURL={url.nowPlaying} />
        <Section rowID={2} title="Popular" fetchURL={url.popular} />
        <Section rowID={3} title="Top Rated" fetchURL={url.topRated} />
        <Section rowID={4} title="Upcoming" fetchURL={url.upcoming} />
      </div>
      <Bottombar />
    </div>
  );
};
