import Navbar from "./Navbar";
import Footer from "./Footer";
import NavBlue from "./NavBlue";
import NavTransparent from "./NavTransparent";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBlue />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
