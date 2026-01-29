import { Link } from "react-router";
import postsData from "../../api/posts.json";
import CardsMainSec from "../CardsMainSec/CardsMainSec";
import CardsPostsSec from "../CardsPostsSec/CardsPostsSec";
export default function MainSection() {
  const allData = postsData.posts;

  return (
    <>
      <header className=" py-5 header position-relative">
        <div className="bgColor1 position-absolute"></div>
        <div className="bgColor2 position-absolute"></div>
        <div className=" container py-5 text-center  d-flex flex-column justify-content-center align-items-center gap-3 my-5">
          <div className="activeHeaderSpan py-1 px-3 rounded-5 w-fc d-flex align-items-center gap-1">
            <div className=" d-flex gap-1">
              <div className="xx1 rounded-circle"></div>
              <div className="xx2 rounded-circle"></div>
            </div>
            <span className="text-white">مرحباً بك في عدسة</span>
          </div>
          <h1 className="text-white display-2 fw-bold">
            اكتشف
            <span className="mainColor"> فن</span>
            <span className="d-block">التصوير الفوتوغرافي</span>
          </h1>
          <p className=" m-0 text-white-50 fs-3">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br />
            التصوير.
          </p>
          <div className="d-flex  gap-2">
            <Link to='/ExploreArticles' className=" text-decoration-none colorBtn text-white px-4 py-3 rounded-5 fw-bold btnQra">
              استكشف المقالات{" "}
              <span>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </Link>
            <button className=" border-dark btnMazd border bg-transparent text-white px-4 py-3 rounded-5 fw-bold">
              <span>
                <i className="fa-solid fa-circle-info"></i>
              </span>{" "}
              اعرف المزيد
            </button>
          </div>
          <div className="container-fluid mt-4">
            <div className="row g-3 justify-content-center">
              <div className="col-md-2">
                <div className="inner">
                  <div className="cardsHeader d-flex flex-column gap-2 border border-dark rounded-5 py-3">
                    <span className="mainColor1">
                      <i className="fa-solid fa-newspaper   fa-2x"></i>
                    </span>
                    <span className="mainColor fs-3 fw-bold">+50</span>
                    <span className="text-white-50">مقالة</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="inner">
                  <div className="cardsHeader d-flex flex-column gap-2 border border-dark rounded-5 py-3">
                    <span className="mainColor1">
                      <i className="fa-solid fa-users  fa-2x"></i>
                    </span>
                    <span className="mainColor fs-3 fw-bold">+10ألف</span>
                    <span className="text-white-50">قارئ</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="inner">
                  <div className="cardsHeader d-flex flex-column gap-2 border border-dark rounded-5 py-3">
                    <span className="mainColor1">
                      <i className="fa-solid fa-folder-open  fa-2x"></i>
                    </span>
                    <span className="mainColor fs-3 fw-bold">4</span>
                    <span className="text-white-50">تصنيفات</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="inner">
                  <div className="cardsHeader d-flex flex-column gap-2 border border-dark rounded-5 py-3">
                    <span className="mainColor1">
                      <i className="fa-solid fa-pen-nib  fa-2x"></i>
                    </span>
                    <span className="mainColor fs-3 fw-bold">6</span>
                    <span className="text-white-50">كاتب</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="mqlatMo5tara py-5">
        <div className=" container py-5 d-flex flex-column gap-3">
          <div className="activeHeaderSpan py-1 px-3 rounded-5 w-fc d-flex align-items-center gap-1">
            <div className=" d-flex gap-1">
              <div className="xx1 rounded-circle"></div>
              <div className="xx2 rounded-circle"></div>
            </div>
            <span className="mainColor1">مميز </span>
          </div>
          <h2 className="text-white fw-bold  display-3">مقالات مختارة</h2>
          <div className=" d-flex justify-content-between align-items-center">
            <span className="text-white-50 fs-5">
              محتوى منتقى لبدء رحلة تعلمك
            </span>
            <Link to='/ExploreArticles' className=" text-decoration-none colorBtn text-white px-4 py-3 rounded-4 fw-bold btnQra">
              عرض الكل{" "}
              <span>
                <i className="fa-solid fa-chevron-left"></i>
              </span>
            </Link>
          </div>

          <div className=" d-flex flex-column gap-2 py-5">
            {allData.slice(0, 3).map(function (e) {
              return <CardsMainSec allData={e} key={e.id} />;
            })}
          </div>
        </div>
      </section>
      <section className="browseTopics py-5">
        <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
          <div className="activeHeaderSpan py-1 px-3 rounded-5 w-fc d-flex align-items-center gap-1">
            <div className=" d-flex gap-1">
              <div className="xx1 rounded-circle"></div>
              <div className="xx2 rounded-circle"></div>
            </div>
            <span className="mainColor1">التصنيفات </span>
          </div>
          <h2 className="text-white fw-bold display-3">استكشف حسب الموضوع</h2>
          <p className=" m-0 text-white-50">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
          <div className="container-fluid mt-4">
            <div className="row g-3">
              <div className="col-md-3">
                <div className="inner">
                  <div className="cardsHeader hoverCardsBrowseTopics d-flex flex-column gap-2 border border-dark rounded-4 py-3 pe-3">
                    <span className="mainColor1 iconbrowseTopics p-2 w-fc rounded-3">
                      <i className="fa-solid fa-sun fa-xl"></i>
                    </span>
                    <span className="text-white fs-3 fw-bold">اضائة</span>
                    <span className="text-white-50">3 مقالة </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="inner">
                  <div className="cardsHeader hoverCardsBrowseTopics d-flex flex-column gap-2 border border-dark rounded-4 py-3 pe-3">
                    <span className="mainColor1 iconbrowseTopics p-2 w-fc rounded-3">
                      <i className="fa-solid fa-user fa-xl"></i>
                    </span>
                    <span className="text-white fs-3 fw-bold">بوترية</span>
                    <span className="text-white-50">3 مقالة </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="inner">
                  <div className="cardsHeader hoverCardsBrowseTopics d-flex flex-column gap-2 border border-dark rounded-4 py-3 pe-3">
                    <span className="mainColor1 iconbrowseTopics p-2 w-fc rounded-3">
                      <i className="fa-solid fa-mountain-sun fa-xl"></i>
                    </span>
                    <span className="text-white fs-3 fw-bold">
                      مناظر طبيعية
                    </span>
                    <span className="text-white-50">2 مقالة </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="inner">
                  <div className="cardsHeader hoverCardsBrowseTopics d-flex flex-column gap-2 border border-dark rounded-4 py-3 pe-3">
                    <span className="mainColor1 iconbrowseTopics p-2 w-fc rounded-3">
                      <i className="fa-solid fa-sliders fa-xl"></i>
                    </span>
                    <span className="text-white fs-3 fw-bold"> تقنيات</span>
                    <span className="text-white-50">5 مقالة </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="inner">
                  <div className="cardsHeader hoverCardsBrowseTopics d-flex flex-column gap-2 border border-dark rounded-4 py-3 pe-3">
                    <span className="mainColor1 iconbrowseTopics p-2 w-fc rounded-3">
                      <i className="fa-solid fa-gear fal-xl"></i>
                    </span>
                    <span className="text-white fs-3 fw-bold"> معدات</span>
                    <span className="text-white-50">3 مقالة </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latestPosts py-5">
        <div className=" container py-5">
          <div className=" d-flex flex-column gap-3">
            <div className="activeHeaderSpan py-1 px-3 rounded-5 w-fc d-flex align-items-center gap-1">
              <div className=" d-flex gap-1">
                <div className="xx1 rounded-circle"></div>
                <div className="xx2 rounded-circle"></div>
              </div>
              <span className="mainColor1">الأحدث </span>
            </div>
            <h2 className="fw-bold text-white  display-4">أحدث المقالات</h2>
            <div className=" d-flex justify-content-between">
              <p className="m-0 text-white-50 fs-5">
                محتوى جديد طازج من المطبعة
              </p>
              <span className="mainColor1 fw-bold">
                عرض جميع المقالات{" "}
                <span>
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
              </span>
            </div>
          </div>
          <div className=" container-fluid ">
            <div className="row g-4">
              {allData.slice(3, 6).map(function (e) {
                return <CardsPostsSec allData={e} key={e.id} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="newsLetter py-5">
        <div className="container d-flex flex-column align-items-center py-5">
          <div className="infoMainsec rounded-5 col-9 py-5 d-flex flex-column align-items-center">
            <span className="text-white colorBtn p-3 rounded-4">
              <i className="fa-regular fa-envelope fa-xl"></i>
            </span>
            <h4 className="text-white fw-bold display-6">
              اشترك في <span className="mainColor">نشرتنا الإخبارية</span>
            </h4>
            <p className="p-0 text-white-50 lead fw-normal">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <div className="col-12 d-flex gap-2 align-items-center justify-content-center">
              <input
                className="rounded-4 pe-4 inputNewsLetter col-5 py-3"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
              />
              <button className="border-0 py-3 px-4 rounded-3 btnNewsLetter text-white fw-bold">
                اشترك الان
              </button>
            </div>
            <div className="p-4 d-flex gap-2">
              <img
                className="rounded-circle"
                style={{ width: "30px", height: "30px" }}
                src={allData[0].author.avatar}
              />
              <img
                className="rounded-circle"
                style={{ width: "30px", height: "30px" }}
                src={allData[2].author.avatar}
              />
              <img
                className="rounded-circle"
                style={{ width: "30px", height: "30px" }}
                src={allData[3].author.avatar}
              />
              <span className="text-white-50">
                انضم ل<span className="text-white">+10,000 </span>
                مصور
              </span>
              <span className="text-white-50 mx-2 ">•</span>
              <span className="text-white-50 ">بدون إزعاج</span>
              <span className="text-white-50 mx-2 ">•</span>{" "}
              <span className="text-white-50 ">إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
