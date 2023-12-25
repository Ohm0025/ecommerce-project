import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/homePage/HomePage";
import AuthenPage from "./page/authenPage/AuthenPage";
import ProductPage from "./page/productPage/ProductPage";
import SearchBar from "./component/searchBar/SearchBar";
import LayoutHome from "./layout/LayoutHome";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutHome />,

      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
      ],
    },
    {
      path: "/authen",
      element: <AuthenPage />,
    },
  ]);

  return (
    <div className="flex flex-col">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
