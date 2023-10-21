import { useLoaderData } from "react-router-dom";
import "../../../global.css"
import HomeBanner from '../../components/Section/HomeBanner';
import ProductSection from "../../components/Section/ProductSection";
import CoverProduct from "../../components/Section/CoverProduct";

const Home = () => {
    const products = useLoaderData()
  
    return (
        <>
            <HomeBanner />
            <CoverProduct />
            <ProductSection products={products} />
        </>
    );
};

export default Home;