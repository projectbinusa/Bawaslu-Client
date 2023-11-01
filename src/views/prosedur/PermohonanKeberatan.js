import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

function PermohonanKeberatan() {
  return (
    //  how it work area start
    <>
      <Navbar />
      <div class="how-it-work-area bg-blue pd-top-110 pd-top-110">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title style-white text-center">
                <h5 class="sub-title double-line">Bawaslu Boyolali</h5>
                <h2 class="title">Tata Cara Pengajuan Keberatan</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="single-work-inner style-two text-center">
                <div class="count-wrap">
                  <div class="count-inner">
                    <h2>01</h2>
                  </div>
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>Lambat Terima</h4>
                    <p style={{ textAlign: "justify" }}>
                      Paling lambat 30 hari kerja setelah diterimanya
                      pemberitahuan tertulis dan atau surat keputusan PPID
                      tentanf penolakan permohonan informasi publik
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-work-inner style-two text-center">
                <div class="count-wrap">
                  <div class="count-inner">
                    <h2>02</h2>
                  </div>
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>Ajuan Keberatan</h4>
                    <p style={{ textAlign: "justify" }}>
                      Pemohon informasi publik mengajukan keberatan kepada
                      atasan PPID melalui surat,fax,telepon,atau datang langsung
                      ke tempat layanan PPID
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-work-inner style-two text-center">
                <div class="count-wrap">
                  <div class="count-inner">
                    <h2>03</h2>
                  </div>
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>Menerima Tanda Bukti</h4>
                    <p style={{ textAlign: "justify", height: "115px" }}>
                      Pemohon informasi publik menerima tanda bukti pengajuan
                      keberatan dari petugas informasi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-work-inner style-two text-center">
                <div class="count-wrap">
                  <div class="count-inner">
                    <h2>04</h2>
                  </div>
                </div>
                <div class="details-wrap">
                  <div class="details-inner">
                    <h4>Menerima Tanggapan</h4>
                    <p style={{ textAlign: "justify", height: "115px" }}>
                      Pemohon informasi publik menerima tanggapan paling lambat
                      30 hari kerja sejak diterimanya keberatan secara tertulis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
    // how it work area end
  );
}

export default PermohonanKeberatan;
