import ProductDetail from "../features/product/ProductDetail";
import NavBar from "../features/common/Navbar";
import Footer from "../features/common/Footer";

export default function ProductDetailPage() {
    return (
      <div>
        <NavBar >
          <ProductDetail></ProductDetail>
        </NavBar>
        <Footer></Footer>
      </div>
      );
};