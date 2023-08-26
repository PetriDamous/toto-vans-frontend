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
  loginAction,
  vansLoader,
  vanDetailLoader,
  VanDetail,
  HostVans,
  HostVanDetails,
  HostVanPhotos,
  HostVanPrice,
  hostVansLoader,
  hostVanPhotosLoader,
  hostVanPriceLoader,
  hostVanDetailsLoader,
  dashBoardLoader,
  incomeLoader,
  reviewsLoader,
  loginLoader,
  Login,
} from "./pages";

import {
  Error,
  Layout,
  HostLayout,
  HostVanDetailsLayout,
  hostVanDetailLayoutLoader,
} from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<DashBoard />} loader={dashBoardLoader} />
        <Route path="income" element={<Income />} loader={incomeLoader} />
        <Route path="reviews" element={<Reviews />} loader={reviewsLoader} />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetailsLayout />}
          loader={hostVanDetailLayoutLoader}
        >
          <Route
            index
            element={<HostVanDetails />}
            loader={hostVanDetailsLoader}
          />
          <Route
            path="pricing"
            element={<HostVanPrice />}
            loader={hostVanPriceLoader}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={hostVanPhotosLoader}
          />
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
