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
  vansLoader,
  vanDetailLoader,
  VanDetail,
  HostVans,
  HostVanDetails,
  HostVanPhotos,
  HostVanPrice,
  hostVansLoader,
} from "./pages";

import {
  Error,
  Layout,
  HostLayout,
  HostVanDetailsLayout,
  hostVanDetailsLoader,
} from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<DashBoard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetailsLayout />}
          loader={hostVanDetailsLoader}
        >
          <Route index element={<HostVanDetails />} />
          <Route path="pricing" element={<HostVanPrice />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
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
