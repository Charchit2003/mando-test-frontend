import CategoryDetails from "../features/category/components/CategoryDetails";
import NavBar from "../features/common/Navbar";
import Footer from "../features/common/Footer";

export default function CategoryPage() {
    return (
      <div>
        <NavBar >
          <CategoryDetails></CategoryDetails>
        </NavBar>
        <Footer></Footer>
      </div>
      );
};
