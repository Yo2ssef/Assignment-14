import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <img src={logo} alt="logo" style={{ width: "45px" }} />
            <div className="d-flex flex-column text-end">
              <span className="text-white fw-bold mb-0">عدسة</span>
              <span className="x1">عالم التصوير الفوتوغرافي</span>
            </div>
          </div>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <div className="navbar-nav nav-middle-frame border border-dark py-1 rounded-5 px-1 d-flex gap-1">
              <div className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link text-white-50 px-4 py-2 rounded-5 border-0"
                >
                  الرئيسية
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink
                  to="/ExploreArticles"
                  className="nav-link text-white-50 px-3 py-2 rounded-5 border-0"
                >
                  المدونة
                </NavLink>
              </div>
              <div className="nav-item">
                <NavLink to="/WhoAreWe" className="nav-link text-white-50 px-3 py-2 rounded-5 border-0">
                  من نحن
                </NavLink>
              </div>
            </div>

            <div className="d-lg-none d-flex flex-column gap-2 mt-3 w-100 text-center">
              <button className="text-white-50 bg-transparent border-0 ">
                <i className=" fa-solid fa-magnifying-glass"></i> بحث
              </button>
              <button className="navActive text-white py-2 rounded-5 border-0">
                ابدأ القراءة
              </button>
            </div>
          </div>

          <div className="d-none d-lg-flex align-items-center gap-3">
            <span className="iconSearch text-white-50 p-2 rounded-3">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <button className="navActive btnQra text-white px-4 py-2 rounded-5 border-0">
              ابدأ القراءة
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
