import postsData from "../../api/posts.json";
import { Link, useLocation } from "react-router";

export default function InfoCards() {
  const location = useLocation();
  const post = location.state?.postData;
  const allData = postsData.posts;
  const currentId = post.id;
  const otherPosts = allData.filter((p) => p.id !== currentId);
  const randomPosts = otherPosts.slice(0, 3);
  const parts = post.content.split("##");
  const intro = parts[0];
  const sectionContent = parts.slice(1);

  return (
    <>
      <header
        className="headerInfoCards vh-100 pt-5"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%), url(${post.image})`,
        }}
      >
        <div className=" container pt-5 d-flex flex-column gap-3">
          <div className="w-fc my-5 rounded-5 py-1 px-2 bg-dark bg-opacity-50 border border-secondary">
            <Link to="/" className="text-white-50">
              <i className="fa-solid fa-house"></i>
            </Link>
            <span className=" text-decoration-none text-white-50">
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <Link
              to="/ExploreArticles"
              className="text-decoration-none  text-white-50"
            >
              المدونة
            </Link>
            <span className="text-white-50">
              <i className="fa-solid fa-angle-left"></i>
            </span>
            <span className=" mainColor1"> {post.category}</span>
          </div>
          <div className=" d-flex gap-2 align-items-center">
            <span className="fw-bold text-white mainColorBg1 py-2 px-3 rounded-5">
              {post.category}
            </span>
            <span className="d-flex gap-2">
              <span className="text-white-50">
                <i className="fa-regular fa-calendar"></i>
              </span>
              <span className="text-white-50">{post.date}</span>
            </span>
            <span className="d-flex gap-2">
              <span className="text-white-50">
                <i className="fa-regular fa-clock"></i>
              </span>
              <span className="text-white-50">{post.readTime}</span>
            </span>
          </div>
          <h2 className="fw-bold display-3 text-white">{post.title}</h2>
          <div className="d-flex gap-1 cardInfoAuthor rounded-4 w-fc p-3 border border-secondary">
            <img
              style={{ width: "48px" }}
              className="border border-secondary rounded-circle"
              src={post.author.avatar}
            />
            <div className="d-flex flex-column">
              <span className="fw-bold fs-5 text-white">
                {post.author.name}
              </span>
              <span className="text-white-50">{post.author.role}</span>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-black">
        <div className=" container py-5  border-bottom border-secondary">
          <div className="row g-5 position-relative">
            <div className="col-md-8">
              <div className="inner d-flex flex-column gap-5">
                <div className="activeHeaderSpan py-4 px-3 rounded-4 col-12">
                  <span className="text-white fst-italic">{post.excerpt}</span>
                </div>

                <span className="text-white" style={{ whiteSpace: "pre-line" }}>
                  {intro}
                </span>

                {sectionContent.map((item, index) => {
                  const lines = item.trim().split("\n");
                  const title = lines[0];
                  const body = lines.slice(1).join("\n");

                  return (
                    <div key={index} className="d-flex flex-column gap-3">
                      <div className="d-flex gap-3">
                        <span className="activeHeaderSpan py-2 mainColor1 px-1 rounded-4">
                          <i className="fa-solid fa-camera fa-2xl"></i>
                        </span>
                        <h4 className="text-white fw-bold fs-2">{title}</h4>
                      </div>
                      <span
                        className="text-white fw-normal"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {body}
                      </span>
                    </div>
                  );
                })}

                <div className=" col-12 cardInfoAuthor rounded-4 py-4 border border-secondary pe-3 d-flex flex-column gap-3">
                  <div className="d-flex gap-2">
                    <span className="activeHeaderSpan mainColor1 py-2 px-2 rounded-4">
                      <i className="fa-solid fa-tags"></i>
                    </span>
                    <span className=" fw-bold fs-4 text-white">الوسم</span>
                  </div>
                  <div className="d-flex gap-2 flex-wrap">
                    {post.tags &&
                      post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="hoverInfpCardsSec text-white-50 bg-dark px-2 py-1 rounded-4 border border-secondary"
                        >
                          #{tag}
                        </span>
                      ))}
                  </div>
                </div>
                <div className=" col-12 cardInfoAuthor rounded-4 py-4 border border-secondary px-3 d-flex justify-content-between">
                  <div className="d-flex gap-2">
                    <span className="activeHeaderSpan mainColor1 py-2 px-2 rounded-4">
                      <i className="fa-solid fa-share-nodes"></i>
                    </span>
                    <span className=" fw-bold fs-4 text-white">
                      شارك المقال
                    </span>
                  </div>
                  <div className="d-flex gap-2">
                    <span className="py-2 px-2 rounded-3 border border-secondary bg-dark text-white-50">
                      <i className="fa-brands fa-x-twitter"></i>
                    </span>
                    <span className="py-2 px-2 rounded-3 border border-secondary bg-dark text-white-50">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </span>
                    <span className="py-2 px-2 rounded-3 border border-secondary bg-dark text-white-50">
                      <i className="fa-brands fa-whatsapp"></i>
                    </span>
                    <span className="py-2 px-2 rounded-3 border border-secondary bg-dark text-white-50">
                      <i className="fa-solid fa-link"></i>
                    </span>
                  </div>
                </div>
                <div className=" col-12 cardInfoAuthor rounded-4 py-4 border border-secondary px-3 d-flex gap-2">
                  <img
                    className="col-2 rounded-4 border border-3 border-secondary"
                    src={post.author.avatar}
                  />
                  <div className="d-flex flex-column">
                    <span className=" mainColor1 fw-bold">كاتب المقال</span>
                    <span className="fw-bold fs-4 text-white">
                      {post.author.name}
                    </span>
                    <span className="text-white-50">{post.author.role}</span>
                    <span className=" text-secondary">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="inner position-sticky pt-4"
                style={{ top: "12%" }}
              >
                <div className="d-flex flex-column gap-4">
                  <div className="rounded-4 w-fc py-3 px-3 border border-secondary cardInfoAuthor col-12 d-flex flex-column gap-4 ">
                    <span className="d-flex align-items-center gap-1">
                      <span className="activeHeaderSpan mainColor1 py-2 px-2 rounded-3">
                        <i className="fa-solid fa-list text-orange-500"></i>
                      </span>
                      <span className="fw-bold text-white fs-5">
                        محتويات المقال
                      </span>
                    </span>
                    <div className="d-flex flex-column gap-4 pe-2">
                      {sectionContent.map((item, index) => {
                        const title = item.trim().split("\n")[0];
                        return (
                          <div key={index} className=" d-flex gap-2">
                            <span className="text-white-50 bg-dark px-2 py-1 rounded-3">
                              {index + 1}
                            </span>
                            <span className="text-white">{title}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center gap-3 rounded-4 w-fc py-3 px-3 border border-secondary cardInfoAuthor col-12">
                    <div className="bg-black rounded-4 d-flex flex-column gap-2 col-5 align-items-center py-3 px-2 text-center">
                      <span className="mainColor1">
                        <i className="fa-regular fa-clock fa-xl"></i>
                      </span>
                      <span className="text-white fw-bold fs-5">
                        {post.readTime}
                      </span>
                      <span className="text-white-50">وقت القراءة</span>
                    </div>
                    <div className="bg-black rounded-4 d-flex flex-column gap-2 col-5 align-items-center py-3 px-2 text-center">
                      <span className="mainColor1">
                        <i className="fa-regular fa-calendar fa-xl"></i>
                      </span>
                      <span className="text-white fw-bold fs-5">
                        {post.date}
                      </span>
                      <span className="text-white-50"> تاريخ النشر</span>
                    </div>
                  </div>
                  <div className="activeHeaderSpan rounded-4 w-fc py-3 px-3 col-12 d-flex flex-column align-items-center gap-2">
                    <span className="mainColor1 activeHeaderSpan p-3 rounded-4 w-fc">
                      <i className="fa-solid fa-envelope fa-xl"></i>
                    </span>
                    <span className="fw-bold text-white">لا تفوّت جديدنا</span>
                    <span className="text-white-50">
                      اشترك للحصول على أحدث المقالات
                    </span>
                    <Link
                      to="/ExploreArticles"
                      className="text-decoration-none text-center border-0 rounded-4 col-10 mainColorBg1 text-white fw-bold py-3"
                    >
                      تصفح المزيد
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className=" container py-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className=" d-flex gap-2 align-items-center">
              <span className="activeHeaderSpan mainColor1 py-2 px-2 rounded-3 h-fc">
                <i className="fa-solid fa-images fa-xl"></i>
              </span>
              <div className="d-flex flex-column ">
                <span className="fw-bold fs-4 text-white">مقالات قد تعجبك</span>
                <span className="text-white-50">
                  استكشف المزيد من المحتوى المميز
                </span>
              </div>
            </div>
            <Link
              to="/ExploreArticles"
              className=" text-decoration-none mainColor1 fw-bold"
            >
              عرض الكل{" "}
              <span>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </Link>
          </div>
          <div className="container-fluid">
            <div className="row g-2">
              {randomPosts.map((e) => (
                <div key={e.id} className="col-md-4 cardsPosts">
                  <div className="inner">
                    <div className="my-4 PostsSelect">
                      <div className="position-relative overflow-hidden border border-dark rounded-top-5">
                        <img
                          className="rounded-top-5 imgPosts"
                          src={e.image}
                          alt={e.title}
                        />
                        <div className="iconImageSec position-absolute rounded-5 py-1 px-3 text-white d-flex align-items-center gap-1">
                          <span>{e.category}</span>
                        </div>
                      </div>
                      <div className="infoMainsec rounded-bottom-5 rounded-top-0 py-3 px-2 d-flex flex-column justify-content-between">
                        <h5 className="text-white hoverName fw-bold fs-6">
                          {e.title}
                        </h5>
                        <div className="my-3 d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2">
                            <img
                              className="col-2 rounded-circle"
                              src={e.author.avatar}
                              alt={e.author.name}
                            />
                            <span className="text-white-50">
                              {e.author.name}
                            </span>
                          </div>
                          <span className="text-white-50">{e.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
