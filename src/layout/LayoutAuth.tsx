import { Link, Outlet } from "react-router-dom";

const LayoutAuth = () => {
  return (
    <div className="min-h-[100vh]">
      <div
        className="min-h-screen py-40"
        style={{ backgroundImage: "linear-gradient(115deg,#c2c2c2,#c3c3c3)" }}>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center left-container"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.15),rgba(0, 0, 0, 0.3)) ,url('https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=ais')",
              }}>
              <h1 className="text-white text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, ad.
                  <Link to="/" className="text-blue-400 font-semibold">
                    Go to Home Page
                  </Link>
                </p>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;