import { useContext } from "react";
import ArtistArticle from "./ArtistArticle/ArtistArticle";
import Banner from "./Banner";
import CraftItems from "./CraftItem/CraftItems";
import Faq from "./Faq/Faq";
import Categories from "./categories/Categories";

const Home = () => {
  return (
    <>
      <Banner />
      <CraftItems />
      <Categories />

      <ArtistArticle />
      <Faq />
    </>
  );
};

export default Home;
