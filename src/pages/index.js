export { default as About } from "./About/About";
export { default as DashBoard } from "./Host/DashBoard/DashBoard";
export { default as Home } from "./Home/Home";
export { default as Income } from "./Host/Income/Income";
export { default as Reviews } from "./Host/Reviews/Reviews";
export { default as HostVans } from "./Host/HostVans/HostVans";
export { default as HostVanDetails } from "./Host/HostVanDetails/HostVanDetails";
export { default as PageNotFound } from "./PageNotFound/PageNotFound";
export { default as Vans } from "./Vans/Vans";
export { default as VanDetail } from "./VanDetail/VanDetail";
export { default as HostVanPrice } from "./Host/HostVanPrice/HostVanPrice";
export { default as HostVanPhotos } from "./Host/HostVanPhotos/HostVanPhotos";
export { default as Login } from "./Login/Login";

/**
 *
 * Actions
 *
 *
 */

export { action as loginAction } from "./Login/Login";

/**
 *
 * Loaders
 *
 */
export { loader as hostVansLoader } from "./Host/HostVans/HostVans";
export { loader as vansLoader } from "./Vans/Vans";
export { loader as vanDetailLoader } from "./VanDetail/VanDetail";
export { loader as hostVanPhotosLoader } from "./Host/HostVanPhotos/HostVanPhotos";
export { loader as hostVanPriceLoader } from "./Host/HostVanPrice/HostVanPrice";
export { loader as hostVanDetailsLoader } from "./Host/HostVanDetails/HostVanDetails";
export { loader as reviewsLoader } from "./Host/Reviews/Reviews";
export { loader as dashBoardLoader } from "./Host/DashBoard/DashBoard";
export { loader as incomeLoader } from "./Host/Income/Income";
export { loader as loginLoader } from "./Login/Login";
