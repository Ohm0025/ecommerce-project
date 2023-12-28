import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/homePage/HomePage";
import ProductPage from "./page/productPage/ProductPage";
import SearchBar from "./component/searchBar/SearchBar";
import LayoutHome from "./layout/LayoutHome";
import DetailPage from "./page/detailPage/DetailPage";
import LayoutAuth from "./layout/LayoutAuth";
import RegisterPage from "./page/registerPage/RegisterPage";
import LoginPage from "./page/loginPage/LoginPage";

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
          path: "products",
          element: <ProductPage />,
        },
        {
          path: "products/:productId",
          element: <DetailPage />,
        },
        {
          path: "products/cat/:cat",
          element: <ProductPage />,
        },
      ],
    },
    {
      path: "/authen",
      element: <LayoutAuth />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        { path: "register", element: <RegisterPage /> },
      ],
    },
  ]);

  return (
    <div className="flex flex-col min-h-[100vh]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
