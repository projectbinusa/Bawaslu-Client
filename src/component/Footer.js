import React from "react";

function Footer() {
  return (
    <>
      {/* <!-- footer area start --> */}
      <footer class="footer-area bg-cover">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_about">
                <h4 class="widget-title">Bawaslu</h4>
                <div class="details">
                  <p>Melalui website ini, Bawaslu Kabupaten Boyolali akan selalu memperbaharui informasi terkait pengawasan dan pemantauan pemilu.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_nav_menu">
                <h4 class="widget-title">Kategori</h4>
                <ul>
                  <li>
                    <a href="">Berita</a>
                  </li>
                  <li>
                    <a href="">Kehumasan</a>
                  </li>
                  <li>
                    <a href="">OSDM & Diklat</a>
                  </li>
                  <li>
                    <a href="">Penanganan Pelanggaran</a>
                  </li>
                  <li>
                    <a href="">Pencegahan</a>
                  </li>
                  <li>
                    <a href="">Pengumuman</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_nav_menu">
                <br />
                <br />
                <ul>
                  <li>
                    <a href="">Penyelesaian Sengketa</a>
                  </li>
                  <li>
                    <a href="">Sosialisasi</a>
                  </li>
                  <li>
                    <a href="">Tak BerKatagori</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="widget widget_about">
                <h4 class="widget-title">Alamat</h4>
                <div class="details">
                  <p>Jl. Garuda No. 01, Banaran, Boyolali, 57313</p>
                  <p>Telpon (0276) 320420</p>
                  <p> E-mail set.boyolali@bawaslu.go.id</p>
                  <ul class="social-media">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom text-center">
          <div class="container">
            <div class="row">
              <div class="col-md-12 align-self-center">
                <p>© 2023 Bawaslu Kabupaten Boyolali.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer area end --> */}
    </>
  );
}

export default Footer;
