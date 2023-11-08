import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
function SertaMerta() {
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
              <div class="row justify-content-center">
                <div class="col-lg-12 ">
                  <div class="isotope-filters project-isotope-btn text-center mb-5">
                    <button class="button active ml-0" data-filter="*">
                      Putusan Pelanggaran
                    </button>
                    <button class="button" data-filter=".cat-1">
                      Sengketa Proses Pemilu
                    </button>
                    <button class="button" data-filter=".cat-2">
                      Pemungutan Suara Ulang
                    </button>
                    <button class="button" data-filter=".cat-3">
                      Organisasi Dan Administrasi
                    </button>
                    <button class="button" data-filter=".cat-3">
                      Perselisihan Hasil Pemilihan Umum
                    </button>
                    <button class="button" data-filter=".cat-3">
                      Sosialisasi
                    </button>
                    <button class="button" data-filter=".cat-3">
                      Piagam Penghargaan
                    </button>
                  </div>
                </div>
              </div>
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
                          <p>
                            PUTUSAN SENGKETA PROSES PEMILU TAHUN 2019 NOMOR :
                            01/PS/BWSL.BYL.14.11/III/2019
                          </p>
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
                          <p>
                            {" "}
                            PUTUSAN PELANGGARAN PIDANA POLITIK UANG PEMILU 2019
                            NOMOR : 10/Pid.Sus/2019/PNByl
                          </p>
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
                          <p>
                            {" "}
                            PUTUSAN ACARA CEPAT PELANGGARAN ADMINISTRATIF PEMILU
                            2019 PERBEDAAN C1 DAN DAA1
                          </p>
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
                    <div></div>
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
