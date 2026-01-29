import CardsPostsSec from "../CardsPostsSec/CardsPostsSec";
import postsData from "../../api/posts.json";
import { useState } from "react";

export default function ExploreArticles() {
  const [searchQuery, setSearchQuery] = useState("");
  const allData = postsData.posts;
  const categorData = postsData.categories;
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = 5;
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const pageChange = function (pageNumber) {
    setActivePage(pageNumber);
  };
  const prevPage = function () {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };
  const nextPage = function () {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    <>
      <header className=" py-5 header position-relative">
        <div className="bgColor1 position-absolute"></div>
        <div className="bgColor2 position-absolute"></div>
        <div className=" container py-5 text-center  mt-5 d-flex flex-column justify-content-center align-items-center gap-3">
          <div className="activeHeaderSpan py-1 px-3 rounded-5 w-fc d-flex align-items-center gap-1">
            <div className=" d-flex gap-1 align-items-center">
              <div className="xx1 rounded-circle"></div>
              <span className="mainColor1">
                <i className="fa-regular fa-newspaper"></i>
              </span>
            </div>
            <span className="mainColor1"> مدونتنا</span>
          </div>
          <h1 className="text-white display-2 fw-bold">
            استكشف
            <span className="mainColor"> مقالاتنا</span>
          </h1>
          <p className=" m-0 text-white-50 fs-5">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </header>

      <section className="bg-black py-5 d-flex flex-column justify-content-center">
        <div className=" container-fluid border-bottom border-secondary pb-4">
          <div className="container">
            <div className=" d-flex justify-content-between align-items-center pt-5 pb-3">
              <div className="d-flex align-items-center position-relative col-4">
                <input
                  className="rounded-4 pe-4 inputNewsLetter col-12 py-3 text-white"
                  type="text"
                  placeholder="ابحث عن المقالات "
                  value={searchQuery}
                  onChange={function (e) {
                    setSearchQuery(e.target.value);
                  }}
                />
                <span className="text-white-50 position-absolute start-0 ms-3">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
              <div className="container-fluid">
                <div className="row justify-content-end g-2">
                  <div className="col-auto">
                    <button
                      onClick={function () {
                        setSelectedCategory("الكل");
                      }}
                      className={`px-3 py-1 rounded-3 fw-bold transition-all ${
                        selectedCategory === "الكل"
                          ? "btnQra colorBtn text-white"
                          : "bg-dark text-white-50"
                      }`}
                    >
                      جميع المقالات
                    </button>
                  </div>
                  {categorData.map(function (category, index) {
                    const isActive = selectedCategory === category.name;

                    return (
                      <div className="col-auto" key={index}>
                        <button
                          onClick={function () {
                            setSelectedCategory(category.name);
                          }}
                          className={`px-3 py-1 rounded-3 fw-bold transition-all ${
                            isActive
                              ? "btnQra colorBtn text-white"
                              : "bg-dark text-white-50"
                          }`}
                        >
                          {category.name}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" container py-5">
          <div className=" d-flex justify-content-between">
            <h5 className=" fs-6 text-white-50">
              عرض <span className="text-white fw-bold">{allData.length}</span>{" "}
              مقالات
            </h5>
          </div>
        </div>
        <div className="container py-4">
          <div className="row g-4">
            {allData
              .filter(function (post) {
                const matchCategory =
                  selectedCategory === "الكل" ||
                  post.category === selectedCategory;

                const term = searchQuery.toLowerCase();
                const matchSearch =
                  post.title.toLowerCase().includes(term) ||
                  post.excerpt.toLowerCase().includes(term);

                return matchCategory && matchSearch;
              })
              .slice(startIndex, endIndex)
              .map(function (item) {
                return <CardsPostsSec allData={item} key={item.id} />;
              })}
          </div>
        </div>

        <div className=" d-flex gap-2 justify-content-center align-items-center">
          <span
            onClick={prevPage}
            className="borderExploreArtIcon py-2 px-2 h-fc rounded-3 bg-dark border border-secondary text-white-50"
          >
            <i className="fa-solid fa-angle-right fa-lg"></i>
          </span>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              onClick={function () {
                pageChange(num);
              }}
              className={`borderExploreArtIcon py-2 px-3 h-fc border border-secondary rounded-3 bg-dark text-white-50 ${activePage === num ? "colorSelect" : ""}`}
            >
              {num}
            </span>
          ))}

          <span
            onClick={nextPage}
            className="borderExploreArtIcon py-2 px-2 h-fc border border-secondary rounded-3 bg-dark text-white-50"
          >
            <i className="fa-solid fa-angle-left fa-lg"></i>
          </span>
        </div>
        <span className=" text-white-50 mx-auto mt-4">
          صفحة {activePage} من {totalPages}
        </span>
      </section>
    </>
  );
}
