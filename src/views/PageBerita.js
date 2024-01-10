import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import React from "react";
import { useState } from "react";
import { API_DUMMY } from "../utils/base_URL";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import axios from "axios";
import Bawaslu from "../component/Bawaslu";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import { format } from "date-fns";
import idLocale from "date-fns/locale/id";
import AOS from "aos";

function PageBerita() {
  const [listTerbaru, setListTerbaru] = useState([]);
  const [judulBerita, setJudulBerita] = useState("");
  const [author, setAuthor] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [gambarTerbaru, setGambarTerbaru] = useState("");
  const [image, setImage] = useState("");
  const [tagsBerita, setTagsBerita] = useState("");
  const [id, setId] = useState();
  const [categoryBerita, setCategoryBerita] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [respon, setRespon] = useState("");
  const param = useParams();
  const [list, setList] = useState([]);
  const [variabel, setVariabel] = useState({
    id: "",
  });

  const getAll = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/related-berita/by-id-berita?id=` +
          param.id
      );
      setList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/berita/get/` + param.id)
      .then((ress) => {
        const response = ress.data.data;
        setAuthor(response.author);
        setJudulBerita(response.judulBerita);
        setId(response.id);
        setIsiBerita(response.isiBerita);
        setVariabel({ ...variabel, id: variabel.id });
        setImage(response.image);
        setTagsBerita(response.tagsBerita);
        setCategoryBerita(response.categoryBerita);
        setCreatedDate(response.createdDate);
        console.log(ress.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getAll();
    AOS.init();
    getAllTerbaru();
  }, []);

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

  const ShareButtons = ({ url, image, description, quote }) => {
    return (
      <div className="blog-share">
        <ul>
          <li>
            <FacebookShareButton
              url={url}
              media={image}
              description={description}
              quote={quote}>
              <button
                style={{ color: "white", backgroundColor: "#45629f" }}
                className="border p-2">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>{" "}
                Facebook
              </button>
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={url}
              media={image}
              description={description}
              quote={quote}>
              <button
                style={{ color: "white", backgroundColor: "#5eb2ef" }}
                className="border p-2">
                <i className="fab fa-twitter" aria-hidden="true"></i> Twitter
              </button>
            </TwitterShareButton>
          </li>
          <li>
            <PinterestShareButton
              url={url}
              media={image}
              description={description}
              quote={quote}>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#cf2830",
                  width: "90px",
                }}
                className="border p-2">
                <i className="fa-brands fa-pinterest"></i> Pin
              </button>
            </PinterestShareButton>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div
          class="editors-news container"
          style={{ marginTop: "100px", marginBottom: "50px" }}>
          <div class="row">
            <div data-aos="fade-right" class="col-lg-3">
              <div class="d-flex position-relative float-left">
                <h3 class="section-title">Berita Terbaru</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div data-aos="fade-right" class="col-lg-6  mb-5 mb-sm-2">
              <div class="position-relative image-hover">
                <img
                  src={listTerbaru.length > 0 && listTerbaru[0].image}
                  class="img-fluid w-100"
                  alt="world-news"
                />
                <span class="thumb-title">BERITA</span>
              </div>
              <h1 class="font-weight-600 mt-3">
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href={
                    "/page-isi-berita/" + listTerbaru.length > 0 &&
                    listTerbaru[0].author + "/" + listTerbaru.length > 0 &&
                    listTerbaru[0].judulBerita
                  }></a>{" "}
                {listTerbaru.length > 0 && listTerbaru[0].id}
              </h1>
              <p class="fs-15 font-weight-normal isiBerita">
                {listTerbaru.length > 0 && listTerbaru[0].isiBerita}
              </p>
            </div>
            <div class="col-lg-6  mb-5 mb-sm-2">
              <div class="row">
                {listTerbaru.slice(1, 5).map((berita) => {
                  return (
                    <div data-aos="fade-left" class="col-sm-6  mb-5 mb-sm-2">
                      <div class="position-relative image-hover">
                        <img
                          src={berita.image}
                          class="img-fluid "
                          alt="world-news"
                          style={{maxHeight:"160px", maxWidth:"180px"}}
                        />
                        <span class="thumb-title isiBerita">BERITA</span>
                      </div>
                      <p class="font-weight-bold mt-3">
                        <a
                          style={{ color: "black", textDecoration: "none" }}
                          href={
                            "/page-isi-berita/" +
                            berita.author +
                            "/" +
                            berita.id
                          }>
                          {berita.judulBerita}
                        </a>
                      </p>
                      <span>
                        {format(new Date(berita.createdDate), "dd MMMM yyyy", {
                          locale: idLocale,
                        })}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      <div class="blog-area pd-top-120 pd-bottom-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="single-blog-inner">
                <div class="tag-and-share">
                  <div class="row">
                    <div class="col-sm-7">
                      <div class="tags d-inline-block"></div>
                    </div>
                    <div className="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                      <ShareButtons
                        url={`https://bawaslu.excellentsistem.com/page-isi-berita/${author}/${id}`}
                        media={image}
                        description={judulBerita}
                        quote={judulBerita}
                      />
                    </div>
                  </div>
                </div>
                <div class="thumb">
                  {image && image.length < 0 ? (
                    <img
                      style={{ height: "450px" }}
                      src="https://tapanuliutara.bawaslu.go.id/wp-content/uploads/2019/09/punya-logo-baru-bawaslu-kian-bersemangat-iil.jpg"
                      alt="img"
                    />
                  ) : (
                    <img style={{ height: "450px" }} src={image} alt="img" />
                  )}
                </div>
                <div class="details">
                  <h2>{judulBerita}</h2>
                  <ul class="blog-meta">
                    <li>
                      <i class="far fa-user"></i>By {author}
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i>
                      {format(
                        new Date(createdDate || new Date()),
                        "dd MMMM yyyy",
                        { locale: idLocale }
                      )}
                    </li>
                  </ul>
                </div>
                <p>{isiBerita}</p>
              </div>
              <div class="jnews_inline_related_post">
                <h4 className="pt-4 mb-4">Related Posts</h4>
                <div class="row">
                  {list.map((category) => {
                    return (
                      <div class="col-md-6">
                        <div class="media single-choose-inner">
                          <div class="media-left">
                            <div class="icon">
                              <i class="fas fa-bullhorn"></i>
                            </div>
                          </div>
                          <div class="media-body">
                            <p>
                              <a
                                href={`/page-isi-berita/${category.author}/${category.id}`}>
                                {category.judulBerita}{" "}
                              </a>
                            </p>
                          </div>
                        </div>
                        {/* <a href="/bawaslu-boyolali-ajak-masyarakat-terlibat-dalam-pengawasan-pemilu-partisipatif">
                            {category.judulPengumuman}
                          </a> */}
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr />
            </div>
            <div class="col-lg-4 col-12">
              <div className="sidebar-container">
                <div class="td-sidebar">
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

export default PageBerita;
