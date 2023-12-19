import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import folder from "../../../aset/folder.png";
import informasi from "../../../aset/informasi.svg";
import "../../../css/dikecualikan.css";

function Dikecualikan() {
  return (
    <div>
      <Navbar />
      <div
        className="team-details-page pd-top-120 service-area bg-relative pd-top-60 pd-bottom-90 "
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <img
          className="shape-left-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/3.webp"
          alt="img"
        />
        <img
          className="shape-right-top top_image_bounce"
          src="https://www.solverwp.com/demo/html/itechie/assets/img/shape/4.webp"
          alt="img"
        />
        <div className="form text-center">
          <div className="form-permohonan section-title text-center">
            <h5 id="text1-gabung" className="sub-title double-line text-center">
              Bawaslu Boyolali
            </h5>
            <h2 id="text2-gabung" className="title text-center">
              Informasi Dikecualikan
            </h2>
            {/* <p className="content">Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue
                        atpellentesque laoreet</p> */}
          </div>
          {/* <div className="info">
              <img src={info} className="img" id="img" />
            </div> */}
        </div>
        {/* <div
        className="img-top d-flex col-lg-5 col-10 about-area pd-bottom-10 service-area bg-relative pd-top-10 "
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div className="textIcon row">
            <a href="https://drive.google.com/file/d/1mW-PRMO3mxAl5kWy9U_2cSjoFVTWyD8E/view">
              <div className="col-3">
                <h5 className="text-decoration-none text-dark h4-text">
                  <div>
                    <img src={folder} alt="" />
                  </div>{" "}
                  PENETAPAN PPID PENGECUALIAN INFORMASI PENYELESAIAN SENGKETA
                  PEMILIHAN
                </h5>
              </div>
            </a>
          </div>
          <div></div>
        </div>
      </div> */}
        <div className="style-logo">
          <div class="row d-row-none pmbngks-txt-folder">
            <div class="d-flex col-lg-5 col-10  shadow  p-25 hover-up-2 transition-normal mb-30 border-radius-10 folder-txt">
              <a href="https://drive.google.com/file/d/1mW-PRMO3mxAl5kWy9U_2cSjoFVTWyD8E/view">
                <div class="post-thumb mr-15 img-hover-scale overflow-hidden">
                  <img src={folder} alt="File" width="50" />
                </div>
              </a>

              <div class="post-content media-body">
                <a
                  href="https://drive.google.com/file/d/1mW-PRMO3mxAl5kWy9U_2cSjoFVTWyD8E/view"
                  target="_blank"
                ></a>
                <h6>
                  <a
                    href="https://drive.google.com/file/d/1mW-PRMO3mxAl5kWy9U_2cSjoFVTWyD8E/view"
                    target="_blank"
                  ></a>
                  <a
                    href="https://drive.google.com/file/d/1mW-PRMO3mxAl5kWy9U_2cSjoFVTWyD8E/view"
                    target="_blank"
                    style={{ color: "black" }}
                  >
                    PENETAPAN PPID PENGECUALIAN INFORMASI PENYELESAIAN SENGKETA
                    PEMILIHAN
                  </a>
                </h6>
                <span class="text-muted font-small">Bawaslu Boyolali</span>
              </div>
            </div>
            <div class="d-flex col-lg-5 col-10  shadow  p-25 hover-up-2 transition-normal mb-30 border-radius-10 folder-txt">
              <a
                href="https://drive.google.com/file/d/1xGVaZ2S5ocCsBpDYCd_uqG7KSKFpIwtX/view"
                target="_blank"
              >
                <div class="post-thumb mr-15 img-hover-scale overflow-hidden">
                  <img src={folder} alt="File" width="50" />
                </div>
              </a>
              <div class="post-content media-body">
                <a href="https://www.pendis.kemenag.go.id/"></a>
                <h6>
                  <a
                    href="https://www.pendis.kemenag.go.id/"
                    target="_blank"
                  ></a>
                  <a
                    style={{ color: "black" }}
                    href="https://www.pendis.kemenag.go.id/"
                    target="_blank"
                  >
                    PENETAPAN PPID PENGECUALIAN SEBAGIAN PEMBERITAHUAN STATUS
                    LAPORAN
                  </a>
                </h6>
                <span class="text-muted font-small">Bawaslu Boyolali</span>
              </div>
            </div>
            <div class="d-flex col-lg-5 col-10  shadow  p-25 hover-up-2 transition-normal mb-30 border-radius-10 folder-txt">
              <a
                href="https://drive.google.com/file/d/1lUbJZ1XUAGgam2QS0xga9j78AkA1Vub6/view"
                target="_blank"
              >
                <div class="post-thumb mr-15 img-hover-scale overflow-hidden">
                  <img src={folder} alt="File" width="50" />
                </div>
              </a>
              <div class="post-content media-body">
                <a href="https://haji.kemenag.go.id/" target="_blank"></a>
                <h6>
                  <a href="https://haji.kemenag.go.id/" target="_blank"></a>
                  <a
                    style={{ color: "black" }}
                    href="https://haji.kemenag.go.id/"
                    target="_blank"
                  >
                    PENETAPAN PPID PENGECUALIAN INFORMASI MERORANDUM NASKAH
                    RAHASIA
                  </a>
                </h6>
                <span class="text-muted font-small">Bawaslu Boyolali</span>
              </div>
            </div>
            <div class="d-flex col-lg-5 col-10  shadow p-25 hover-up-2 transition-normal mb-30 border-radius-10 folder-txt">
              <a
                href="https://drive.google.com/file/d/1I-gJAi_gFSfNV8t8EoHpmpvgcUgzzyuJ/view"
                target="_blank"
              >
                <div class="post-thumb mr-15 img-hover-scale overflow-hidden">
                  <img src={folder} alt="File" width="50" />
                </div>
              </a>
              <div class="post-content media-body">
                <a
                  href="https://drive.google.com/file/d/1I-gJAi_gFSfNV8t8EoHpmpvgcUgzzyuJ/view"
                  target="_blank"
                ></a>
                <h6>
                  <a
                    href="https://drive.google.com/file/d/1I-gJAi_gFSfNV8t8EoHpmpvgcUgzzyuJ/view"
                    target="_blank"
                  ></a>
                  <a
                    href="https://drive.google.com/file/d/1I-gJAi_gFSfNV8t8EoHpmpvgcUgzzyuJ/view"
                    target="_blank"
                    style={{color:"black"}}

                  >
                    PENETAPAN PPID KLASIFIKASI INFORMASI DIKECUALIKAN
                  </a>
                </h6>
                <span class="text-muted font-small">Bawaslu Boyolali</span>
              </div>
            </div>

            <div class="d-flex col-lg-5 col-10  shadow p-25 hover-up-2 transition-normal mb-30 border-radius-10 folder-txt">
              <a
                href="https://drive.google.com/file/d/1446FsNHBT2FqZzhmHJH0jo6hARS4pSaD/view"
                target="_blank"
              >
                <div class="post-thumb mr-15 img-hover-scale overflow-hidden">
                  <img src={folder} alt="File" width="50" />
                </div>
              </a>
              <div class="post-content media-body">
                <a
                  href="https://drive.google.com/file/d/1446FsNHBT2FqZzhmHJH0jo6hARS4pSaD/view"
                  target="_blank"
                ></a>
                <h6>
                  <a
                    href="https://drive.google.com/file/d/1446FsNHBT2FqZzhmHJH0jo6hARS4pSaD/view"
                    target="_blank"
                  ></a>
                  <a
                    href="https://drive.google.com/file/d/1446FsNHBT2FqZzhmHJH0jo6hARS4pSaD/view"
                    target="_blank"
                    style={{color:"black"}}

                  >
                    PENETAPAN PPID INFORMASI PENGAWASAN PEMILU PEMILIHAN YANG
                    DIKECUALIKAN
                  </a>
                </h6>
                <span class="text-muted font-small">Bawaslu Boyolali</span>
              </div>
            </div>
            <div class="d-flex col-lg-5 col-10  shadow p-25 hover-up-2 transition-normal mb-30 border-radius-10 folder-txt">
              <a
                href="https://drive.google.com/file/d/1FYaGFbiBeo1CxrumV1Xp0vRlDv09JOat/view"
                target="_blank"
              >
                <div class="post-thumb mr-15 img-hover-scale overflow-hidden">
                  <img src={folder} alt="File" width="50" />
                </div>
              </a>
              <div class="post-content media-body">
                <a
                  href="https://drive.google.com/file/d/1FYaGFbiBeo1CxrumV1Xp0vRlDv09JOat/view"
                  target="_blank"
                ></a>
                <h6>
                  <a
                    href="https://drive.google.com/file/d/1FYaGFbiBeo1CxrumV1Xp0vRlDv09JOat/view"
                    target="_blank"
                  ></a>
                  <a
                    href="https://drive.google.com/file/d/1FYaGFbiBeo1CxrumV1Xp0vRlDv09JOat/view"
                    target="_blank"
                    style={{color:"black"}}

                  >
                    PENETAPAN PPID INFORMASI PENANGANAN PERKARA HUKUM DI
                    PENGADILAN YANG DIKECUALIKAN
                  </a>
                </h6>
                <span class="text-muted font-small">Bawaslu Boyolali</span>
              </div>
            </div>
            <div class="d-flex col-lg-5 col-10  shadow p-25 hover-up-2 transition-normal mb-30 border-radius-10 folder-txt">
              <a
                href="https://drive.google.com/file/d/14VuM1oSmnsiSqt2CCzYICJgUuVREwBVJ/view"
                target="_blank"
              >
                <div class="post-thumb mr-15 img-hover-scale overflow-hidden">
                  <img src={folder} alt="File" width="50" />
                </div>
              </a>
              <div class="post-content media-body">
                <a
                  href="https://drive.google.com/file/d/14VuM1oSmnsiSqt2CCzYICJgUuVREwBVJ/view"
                  target="_blank"
                ></a>
                <h6>
                  <a
                    href="https://drive.google.com/file/d/14VuM1oSmnsiSqt2CCzYICJgUuVREwBVJ/view"
                    target="_blank"
                  ></a>
                  <a
                    href="https://drive.google.com/file/d/14VuM1oSmnsiSqt2CCzYICJgUuVREwBVJ/view"
                    target="_blank"
                    style={{color:"black"}}

                  >
                    PENETAPAN PPID PENGECUALIAN INFORMASI DIKECUALIKAN TENTANG
                    ALAT KERJA PENGAWASAN
                  </a>
                </h6>
                <span class="text-muted font-small">Bawaslu Boyolali</span>
              </div>
            </div>
            <div class="d-flex col-lg-5 col-10  shadow p-25 hover-up-2 transition-normal mb-30 border-radius-10 folder-txt">
              <a
                href="https://drive.google.com/file/d/1VEruZ10wBkatUPsL9fY-yxkQI8f6wr_C/view"
                target="_blank"
              >
                <div class="post-thumb mr-15 img-hover-scale overflow-hidden">
                  <img src={folder} alt="File" width="50" />
                </div>
              </a>
              <div class="post-content media-body">
                <a
                  href="https://drive.google.com/file/d/1VEruZ10wBkatUPsL9fY-yxkQI8f6wr_C/view"
                  target="_blank"
                ></a>
                <h6>
                  <a
                    href="https://drive.google.com/file/d/1VEruZ10wBkatUPsL9fY-yxkQI8f6wr_C/view"
                    target="_blank"
                  ></a>
                  <a
                    href="https://drive.google.com/file/d/1VEruZ10wBkatUPsL9fY-yxkQI8f6wr_C/view"
                    target="_blank"
                    style={{color:"black"}}

                  >
                    PENETAPAN PPID PENGECUALIAN INFORMASI TERKAIT PENANGANAN
                    PELANGGARAN PEMILU
                  </a>
                </h6>
                <span class="text-muted font-small">Bawaslu Boyolali</span>
              </div>
            </div>
            <div class="d-flex col-lg-5 col-10  shadow p-25 hover-up-2 transition-normal mb-30 border-radius-10 folder-txt">
              <a
                href="https://drive.google.com/file/d/15aapWDMSydJ_hlNUMqSXNAbjje_J3Hbz/view"
                target="_blank"
              >
                <div class="post-thumb mr-15 img-hover-scale overflow-hidden">
                  <img src={folder} alt="File" width="50" />
                </div>
              </a>
              <div class="post-content media-body">
                <a
                  href="https://drive.google.com/file/d/15aapWDMSydJ_hlNUMqSXNAbjje_J3Hbz/view"
                  target="_blank"
                ></a>
                <h6>
                  <a
                    href="https://drive.google.com/file/d/15aapWDMSydJ_hlNUMqSXNAbjje_J3Hbz/view"
                    target="_blank"
                  ></a>
                  <a
                    href="https://drive.google.com/file/d/15aapWDMSydJ_hlNUMqSXNAbjje_J3Hbz/view"
                    target="_blank"
                    style={{color:"black"}}

                  >
                    PENETAPAN PPID PENGECUALIAN INFORMASI TERKAIT TINDAK PIDANA
                    PEMILU{" "}
                  </a>
                </h6>
                <span class="text-muted font-small">Bawaslu Boyolali</span>
              </div>
            </div>
            <div class="d-flex col-lg-5 col-10  shadow p-25 hover-up-2 transition-normal mb-30 border-radius-10 folder-txt">
              <a
                href="https://drive.google.com/file/d/15aapWDMSydJ_hlNUMqSXNAbjje_J3Hbz/view"
                target="_blank"
              >
                <div class="post-thumb mr-15 img-hover-scale overflow-hidden">
                  <img src={folder} alt="File" width="50" />
                </div>
              </a>
              <div class="post-content media-body">
                <a
                  href="https://drive.google.com/file/d/15aapWDMSydJ_hlNUMqSXNAbjje_J3Hbz/view"
                  target="_blank"
                ></a>
                <h6>
                  <a
                    href="https://drive.google.com/file/d/15aapWDMSydJ_hlNUMqSXNAbjje_J3Hbz/view"
                    target="_blank"
                  ></a>
                  <a
                    href="https://drive.google.com/file/d/15aapWDMSydJ_hlNUMqSXNAbjje_J3Hbz/view"
                    target="_blank"
                    style={{color:"black"}}

                  >
                    PENETAPAN PPID INFORMASI SELEKSI PENGAWAS PEMILU ADHOC YANG
                    DIKECUALIKAN{" "}
                  </a>
                </h6>
                <span class="text-muted font-small">Bawaslu Boyolali</span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-8 widget widget_catagory logo-dikecualikan"
            style={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              // padding: "10px 30px 10px 30px",
              borderRadius: "10px",
              background: "#F1F6F9",
              float: "inline-end",
            }}
          >
            <h4 className="widget-title">
              Tautan{" "}
              <span className="text-primary">
                <strong>Lembaga</strong>
              </span>
            </h4>
            <br />
            <ul className="catagory-items">
              <li>
                <a
                  href="https://bawaslu.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/Bawaslu-RI-300x73-1.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://dkpp.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/dkpp-300x73-1.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.mkri.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/MAHKAMAKONSTITUSI-300x73-1.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://jateng.bawaslu.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/KPU-300x73-1.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="https://jateng.bawaslu.go.id/" target="_blank">
                  <img
                    src="https://boyolali.bawaslu.go.id/cepogo/2023/09/bawaslu-jateng-300x73-1.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          {/*  */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Dikecualikan;
