import photo from "../assets/images/img_photo.png";
import rate from "../assets/images/Rate.png";

function Testimonial() {
  return (
    <div className="d-flex justify-content-center" id="testi">
      <div className="d-flex flex-column carouselBody">
        <div className="d-flex flex-column align-items-center m-3 text-center gap-3">
          <h1 id="whyTitle">Testimonial</h1>
          <p id="whyDesc">Berbagai review positif dari para pelanggan kami</p>
        </div>

        <div
          id="carouselExample"
          className="carousel slide rounded-3 border  border-opacity-25 p-3 py-5"
          style={{ backgroundColor: "#F1F3FF" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column flex-md-row gap-4 align-items-center">
                  <img className="carouselImage" src={photo} alt="..." />

                  <div className="d-flex flex-column gap-4 gap-sm-2 align-items-center align-items-md-start">
                    <img src={rate} />
                    <h id="carouselDesc">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </h>
                    <h id="carouselName">John Dee 32, Bromo</h>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column flex-md-row gap-4 align-items-center">
                  <img className="carouselImage" src={photo} alt="..." />

                  <div className="d-flex flex-column gap-4 gap-sm-2 align-items-center align-items-md-start">
                    <img src={rate} />
                    <h id="carouselDesc">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </h>
                    <h id="carouselName">John Dee 32, Bromo</h>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column flex-md-row gap-4 align-items-center">
                  <img className="carouselImage" src={photo} alt="..." />

                  <div className="d-flex flex-column gap-4 gap-sm-2 align-items-center align-items-md-start">
                    <img src={rate} />
                    <h id="carouselDesc">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </h>
                    <h id="carouselName">John Dee 32, Bromo</h>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-start justify-content-between">
              <div className="carousel-control-prev d-flex align-items-start align-items-sm-center">
                <button
                  className="bg-transparent border-0"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span className="" aria-hidden="true">
                    {" "}
                    <svg
                      width="57"
                      height="68"
                      viewBox="0 0 57 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.4836 51L21.2902 34L35.4836 17"
                        stroke="black"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
              </div>
              <div className="carousel-control-next d-flex align-items-start align-items-sm-center">
                <button
                  className="bg-transparent border-0"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span className="" aria-hidden="true">
                    <svg
                      width="57"
                      height="68"
                      viewBox="0 0 57 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5164 51L35.7098 34L21.5164 17"
                        stroke="black"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
