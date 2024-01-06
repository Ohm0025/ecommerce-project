import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/homePage/HomePage";
import ProductPage from "./page/productPage/ProductPage";
import SearchBar from "./component/searchBar/SearchBar";
import LayoutHome from "./layout/LayoutHome";
import DetailPage from "./page/detailPage/DetailPage";
import LayoutAuth from "./layout/LayoutAuth";
import RegisterPage from "./page/registerPage/RegisterPage";
import LoginPage from "./page/loginPage/LoginPage";
import CheckOutPage from "./page/checkOutPage/CheckOutPage";
import BackDropLoading from "./component/backDropLoading/BackDropLoading";
import { useLoading } from "./store/loadingState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { isLoading, openIsLoading, closeIsLoading } = useLoading();
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
          path: "products/search/:q",
          element: <ProductPage />,
        },
        {
          path: "products/detail/:productId",
          element: <DetailPage />,
        },
        {
          path: "products/category/:cat",
          element: <ProductPage />,
        },
        {
          path: "checkout",
          element: <CheckOutPage />,
        },
        {
          path: "*",
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
    <div className="flex flex-col min-h-[100vh] min-w-[300px] bg-[#f7fafc]">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {isLoading && (
        <BackDropLoading open={isLoading} handleClose={closeIsLoading} />
      )}
    </div>
  );
}

export default App;
