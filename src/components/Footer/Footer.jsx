import { Link } from "react-router";
import ExploreArticles from "../ExploreArticles/ExploreArticles";

export default function Footer() {
  return (
    <>
      <footer className="bg-black position-relative overflow-hidden">
        <div className="bgColor1 position-absolute"></div>
        <div className="bgColor2 position-absolute"></div>
        <div className="x4">
          <div className="container py-5">
            <div className="row g-3">
              <div className="col-md-3">
                <div className="inner d-flex flex-column gap-3">
                  <div className="d-flex gap-2 align-items-center">
                    <span className="py-1 fw-bold fs-3 px-3 rounded-4 text-white mainColorBg1 w-fc h-fc">
                      ع
                    </span>
                    <span className="fw-bold fs-5 text-white">عدسة</span>
                  </div>
                  <span className="text-white-50">
                    مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                    المحترفين ونصائح عملية لتطوير مهاراتكم.
                  </span>
                  <div className="d-flex gap-2">
                    <span className="iconFooter text-white-50 bg-dark p-2 rounded-3">
                      <i className="fa-brands fa-x-twitter"></i>
                    </span>
                    <span className="iconFooter text-white-50 bg-dark p-2 rounded-3">
                      <i className="fa-brands fa-github"></i>
                    </span>
                    <span className="iconFooter text-white-50 bg-dark p-2 rounded-3">
                      <i className="fa-brands fa-linkedin"></i>
                    </span>
                    <span className="iconFooter text-white-50 bg-dark p-2 rounded-3">
                      <i className="fa-brands fa-youtube"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="inner">
                  <h4 className="d-flex gap-2 align-items-center">
                    <div className="lineFooter"></div>
                    <span className="text-white fw-bold">استكشف</span>
                  </h4>
                  <div className="d-flex flex-column gap-2">
                    <Link
                      to="/MainSection"
                      className="hoverSecTwo text-decoration-none text-white-50"
                    >
                      الرئيسية
                    </Link>
                    <Link
                      to="/ExploreArticles"
                      className="hoverSecTwo text-decoration-none text-white-50"
                    >
                      المدونة
                    </Link>
                    <Link
                      to="/WhoAreWe"
                      className="hoverSecTwo text-decoration-none text-white-50"
                    >
                      من نحن
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="inner">
                  <h4 className="d-flex gap-2 align-items-center">
                    <div className="lineFooter"></div>
                    <span className="text-white fw-bold">التصنيفات</span>
                  </h4>
                  <div className="d-flex flex-column gap-2 text-white-50">
                    <span className="hoverSecTwo">اضائة</span>
                    <span className="hoverSecTwo">بورترية</span>
                    <span className="hoverSecTwo">مناظر طبيعية </span>
                    <span className="hoverSecTwo">تقنيات </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="inner d-flex flex-column gap-2">
                  <h4 className="d-flex gap-2 align-items-center">
                    <div className="lineFooter"></div>
                    <span className="text-white fw-bold">ابقى على اطلاع</span>
                  </h4>
                  <span className="text-white-50">
                    اشترك للحصول على أحدث المقالات والتحديثات.
                  </span>
                  <div className="col-12 d-flex flex-column gap-3">
                    <input
                      className="rounded-4 pe-4 inputNewsLetter col-12 py-3"
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                    <button className="border-0 py-3 px-4 rounded-5 btnNewsLetter text-white fw-bold">
                      اشترك
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-4 pt-2 d-flex justify-content-between border-top border-dark">
          <span className="text-white-50">
            © 2026 عدسة. صنع بكل{" "}
            <span className="mainColor1">
              <i className="fa-solid fa-heart"></i>{" "}
            </span>{" "}
            جميع الحقوق محفوظة.
          </span>
          <div className="d-flex gap-3">
            <span className="text-white-50 hoverSecTwo">سياسية الخصوصية</span>
            <span className="text-white-50 hoverSecTwo"> شروط الخدمة</span>
          </div>
        </div>
      </footer>
    </>
  );
}
