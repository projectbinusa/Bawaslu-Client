import React, { useEffect, useState } from "react";
import Footer from "../../../component/Footer";
import Navbar from "../../../component/Navbar";
import "../../../css/regulasi.css";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { API_DUMMY } from "../../../utils/base_URL";

function Regulasi() {
  const [table1Visible, setTable1Visible] = useState(true);
  const [table2Visible, setTable2Visible] = useState(false);
  const [table3Visible, setTable3Visible] = useState(false);
  const [table4Visible, setTable4Visible] = useState(false);
  const [table5Visible, setTable5Visible] = useState(false);
  const [table6Visible, setTable6Visible] = useState(false);
  const [table7Visible, setTable7Visible] = useState(false);
  const [table8Visible, setTable8Visible] = useState(false);
  const [table9Visible, setTable9Visible] = useState(false);

  const showTable = (tableNumber) => {
    setTable1Visible(false);
    setTable2Visible(false);
    setTable3Visible(false);
    setTable4Visible(false);
    setTable5Visible(false);
    setTable6Visible(false);
    setTable7Visible(false);
    setTable8Visible(false);
    setTable9Visible(false);

    switch (tableNumber) {
      case "Undang Undang":
        setTable1Visible(true);
        break;
      case "Peraturan Pemerintah":
        setTable2Visible(true);
        break;
      case "Peraturan Mahkamah Agung":
        setTable3Visible(true);
        break;
      case "Peraturan Komisi Informasi":
        setTable4Visible(true);
        break;
      case "Peraturan Menteri":
        setTable5Visible(true);
        break;
      case "Perbawaslu":
        setTable6Visible(true);
        break;
      case "Penetapan PPID":
        setTable7Visible(true);
        break;
      case "Surat Edaran":
        setTable8Visible(true);
        break;
      case "Intruksi Kabupaten":
        setTable9Visible(true);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar />
      {/* <!-- page title end --> */}
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
            <div id="display" className="d-flex gap-5">
              <div class="row justify-content-center">
                <div class="col-lg-12 ">
                  <div class="isotope-filters project-isotope-btn text-left mb-5">
                    {/* {list.map((menu) => {
                      return (
                        <button
                          style={{ width: "250px", textAlign: "left" }}
                          class="button ml-0"
                          data-filter="*"
                           onClick={() => showTable("Undang Undang")}
                          onClick={() => showTable(`${menu.menuRegulasi}`)}
                        >
                          {menu.menuRegulasi}
                        </button>
                      );
                    })} */}
                    <button
                      style={{ width: "210px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Undang Undang")}
                    >
                      Undang -Undang
                    </button>
                    <button
                      style={{ width: "210px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Peraturan Pemerintah")}
                    >
                      Peraturan Pemerintah
                    </button>
                    <button
                      style={{ width: "210px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Peraturan Mahkamah Agung")}
                    >
                      Peraturan Mahkamah Agung
                    </button>
                    <button
                      style={{ width: "210px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Peraturan Komisi Informasi")}
                    >
                      Peraturan Komisi Informasi
                    </button>
                    <button
                      style={{ width: "210px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Peraturan Menteri")}
                    >
                      Peraturan Menteri
                    </button>
                    <button
                      style={{ width: "210px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Perbawaslu")}
                    >
                      Perbawaslu{" "}
                    </button>
                    <button
                      style={{ width: "210px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Penetapan PPID")}
                    >
                      Penetapan PPID
                    </button>
                    <button
                      style={{ width: "210px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Surat Edaran")}
                    >
                      Surat Edaran
                    </button>
                    <button
                      style={{ width: "210px", textAlign: "left" }}
                      className="button"
                      data-filter="*"
                      onClick={() => showTable("Intruksi Kabupaten")}
                    >
                      Intruksi Kabupaten
                    </button>
                  </div>
                </div>
              </div>
              {/* Undang undang */}
              <div
                className="card mb-4 shadow"
                id="table1"
                style={{
                  display: table1Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div id="display">
                    <div className="">
                      <h4>Undang Undang</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>UU NOMOR 14 TAHUN 2008</p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1Sf-vNEt4V5cQ6kg32WgxqlFlDkZxxAHO/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> UU NOMOR 25 TAHUN 2009</p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1-5_o8W3UTPODVzee4Z_E_bTioxXgFXs8/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> UU NOMOR 43 TAHUN 2009</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1fcYV1tFzHZZwg9g5tununbDqB4qOQvhr/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> UU NOMOR 10 TAHUN 2016</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1YpeyQu3I7t9fmm1YOUKqIuSkBKAR08nd/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> UU NOMOR 7 TAHUN 2017</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1vgHG4BSL8egftdQYReQFExYc3vEdjdwh/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Peratuan Pemerintah */}
              <div
                className="card mb-4 shadow"
                id="table2"
                style={{
                  display: table2Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Peratuan Pemerintah</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>PP RI NOMOR 61 TAHUN 2010</p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1Sf-vNEt4V5cQ6kg32WgxqlFlDkZxxAHO/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PP RI NOMOR 28 TAHUN 2012</p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1-5_o8W3UTPODVzee4Z_E_bTioxXgFXs8/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PP RI NOMOR 96 TAHUN 2012</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1fcYV1tFzHZZwg9g5tununbDqB4qOQvhr/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Peraturan Mahkamah Agung */}
              <div
                className="card mb-4 shadow"
                id="table3"
                style={{
                  display: table3Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Peraturan Mahkamah Agung</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>PERMA NOMOR 2 TAHUN 2011 </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                          {/* <button
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
                          </button> */}
                        </td>
                      </tr>
                    </tbody>

                    <div></div>
                  </table>
                </div>
              </div>
              {/* Peraturan Komisi Informasi */}
              <div
                className="card mb-4 shadow"
                id="table4"
                style={{
                  display: table4Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Peraturan Komisi Informasi</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>PERKI NOMOR 1 TAHUN 2010</p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1Sf-vNEt4V5cQ6kg32WgxqlFlDkZxxAHO/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERKI NOMOR 1 TAHUN 2014</p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1-5_o8W3UTPODVzee4Z_E_bTioxXgFXs8/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERKI NOMOR 1 TAHUN 2017</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1fcYV1tFzHZZwg9g5tununbDqB4qOQvhr/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERKI NOMOR 1 TAHUN 2019</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1YpeyQu3I7t9fmm1YOUKqIuSkBKAR08nd/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERKI NOMOR 1 TAHUN 2021</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1vgHG4BSL8egftdQYReQFExYc3vEdjdwh/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Peraturan Menteri */}
              <div
                className="card mb-4 shadow"
                id="table5"
                style={{
                  display: table5Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Peraturan Menteri</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>PERMENKOMINFO RI NOMOR 20 TAHUN 2016</p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                          {/* <button
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
                          </button> */}
                        </td>
                      </tr>
                    </tbody>

                    <div></div>
                  </table>
                </div>
              </div>
              {/* Perbawaslu */}
              <div
                className="card mb-4 shadow"
                id="table6"
                style={{
                  display: table6Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Perbawaslu</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>PERBAWASLU NOMOR 1 TAHUN 2017</p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1Sf-vNEt4V5cQ6kg32WgxqlFlDkZxxAHO/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 10 TAHUN 2019</p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1-5_o8W3UTPODVzee4Z_E_bTioxXgFXs8/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 1 TAHUN 2020</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1fcYV1tFzHZZwg9g5tununbDqB4qOQvhr/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 4 TAHUN 2020</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1YpeyQu3I7t9fmm1YOUKqIuSkBKAR08nd/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 6 TAHUN 2020</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1vgHG4BSL8egftdQYReQFExYc3vEdjdwh/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 7 TAHUN 2020</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1m7GKabb_6OzxJgOBLceGH6K60Ax8NVTP/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 10 TAHUN 2020</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 11 TAHUN 2020</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU TAHUN 12 TAHUN 2020</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 13 TAHUN 2020</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 1 TAHUN 2022</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 5 TAHUN 2022</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 5 TAHUN 2022</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 7 TAHUN 2022</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 8 TAHUN 2022</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 9 TAHUN 2022</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="unduh">
                          <p> PERBAWASLU NOMOR 2 TAHUN 2023</p>
                        </td>{" "}
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Penetapan PPID */}
              <div
                className="card mb-4 shadow"
                id="table7"
                style={{
                  display: table7Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Penetapan PPID</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            PENETAPAN PPID PENGECUALIAN INFORMASI PENYELESAIAN
                            SENGKETA PEMILIHAN{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            PENETAPAN PPID PENGECUALIAN SEBAGIAN PEMBERITAHUAN
                            STATUS LAPORAN{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            PENETAPAN PPID PENGECUALIAN INFORMASI MERORANDUM
                            NASKAH RAHASIA{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            PENETAPAN PPID KLASIFIKASI INFORMASI DIKECUALIKAN{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            PENETAPAN PPID INFORMASI PENGAWASAN PEMILU PEMILIHAN
                            YANG DIKECUALIKAN{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            PENETAPAN PPID INFORMASI PENANGANAN PERKARA HUKUM DI
                            PENGADILAN YANG DIKECUALIKAN{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            PENETAPAN PPID PENGECUALIAN INFORMASI DIKECUALIKAN
                            TENTANG ALAT KERJA PENGAWASAN{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            PENETAPAN PPID PENGECUALIAN INFORMASI TERKAIT
                            PENANGANAN PELANGGARAN PEMILU{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            PENETAPAN PPID PENGECUALIAN INFORMASI TERKAIT TINDAK
                            PIDANA PEMILU{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            PENETAPAN PPID INFORMASI SELEKSI PENGAWAS PEMILU
                            ADHOC YANG DIKECUALIKAN{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1qsxnYjlYzzbdTObydL8m-eWKvuESAHqF/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Surat Edaran */}
              <div
                className="card mb-4 shadow"
                id="table8"
                style={{
                  display: table8Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Surat Edaran</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body bg-body-tertiary table-container rounded">
                  <table className="table table1 responsive-3 table-striped table-hover border rounded">
                    <thead>
                      <tr>
                        <th scope=""> Dokumen</th>
                        <th scope=""> Unduh / Lihat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            SE PENINGKATAN PENGELOLAAN, PELAYANAN KEHUMASAN DAN
                            KETERBUKAAN INFORMASI PUBLIK{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1ZXIWgJN3Rdu_nKQmLftusaXKxH6eOTC-/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>SE PEMBATASAN KELUAR DAERAH </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1gvaV1s1BMS9i507c5ttP1Jqgnh-vlG1f/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>SE PENGAWASAN PENUNDAAN TAHAPAN </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1FeEUCLRRoxufkXiuHknHiLO_PakykxNA/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>SE PEMBATASAN KEGIATAN BEPERGIAN </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1Q_asmdCWVJB_s07sYPcTcWD7VqknBkJ5/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>SE JUKNIS WFH DI LINGKUNGAN BAWASLU </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1BF7RgANS2Ah2ZXUGCLa_nb40_C42CVb4/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>SE PERPANJANGAN MASA PENYESUAIAN SISTEM KERJA </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1gDBHdRkuECLpIRqEAGbqcpntpuetfgid/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            SE HIMBAUAN KAMPANYE NASIONAL PENCEGAHAN COVID-19{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1OWHgzT2gqVOTZz5SHlUuZmpX6NB_BhY6/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>SE HARI PEMUNGUTAN SUARA PILKADA 2020 </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1OWHgzT2gqVOTZz5SHlUuZmpX6NB_BhY6/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>SE CUTI BERSAMA DI LINGKUNGAN BAWASLU </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1MJo5fT16noSNnJdBnajjh-u5Z16wDRyN/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            SE PENINGKATAN PENGELOLAAN DAN PELAYANAN KEHUMASAN
                            DAN KETERBUKAAN INFORMASI PUBLIK{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1s1R-sqrXo5lVQ8uQAGtfp9uhdN89HNmS/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            SE PELAYANAN INFORMASI PADA BAWASLU PROVINSI DAN
                            KABUPATEN/KOTA{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1iXu3P8GfgaiCwK-o2byh066xfriGFRy-/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                    <div></div>
                  </table>
                </div>
              </div>
              {/* Intruksi Kabupaten */}
              <div
                className="card mb-4 shadow"
                id="table9"
                style={{
                  display: table9Visible ? "table" : "none",
                  width: "100%",
                }}
              >
                <div className="card-header bg-primary text-light">
                  <div style={{ display: "flex" }}>
                    <div className="">
                      <h4>Intruksi Kabupaten</h4>
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
                          <p>INSTRUKSI BUPATI BOYOLALI NOMOR 1 TAHUN 2021 </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1Ejk1oPskX2yZ_-5eeMmSfyBv2SwVAz3B/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>
                            SURAT EDARAN BUPATI BOYOLALI TENTANG PERPANJANGAN
                            PPKM{" "}
                          </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1VLeU7W-KuWnMyK_GX_L6wFfkT-P6CD4l/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td data-cell="dokumen" scope="row">
                          <p>PERATURAN BUPATI BOYOLALI NOMOR 49 TAHUN 2020 </p>
                        </td>
                        <td>
                          <a
                            className="bg-warning text-light"
                            style={{
                              border: "none",
                              padding: "7px",
                              paddingLeft: "13px",
                              paddingRight: "13px",
                              borderRadius: "5px",
                              marginRight: "10px",
                              marginLeft: "30px",
                            }}
                            href="https://drive.google.com/file/d/1D3niXB8VaHhvi6g6l_zczyQHTzIBEpAj/view"
                          >
                            <i class="fa-solid fa-download"></i>
                          </a>
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
      </div>
      {/* <!-- project area end --> */}

      <Footer />
    </div>
  );
}

export default Regulasi;
