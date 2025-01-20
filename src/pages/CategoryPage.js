import Category from "../features/category/components/Category";
import NavBar from "../features/common/Navbar";
import Footer from "../features/common/Footer";

export default function CategoryPage() {
    return (
      <div>
        <NavBar >
          <Category></Category>
        </NavBar>
        <Footer></Footer>
      </div>
      );
};