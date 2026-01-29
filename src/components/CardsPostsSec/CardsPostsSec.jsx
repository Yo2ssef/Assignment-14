import { Link } from "react-router";

export default function CardsPostsSec({ allData }) {
  const { id, title, excerpt, author, image, date, readTime, category } =
    allData;

  return (
    <>
      <Link
        to={`/InfoCards/${id}`}
        state={{ postData: allData }}
        className=" text-decoration-none  col-md-4 cardsPosts"
        datatype={id}
      >
        <div className="inner">
          <div className="my-4 PostsSelect">
            <div className=" position-relative overflow-hidden border border-dark rounded-top-5 overflow-hidden">
              <img className="rounded-top-5 imgPosts" src={image} alt={title} />
              <div className="iconImagePosts  position-absolute rounded-5 px-2 text-white d-flex align-items-center gap-1">
                <span>{category}</span>
              </div>
            </div>
            <div className="infoMainsec rounded-bottom-5 rounded-top-0 py-3 px-2 d-flex flex-column justify-content-between">
              <div className="border-bottom border-secondary pb-4 d-flex flex-column gap-2 mb-3">
                <span className="text-white-50 fs-6">
                  <span>
                    <i className="fa-regular fa-clock"></i>
                  </span>
                  <span> {readTime}</span>
                  <span> • </span>
                  <span>{date}</span>
                </span>
                <h3 className="fw-bold text-white fs-5 textCardaPosts">
                  {title}
                </h3>
                <span className="text-white-50 fs-6">{excerpt}</span>
              </div>
              <div className="d-flex justify-content-between align-content-center">
                <div className="d-flex gap-2 align-items-center">
                  <div className="col-3">
                    <img
                      className="border border-dark-subtle col-12 rounded-circle"
                      src={author.avatar}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <h4 className="fs-6 m-0 text-white">{author.name}</h4>
                    <span className="text-white-50">{author.role}</span>
                  </div>
                </div>
                <button className="activeHeaderSpan btnCardsPosts rounded-circle mainColor1 h-fc py-1">
                  <span>
                    <i className="fa-solid fa-angle-left"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
