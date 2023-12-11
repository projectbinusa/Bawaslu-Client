import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import Bawaslu from "../../../component/Bawaslu";
import { API_DUMMY } from "../../../utils/base_URL";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function IsiPengumuman() {
  const [createdDate, setCreatedDate] = useState("");
  const [judulPengumuman, setJudulPengumuman] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [isiPengumuman, setIsiPengumuman] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
  const [id, setId] = useState();

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/pengumuman/get/` + params.id)
      .then((ress) => {
        const response = ress.data.data;
        setCreatedDate(response.createdDate);
        setId(response.id);
        setIsiPengumuman(response.isiPengumuman);
        setJudulPengumuman(response.judulPengumuman);
        setTags(response.tags);
        setImage(response.image);
        setAuthor(response.author);
        console.log(ress.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [pengumuman2, setPengumuman2] = useState([]);
  const getAll = async () => {
    await axios
      .get(
        `${API_DUMMY}/bawaslu/api/pengumuman/related-pengumuman/by-id-pengumuman?id=` +
          params.id
      )
      .then((res) => {
        setPengumuman2(res.data.data);
      })
      .catch((error) => {
        alert("Terjadi kesalahan" + error);
      });
  };
  useEffect(() => {
    //mengambil data, memperbarui DOM secara langsung,
    getAll(0);
  }, []);

  return (
    <div>
      <Navbar />

      {/* <!-- blog area start --> */}
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-page-content">
                <div className="single-blog-inner">
                  <div className="thumb">
                    <img className="pengumuman" src={image} alt="img" />
                  </div>
                  <div className="details">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-user"></i>By {author}
                      </li>
                      <li>
                        <i className="far fa-calendar-alt"></i>
                        {createdDate}
                      </li>
                    </ul>
                    <h4 className="title">{judulPengumuman}</h4>
                    <p>{isiPengumuman}</p>
                  </div>
                  <br />
                  <h4 className="pt-4 mb-4">Related Posts</h4>
                  <div className="row">
                    {pengumuman2.map((isi) => {
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
                                <a href={`/pengumuman/${isi.id}`}>
                                  {isi.judulPengumuman}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="td-sidebar">
                <Bawaslu />
                <div
                  className="widget widget_tag_cloud mb-0"
                  style={{ background: "#F1F6F9" }}
                >
                  <h4 className="widget-title">Berbagi</h4>
                  <div className="tagcloud">
                    <a
                      href="#"
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <i className="fab fa-facebook"></i> Share To Facebook
                    </a>
                    <a
                      href="#"
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <i className="fab fa-twitter"></i> Share To Twitter
                    </a>
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

export default IsiPengumuman;
