import { HomeBanner } from "../components/home-Banner";
import { BrowsingSection } from "../components/home-Browsing-Section";


export const Home = () => {
  return (
    <div className=" min-w-full flex flex-wrap flex-col justify-center">
      <HomeBanner imageSource="https://shorturl.at/gkxET" />
      <BrowsingSection/>
    </div>
  );
};
