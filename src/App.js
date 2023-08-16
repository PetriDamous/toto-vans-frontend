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
  HostVans,
  HostVanDetails,
  HostVanPhotos,
  HostVanPrice,
} from "./pages";
import { Layout, HostLayout, HostVanDetailsLayout } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="host" element={<HostLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetailsLayout />}>
            <Route index element={<HostVanDetails />} />
            <Route path="pricing" element={<HostVanPrice />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
