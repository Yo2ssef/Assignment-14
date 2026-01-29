import { Link } from "react-router";

export default function CardsMainSec({ allData }) {
  const { id, title, excerpt, category, author, image, date, readTime } =
    allData;
  return (
    <>
      <Link
        to={`/InfoCards/${id}`}
        state={{ postData: allData }}
        className="text-decoration-none d-flex flex-column flex-lg-row my-4 articlesSelect"
        datatype={id}
      >
        <div className=" position-relative overflow-hidden border border-dark roundedMe">
          <img className=" imgMainSec" src={image} alt={title} />
          <div className="iconImageSec position-absolute rounded-5  py-1 px-3 text-white d-flex align-items-center gap-1">
            <span>
              <i className="fa-solid fa-star fa-2xs"></i>
            </span>
            <span>مميز</span>
          </div>
        </div>
        <div className="infoMainsec py-5 pe-5 ps-4 d-flex flex-column justify-content-between">
          <div className="d-flex flex-column gap-2">
            <div className=" d-flex gap-2">
              <div className="activeHeaderSpan px-3 rounded-5 w-fc d-flex align-items-center gap-1">
                <span className="mainColor1">{category}</span>
              </div>
              <span className="text-white-50 fs-6">
                <span>
                  {" "}
                  <i className="fa-regular fa-clock"></i>
                </span>{" "}
                {readTime}
              </span>
            </div>
            <h3 className="fw-bold text-white hoverName">{title}</h3>
            <p className="text-white-50 fw-normal">{excerpt}</p>
          </div>
          <div className=" d-flex justify-content-between">
            <div className=" d-flex gap-3">
              <div className=" position-relative col-3">
                <img
                  className="border border-dark-subtle col-12 rounded-circle"
                  src={author.avatar}
                  alt={author.name}
                />
                <div className="xx3 border rounded-circle position-absolute bottom-0 start-0"></div>
              </div>
              <div>
                <h6 className=" m-0 fw-bolder text-white">{author.name}</h6>
                <span className=" text-white-50">{date}</span>
              </div>
            </div>
            <span className="mainColor1 fw-normal">
              اقرأ المقال{" "}
              <span>
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
