import Shops from "../features/shop/Shop";
import NavBar from "../features/common/Navbar";
import Footer from "../features/common/Footer";

export default function CategoryPage() {
    return (
      <div>
        <NavBar >
          <Shops></Shops>
        </NavBar>
        <Footer></Footer>
      </div>
      );
};