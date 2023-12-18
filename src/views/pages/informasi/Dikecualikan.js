import React from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import informasi from "../../../aset/informasi.svg";
import "../../../css/dikecualikan.css";

function Dikecualikan() {
  return (
    <div>
      <Navbar />

      <div
        className="img-top d-flex about-area pd-bottom-10 service-area bg-relative pd-top-10 "
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/white-elegant-texture-background_23-2148430934.jpg?w=740&t=st=1698973959~exp=1698974559~hmac=418240e9f8d698b9b7f2c0907f5c8e0013885b44976fa36e713b8801491993db')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="kolom-image mx-4 my-4 d-flex  ">
          <div className="d-lg-flex pt-lg-15 ">
            <div
              className=" text d-flex flex-column gap-3 bg-white shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-4 p-4"
              style={{ marginTop: "50px" }}
            >
              <h2 className="title">Informasi Dikecualikan</h2>
              <li>
                <a
                  className="text-dark"
                  href="https://drive.google.com/file/d/1mW-PRMO3mxAl5kWy9U_2cSjoFVTWyD8E/view"
                  onMouseOver={(event) => {
                    event.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.textDecoration = "none";
                  }}
                  style={{ textDecoration: "none" }}
                >
                  PENETAPAN PPID PENGECUALIAN INFORMASI PENYELESAIAN SENGKETA
                  PEMILIHAN
                </a>
              </li>

              <li>
                <a
                  className="text-dark"
                  onMouseOver={(event) => {
                    event.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.textDecoration = "none";
                  }}
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1xGVaZ2S5ocCsBpDYCd_uqG7KSKFpIwtX/view"
                >
                  PENETAPAN PPID PENGECUALIAN SEBAGIAN PEMBERITAHUAN STATUS
                  LAPORAN
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  onMouseOver={(event) => {
                    event.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.textDecoration = "none";
                  }}
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1lUbJZ1XUAGgam2QS0xga9j78AkA1Vub6/view"
                >
                  PENETAPAN PPID PENGECUALIAN INFORMASI MERORANDUM NASKAH
                  RAHASIA
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  onMouseOver={(event) => {
                    event.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.textDecoration = "none";
                  }}
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1I-gJAi_gFSfNV8t8EoHpmpvgcUgzzyuJ/view"
                >
                  PENETAPAN PPID KLASIFIKASI INFORMASI DIKECUALIKAN
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  onMouseOver={(event) => {
                    event.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.textDecoration = "none";
                  }}
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1446FsNHBT2FqZzhmHJH0jo6hARS4pSaD/view"
                >
                  PENETAPAN PPID INFORMASI PENGAWASAN PEMILU PEMILIHAN YANG
                  DIKECUALIKAN
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  onMouseOver={(event) => {
                    event.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.textDecoration = "none";
                  }}
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1FYaGFbiBeo1CxrumV1Xp0vRlDv09JOat/view"
                >
                  PENETAPAN PPID INFORMASI PENANGANAN PERKARA HUKUM DI
                  PENGADILAN YANG DIKECUALIKAN
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  onMouseOver={(event) => {
                    event.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.textDecoration = "none";
                  }}
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/14VuM1oSmnsiSqt2CCzYICJgUuVREwBVJ/view"
                >
                  PENETAPAN PPID PENGECUALIAN INFORMASI DIKECUALIKAN TENTANG
                  ALAT KERJA PENGAWASAN
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  onMouseOver={(event) => {
                    event.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.textDecoration = "none";
                  }}
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/1VEruZ10wBkatUPsL9fY-yxkQI8f6wr_C/view"
                >
                  PENETAPAN PPID PENGECUALIAN INFORMASI TERKAIT PENANGANAN
                  PELANGGARAN PEMILU
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  onMouseOver={(event) => {
                    event.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.textDecoration = "none";
                  }}
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/15aapWDMSydJ_hlNUMqSXNAbjje_J3Hbz/view"
                >
                  PENETAPAN PPID PENGECUALIAN INFORMASI TERKAIT TINDAK PIDANA
                  PEMILU
                </a>
              </li>
              <li>
                <a
                  className="text-dark"
                  onMouseOver={(event) => {
                    event.target.style.textDecoration = "underline";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.textDecoration = "none"; 
                  }}
                  style={{ textDecoration: "none" }}
                  href="https://drive.google.com/file/d/15aapWDMSydJ_hlNUMqSXNAbjje_J3Hbz/view"
                >
                  PENETAPAN PPID INFORMASI SELEKSI PENGAWAS PEMILU ADHOC YANG
                  DIKECUALIKAN
                </a>
              </li>
            </div>
            <div id="div-img" className=" w-50 d-flex align-item-center ">
              <img id="img" className="w-100" src={informasi} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Dikecualikan;
