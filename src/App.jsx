import { createBrowserRouter, RouterProvider } from "react-router";
import MainPage from "./components/MainPage/MainPage";
import MainSection from "./components/MainSection/MainSection";
import ExploreArticles from "./components/ExploreArticles/ExploreArticles";
import NotFound from "./components/NotFound/NotFound";
import WhoAreWe from "./components/WhoAreWe/WhoAreWe";
import InfoCards from "./components/infoCards/infoCards";

const allDomian = createBrowserRouter([
  {
    path: "",
    element: <MainPage />,
    children: [
      { path: "", element: <MainSection /> },
      { path: "MainSection", element: <MainSection /> },
      {
        path: "ExploreArticles",
        element: <ExploreArticles />,
        children: [{ path: "InfoCards", element: <InfoCards /> }],
      },
      { path: "WhoAreWe", element: <WhoAreWe /> },
      { path: "InfoCards/:id", element: <InfoCards /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={allDomian} />
    </>
  );
}

export default App;
