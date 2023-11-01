import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

function WaktuLayanan() {
  return (
    <div>
      <Navbar />
      {/* <!-- why choose area start --> */}
      <div class="why-choose pd-top-100 pd-bottom-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-8 order-lg-last">
              <div class="about-mask-bg-wrap about-mask-bg-wrap-2 mb-4 mb-lg-0">
                <img
                  class="shape-image-sm top_image_bounce"
                  src="https://solverwp.com/demo/html/itechie/assets/img/about/2sm.webp"
                  alt="img"
                />
                <img
                  class="shape-image"
                  src="https://solverwp.com/demo/html/itechie/assets/img/about/2s.webp"
                  alt="img"
                />
                <div class="thumb">
                  <img
                    src="https://solverwp.com/demo/html/itechie/assets/img/about/2.webp"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-lg-first align-self-center">
              <div class="section-title px-lg-5 mb-0">
                <h5 class="sub-title right-line">Bawaslu Boyolali</h5>
                <h2 class="title">Waktu Pelayanan Informasi</h2>
                {/* <p class="content">Maecenas tempus, tellus eget condime honcus semgs semper libero sit amet
                            adipiscingem neque.</p> */}
                <div class="choose-wrap mt-4">
                  <div class="media single-choose-inner">
                    <div class="media-left">
                      <div class="icon">
                        <i class="fa-solid fa-phone"></i>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4>Hubungi Kami</h4>
                      <p>(0276)320420</p>
                    </div>
                  </div>
                  <div class="media single-choose-inner mb-3">
                    <div class="media-left">
                      <div class="icon">
                        <i class="fa-solid fa-clock"></i>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4>Jam Kerja</h4>
                      <p>Dari jam 08.00 - 15.00</p>
                    </div>
                  </div>
                  <div class="media single-choose-inner mb-3">
                    <div class="media-left">
                      <div class="icon">
                        <i class="fa-solid fa-calendar-days"></i>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4>Hari Kerja</h4>
                      <p>Senin s.d Jum'at</p>
                    </div>
                  </div>
                  <div class="media single-choose-inner mb-3">
                    <div class="media-left">
                      <div class="icon">
                        <i class="fa-solid fa-envelope"></i>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4>Email</h4>
                      <p>panwaskabboyolali05@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WaktuLayanan;
