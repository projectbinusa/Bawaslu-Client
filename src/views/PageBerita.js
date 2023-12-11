import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import React from "react";
import { useState } from "react";
import { API_DUMMY } from "../utils/base_URL";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import axios from "axios";
import Bawaslu from "../component/Bawaslu";
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";

function PageBerita() {
  const [judulBerita, setJudulBerita] = useState("");
  const [author, setAouther] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [image, setImage] = useState("");
  const [tagsBerita, setTagsBerita] = useState("");
  const [id, setId] = useState();
  const [categoryBerita, setCategoryBerita] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [respon, setRespon] = useState("");
  const param = useParams();
  const history = useHistory();
  const [judulPengumuman, setJudulPengumuman] = useState("");
  const [tags, setTags] = useState("");
  const [pengumuman, setIsiPengumuman] = useState("");
  const [list, setList] = useState([]);
  const [variabel, setVariabel] = useState({
    id: "",
    judulBerita: "",
    isiBerita: "",
    author: "",
    image: "",
    tagsBerita: "",
    categoryBerita: "",
    createDate: "",
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
      .get(`${API_DUMMY}/bawaslu/api/berita/get/` + param.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((ress) => {
        const response = ress.data.data;
        setAouther(response.author);
        setJudulBerita(response.judulBerita);
        setId(response.id);
        setIsiBerita(response.isiBerita);
        setVariabel({ ...variabel, id: variabel.id });
        setImage(response.image);
        setTagsBerita(response.tagsBerita);
        setCategoryBerita(response.categoryBerita);
        setCreateDate(response.creteDate);
        console.log(ress.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Navbar />
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 style={{ fontWeight: "bold", fontSize: "45px" }}>
                {judulBerita}
              </h1>
              <div className="single-blog-inner">
                <div className="tag-and-share">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="tags d-inline-block"></div>
                    </div>
                    <div className="col-sm-5 mt-3 mt-sm-0 text-sm-end align-self-center">
                      <div className="blog-share">
                        <ul>
                          <li>
                            <FacebookShareButton
                              url={`https://bawaslu.excellentsistem.com/page-berita/${judulBerita}/${id}`}
                              media={image}
                              description={judulBerita}
                              quote={judulBerita}
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
                              url={`https://bawaslu.excellentsistem.com/category-berita/${judulBerita}/${id}`}
                              media={image}
                              description={judulBerita}
                              quote={judulBerita}
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
                              url={`https://bawaslu.excellentsistem.com/category-berita/${judulBerita}/${id}`}
                              quote={judulBerita}
                              media={image}
                              description={judulBerita}
                            >
                              <button
                                style={{
                                  color: "white",
                                  backgroundColor: "#cf2830",
                                }}
                                className="border p-2"
                              >
                                <i className="fa-brands fa-pinterest"></i> Pin
                              </button>
                            </PinterestShareButton>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="thumb">
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
                <div className="details">
                  <h2></h2>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user"></i>By {author}
                    </li>
                    <li>
                      <i className="far fa-calendar-alt"></i>
                      {createDate}
                    </li>
                  </ul>
                </div>
                <p>{isiBerita}</p>
              </div>
              <div className="jnews_inline_related_post">
                <h4 className="pt-4 mb-4">Related Posts</h4>
                <div className="row">
                  {list.map((category) => {
                    return (
                      <div className="col-md-6">
                        <div className="media single-choose-inner">
                          <div className="media-left">
                            <div className="icon">
                              <i className="fas fa-bullhorn"></i>
                            </div>
                          </div>
                          <div className="media-body">
                            <p>
                              <a
                                href={`/page-berita/${category.judulBerita}/${category.id}`}
                              >
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
            <div className="col-lg-4 col-12">
              <div className="sidebar-container">
                <div className="td-sidebar">
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
