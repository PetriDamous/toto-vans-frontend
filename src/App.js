import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  DashBoard,
  Income,
  Reviews,
  Home,
  PageNotFound,
  Vans,
  VanDetail,
  HostVans,
  HostVanDetails,
  HostVanPhotos,
  HostVanPrice,
} from "./pages";
import { loader as vanLoader } from "./pages/Vans/Vans";
import { loader as vanDetailLoader } from "./pages/VanDetail/VanDetail";
import { Error, Layout, HostLayout, HostVanDetailsLayout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
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
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vanLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
