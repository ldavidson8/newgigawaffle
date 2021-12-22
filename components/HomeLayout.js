import Navbar from "./Navbar";
import Footer from "./Footer";
import NavTransparent from "./NavTransparent";

const HomeLayout = ({ children }) => {
  return (
    <div>
      <NavTransparent />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
