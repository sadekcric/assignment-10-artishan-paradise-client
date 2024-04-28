import ArtistArticle from "./ArtistArticle/ArtistArticle";
import Banner from "./Banner";
import CraftItems from "./CraftItem/CraftItems";
import Categories from "./categories/Categories";

const Home = () => {
  return (
    <>
      <Banner />
      <CraftItems />
      <Categories />

      <ArtistArticle />
    </>
  );
};

export default Home;
