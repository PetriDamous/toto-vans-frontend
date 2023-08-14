import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import {
  About,
  DashBoard,
  Income,
  Reviews,
  Home,
  Vans,
  VanDetail,
} from "./pages";
import { Layout, HostLayout } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/host" element={<HostLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
