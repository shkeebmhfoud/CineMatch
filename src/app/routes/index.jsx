import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

import AppLayout from "../../components/layouts/AppLayout";

import HomePage from "./HomePage";
import WatchList from "./WatchList";
import MovieDetails from "./MovieDetails";
import SearchPage from "./SearchPage";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/movies" element={<SearchPage />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/watch-list" element={<WatchList />} />
    </Route>,
  ),
);

let AppProvider = () => {
  return <RouterProvider router={browserRouter} />;
};

export default AppProvider;
