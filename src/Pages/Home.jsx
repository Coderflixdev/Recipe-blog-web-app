import Banner from "../Component/Home/Banner";
import CategoryBlogs from "../Component/Home/CategoryBlogs";
import MenuSection from "../Component/Home/MenuSection";
import Popular from "../Component/Home/Popular";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Popular/>
            <CategoryBlogs/>
            <MenuSection/>
        </div>
    );
};

export default Home;