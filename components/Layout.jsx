import Navigation from "@/components/Navigation";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
