import React, { useEffect, useState } from "react";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import axios from "axios";
import { API_DUMMY } from "../../utils/base_URL";
import { Pagination } from "@mui/material";
import Bawaslu from "../../component/Bawaslu";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";

function Berita() {
  const [scroll, setScroll] = useState(false);
  const [list, setList] = useState([]);
  const [listTerbaru, setListTerbaru] = useState([]);
  const [category, setCategory] = useState([]);
  const [november, setNovember] = useState([]);
  const currentYear = new Date().getFullYear();
  const [monthlyData, setMonthlyData] = useState({});
  const [monthlyTotal, setMonthlyTotal] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalElements: 0,
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [gambarTerbaru, setGambarTerbaru] = useState("");

  const getAll = async (page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/all?page=${
          page - 1
        }&size=10&sortBy=id&sortOrder=desc`
      );
      setList(response.data.data.content);
      setPaginationInfo({
        totalPages: response.data.data.totalPages,
        totalElements: response.data.data.totalElements,
      });
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const getCategoryBerita = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/category-berita/all-limit-7`
      );
      setCategory(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const getAllTerbaru = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/terbaru`
      );
      setListTerbaru(response.data.data);
      console.log(response.data.data);
      if (response.data.data.length > 0) {
        setGambarTerbaru(response.data.data[0].image);
        console.log(response.data.data[0].image);
      }
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const archivingMonths = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    return {
      month,
      year: currentYear,
      label: new Date(currentYear, month - 1, 1).toLocaleString("id-ID", {
        month: "long",
      }),
    };
  });

  const getAllRekap = async (tahun_bulan) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/arsip?bulan=${tahun_bulan}`
      );
      return response.data.data;
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const newData = {};

      for (const monthData of archivingMonths) {
        const tahun_bulan = `${monthData.year}${monthData.month}`;
        const data = await getAllRekap(tahun_bulan);
        newData[tahun_bulan] = data;
      }

      setMonthlyData(newData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    getCategoryBerita();
  }, []);

  useEffect(() => {
    getAllTerbaru();
  }, []);

  useEffect(() => {
    getAll(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const newData = {};
      const newMonthlyTotal = {}; // State baru

      for (const monthData of archivingMonths) {
        const tahun_bulan = `${monthData.year}-${monthData.month}`;
        const data = await getAllRekap(tahun_bulan);
        newData[tahun_bulan] = data;
        newMonthlyTotal[tahun_bulan] = data.length; // Menghitung total data berita
      }

      setMonthlyData(newData);
      setMonthlyTotal(newMonthlyTotal); // Update state total data berita
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {/* <!-- page title start --> */}
      <div
        className="service-area bg-overlay pd-top-120 pd-bottom-90"
        style={{
          backgroundImage: `url(${gambarTerbaru})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="section-title single-service-inner border-radius-5 p-35 style-white mb-lg-0"
                style={{
                  backgroundImage: `url(${gambarTerbaru})`,
                  minHeight: "93%",
                }}
              >
                <h2 className="title title-berita mt-4">
                  {listTerbaru.length > 0 && listTerbaru[0].judulBerita}
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {listTerbaru.slice(1, 5).map((berita, index) => (
                  <div className="col-md-6" key={index}>
                    <div
                      className="single-service-inner style-black text-left"
                      style={{
                        backgroundImage: `url(${berita.image})`,
                        minHeight: "93%",
                      }}
                    >
                      <div className="icon-box">
                        <i className="icomoon-layer"></i>
                      </div>
                      <div className="details detailss">
                        <h3>
                          <a className="isiBerita">{berita.judulBerita}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="widget widget_search">
                  <h4>
                    {" "}
                    <strong>
                      Berita{" "}
                      <span style={{ color: "blue" }}>Bawaslu Boyolali</span>
                    </strong>
                  </h4>
                  <div className="widget-title row">
                    {category.map((cta, index) => {
                      return (
                        <div className="col-6">
                          <a
                            style={{ color: "black", textDecoration: "none" }}
                            href={`category-berita/${cta.category}/${cta.id}`}
                          >
                            {cta.category}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <br />
              {/* <hr className="mt-0" /> */}
              {list.length > 0 ? (
                list.map((berita) => {
                  return (
                    <div className="single-blog-inner">
                      <div className="tag-and-share">
                        <div className="row">
                          <div className="col-sm-7"></div>
                          <div className="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                            <div className="blog-share">
                              <ul>
                                <li>
                                  <FacebookShareButton
                                    url={`https://bawaslu.excellentsistem.com/berita/${berita.judulBerita}/${berita.id}`}
                                    media={berita.image}
                                    description={berita.judulBerita}
                                    quote={berita.judulBerita}
                                  >
                                    <button
                                      style={{
                                        color: "white",
                                        backgroundColor: "#45629f",
                                      }}
                                      className="border p-2"
                                    >
                                      <i
                                        className="fab fa-facebook-f"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Facebook
                                    </button>
                                  </FacebookShareButton>
                                </li>
                                <li>
                                  <TwitterShareButton
                                    url={`https://bawaslu.excellentsistem.com/berita/${berita.judulBerita}/${berita.id}`}
                                    media={berita.image}
                                    description={berita.judulBerita}
                                    quote={berita.judulBerita}
                                  >
                                    <button
                                      style={{
                                        color: "white",
                                        backgroundColor: "#5eb2ef",
                                      }}
                                      className="border p-2"
                                    >
                                      <i
                                        className="fab fa-twitter"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      Twitter
                                    </button>
                                  </TwitterShareButton>
                                </li>
                                <li>
                                  <PinterestShareButton
                                    url={`https://bawaslu.excellentsistem.com/berita/${berita.judulBerita}/${berita.id}`}
                                    quote={berita.judulBerita}
                                    media={berita.image}
                                    description={berita.judulBerita}
                                  >
                                    <button
                                      style={{
                                        color: "white",
                                        backgroundColor: "#cf2830",
                                      }}
                                      className="border p-2"
                                    >
                                      <i className="fa-brands fa-pinterest"></i>{" "}
                                      Pin
                                    </button>
                                  </PinterestShareButton>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="thumb">
                        <img
                          style={{ height: "450px" }}
                          src={berita.image}
                          alt="img"
                        />
                      </div>
                      <div className="details">
                        <h2>
                          <a
                            href={`/page-isi-berita/${berita.judulBerita}/${berita.id}`}
                          >
                            {berita.judulBerita}
                          </a>

                          <a href="">{berita.judulBerita}</a>
                        </h2>
                        <ul className="blog-meta">
                          <li>
                            <i className="far fa-user"></i>BY {berita.author}
                          </li>
                          <li>
                            <i className="far fa-calendar-alt"></i>{" "}
                            {berita.createdDate}
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="single-blog-inner">
                  <div className="tag-and-share">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="tags d-inline-block">
                          <button className="border">
                            <i className="fa-regular fa-thumbs-up"></i>
                          </button>
                          <button className="border">
                            <i className="fa-regular fa-thumbs-down"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                        <div className="blog-share">
                          <ul>
                            <li>
                              <a href="#">
                                <button
                                  style={{
                                    color: "white",
                                    backgroundColor: "#45629f",
                                  }}
                                  className="border p-2"
                                >
                                  <i
                                    className="fab fa-facebook-f"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Facebook
                                </button>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <button
                                  style={{
                                    color: "white",
                                    backgroundColor: "#5eb2ef",
                                  }}
                                  className="border p-2"
                                >
                                  <i
                                    className="fab fa-twitter"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Twitter
                                </button>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <button
                                  style={{
                                    color: "white",
                                    backgroundColor: "#cf2830",
                                  }}
                                  className="border p-2"
                                >
                                  <i className="fa-brands fa-pinterest"></i> Pin
                                </button>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="thumb">
                    <img
                      style={{ height: "450px" }}
                      src="https://tapanuliutara.bawaslu.go.id/wp-content/uploads/2019/09/punya-logo-baru-bawaslu-kian-bersemangat-iil.jpg"
                      alt="img"
                    />
                  </div>
                  <div className="details">
                    <h2>
                      <a href="">COntoh Berita</a>
                    </h2>
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user"></i>BY admin
                      </li>
                      <li>
                        <i className="far fa-calendar-alt"></i> 2023-05-12
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <Pagination
                count={paginationInfo.totalPages}
                color="primary"
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
              />
            </div>
            <div className="col-lg-4 col-12">
              <div className="sidebar-container">
                <div className="td-sidebar">
                  <div
                    className={`widget widget-recent-post`}
                    style={{ background: "#F1F6F9", overflow: "hidden" }}
                  >
                    <h4 className="widget-title">Berita Terbaru</h4>
                    <ul>
                      {listTerbaru.map((beritaTerbaru) => {
                        return (
                          <li>
                            <div className="media">
                              <div className="media-left">
                                <img
                                  src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                                  style={{ width: "60px" }}
                                  alt="blog"
                                />
                              </div>
                              <div className="media-body align-self-center">
                                <h6 className="title">
                                  <a href={`/Page-Berita/${beritaTerbaru.id}`}>
                                    {beritaTerbaru.judulBerita}
                                  </a>
                                </h6>
                                <div className="post-info">
                                  <i className="far fa-calendar-alt"></i>
                                  <span>{beritaTerbaru.createdDate}</span>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div
                    className="widget widget_catagory"
                    style={{ background: "#F1F6F9" }}
                  >
                    <h4 className="widget-title">Arsip</h4>
                    <ul className="catagory-items">
                      {archivingMonths.map((monthData) => {
                        const tahun_bulan = `${monthData.year}-${monthData.month}`;
                        const totalData = monthlyTotal[tahun_bulan] || 0;

                        return (
                          <li key={`${tahun_bulan}`}>
                            <a href={`/${tahun_bulan}`}>
                              <i className="fa-solid fa-file"></i>{" "}
                              {monthData.label} {monthData.year} ({totalData})
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <Bawaslu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- blog area end --> */}
      <Footer />
    </>
  );
}

export default Berita;
