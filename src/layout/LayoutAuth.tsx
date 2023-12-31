import { Link, Outlet } from "react-router-dom";
import HeadBarMain from "../component/headBar/HeadBarMain";
import Footer from "../component/footer/Footer";

const LayoutAuth = () => {
  return (
    <div className="min-h-[100vh]">
      <HeadBarMain
        editHeight={"80px"}
        editSize={"200px"}
        editLenth={"100px"}
        register={true}
      />
      <div
        className=""
        style={{ backgroundImage: "linear-gradient(115deg,#c2c2c2,#c3c3c3)" }}>
        <div className="flex flex-col lg:flex-row bg-white shadow-lg">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center left-container"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0.3)) ,url('https://img.lovepik.com/background/20211022/large/lovepik-blue-business-background-image_401950164.jpg')",
            }}>
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, ad.
                <Link
                  to="/ecommerce-project"
                  className="text-blue-400 font-semibold">
                  Go to Home Page
                </Link>
              </p>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <Footer isAuth={true} />
    </div>
  );
};

export default LayoutAuth;
