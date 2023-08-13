import { Outlet } from "react-router-dom";
import { Footer, Header } from "..";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
