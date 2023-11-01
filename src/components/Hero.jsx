import carImage from "../assets/images/img_car.png";

function Hero({ landingPage }) {
  return (
    <div id="hero" className="hero">
      <div className="row align-items-center w-100 justify-content-between m-0 heroContainer">
        <div className="col-12 col-lg-5 heroText d-flex flex-column">
          <h1 id="heroTitle">Sewa & Rental Mobil Terbaik di kawasan Bogor</h1>
          <p id="heroDesc">
            {" "}
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.{" "}
          </p>
          <a
            href="/cars"
            style={{
              width: "fit-content",
              height: "auto",
              backgroundColor: "#5CB85F",
              display: !landingPage ? "none" : "flex",
            }}
            type="button"
            className="btn text-white"
          >
            Mulai Sewa Mobil
          </a>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-end m-0 p-0">
          <img className="carImage" src={carImage} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
