import React from "react";
import "../../css/InformasiStandarProsedur.css";
// import OwlCarousel from "react-owl-carousel2";
// import "react-owl-carousel2/src/owl.carousel.css";
// import "react-owl-carousel2/src/owl.theme.default.css";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import img1 from "../../aset/boyolali.img1.jpg";
import img2 from "../../aset/boyolali.img2.jpeg";
import img3 from "../../aset/boyolali.img3.jpg";
// import "../../../css/owl.css";

function SertaMerta() {
  const options = {
    items: 1, // Jumlah item yang akan ditampilkan dalam satu slide
    nav: true, // Tombol navigasi
    dots: true, // Indikator titik
  };
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        class="project-area pd-top-115 pd-bottom-90"
      >
        <div
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        >
          <div class="container">
            <div className="display">
              <div id="carouselExample" class="carousel slide">
                <div id="caraousel" class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      className="img-boyolali-3"
                      src={img3}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-boyolali-1"
                      src={img1}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      className="img-boyolali-2"
                      src={img2}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <h1 className="hh1">STANDAR OPERASIONAL PROSEDUR (SOP)</h1>
            <h1>_________</h1>
            <br></br>
            <div className="card mb-4 shadow">
              <div className="card-header bg-primary text-light">
                <div style={{ display: "flex" }}>
                  <div className="col">
                    <h4>Putusan Pelanggaran</h4>
                  </div>
                  <div className="col">
                    {/* <button className="btn btn-primary float-end"> Tambah
                        </button> */}
                  </div>
                </div>
              </div>
              <div className="card-body bg-body-tertiary table-container rounded">
                <table className="table table1 responsive-3 table-striped table-hover border rounded">
                  <thead>
                    <tr>
                      <th scope="col"> Dokumen</th>
                      <th scope="col"> Unduh / Lihat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-cell="dokumen" scope="row">
                        <p>SOP PELAYANAN INFORMASI</p>
                      </td>
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENANGANAN KEBERATAN INFORMASI</p>
                      </td>
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENANGANAN SENGKETA INFORMASI</p>
                      </td>{" "}
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENGELOLAAN INFORMASI DIKECUALIKAN</p>
                      </td>{" "}
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENGELOLAAN INFORMASI PUBLIK</p>
                      </td>{" "}
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENYAMPAIAN LAYANAN INFORMASI</p>
                      </td>{" "}
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP PENYUSUNAN DAFTAR INFORMASI PUBLIK</p>
                      </td>{" "}
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td data-cell="unduh">
                        <p> SOP UJI KONSEKUENSI </p>
                      </td>{" "}
                      <td>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-download"></i>
                        </button>
                        <button
                          className="bg-warning text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i class="fa-solid fa-circle-info"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default SertaMerta;
