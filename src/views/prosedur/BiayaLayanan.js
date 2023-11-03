import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import biaya from "../../aset/biaya.png";

function BiayaLayanan() {
  return (
    // <!-- team details page start -->
    <>
      <Navbar />
      {/* <!-- page title start --> */}
      <div class="breadcrumb-area bg-black bg-relative">
        <div
          class="banner-bg-img"
          style={{
            backgroundImage: `url('https://www.solverwp.com/demo/html/itechie/assets/img/bg/1.webp') `,
          }}
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-7 col-lg-8">
              <div class="breadcrumb-inner text-center">
                <h2 style={{ color: "white", fontWeight: 700, fontSize: 60 }}>
                  Biaya Layanan
                </h2>
                <ul class="page-list">
                  <li>
                    <a href="/" style={{ textDecoration: "none" }}>
                      Home
                    </a>
                  </li>
                  <li>Biaya Layanan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page title end --> */}
      <div
        class="team-details-page pd-top-120 service-area bg-relative pd-top-60 pd-bottom-90 "
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          class="shape-left-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/3.webp"
          alt="img"
        />
        <img
          class="shape-right-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/4.webp"
          alt="img"
        />
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <div class="thumb image-hover-animate me-lg-5">
                <img src={biaya} alt="img" />
              </div>
            </div>
            <div class="col-lg-6 col-12 align-self-center">
              <div class="team-details-info">
                <h3>Biaya Layanan</h3>
                <p class="designation">TIDAK DIPUNGUT BIAYA (GRATIS)</p>
                <p class="content">
                  PPID Bawaslu RI menyediakan informasi secara GRATIS (tidak
                  dipungut biaya). Sedangkan untuk penggandaan, pemohon
                  informasi publik dapat melakukan penggandaan/ foto copy
                  sendiri di sekitar Kantor Bawaslu atau biaya penggandaan
                  ditanggung pemohon sendiri,atau pemohon dapat menyediakan CD
                  atau flashdisk untuk merekam data atau informasi
                </p>
                {/* <ul class="details-info">
                            <li><strong>Phone : </strong> 123 - 456 - 789</li>
                            <li><strong>Email : </strong> solverwp@gmail.com</li>
                            <li><strong>Website : </strong> solverwp.com</li>
                            <li><strong>Experiences : </strong> 08 Years</li>
                        </ul> */}
                {/* <ul class="social-media">
                            <li>
                                <a class="facebook" href="#">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a class="twitter" href="#">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a class="instagram" href="#">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a class="youtube" href="#">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BiayaLayanan;
