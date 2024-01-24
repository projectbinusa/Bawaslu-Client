import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import "../../../../src/css/adminBerita.css";
import "../../../css/indexadmin.css";
import { API_DUMMY } from "../../../utils/base_URL";
import Sidebar from "../../../component/Sidebar";
import Header from "../../../component/Header";
import AOS from "aos";

function PutIsiInformasi() {
  const [dokumen, setDokumen] = useState("");
  const [pdfDokumen, setPdfDokumen] = useState("");
  const [jenisKeteranganId, setJenisKeteranganId] = useState(1);
  const history = useHistory();
  const { id } = useParams();
  const [namaInformasi, setNamaInformasi] = useState("");
  const param = useParams()

  useEffect(() => {
    getById();
  }, []);

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/jenis-informasi/getBy/` + param.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((ress) => {
        const response = ress.data.data;
        setNamaInformasi(response.namaInformasi);
        console.log(response.namaInformasi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getById = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/isi-keterangan-informasi/getBy/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = response.data.data;

      setDokumen(data.dokumen || "");
      setPdfDokumen(data.pdfDokumen || "");
      setJenisKeteranganId(data.jenisKeterangan || "");
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${API_DUMMY}/bawaslu/api/isi-keterangan-informasi/${id}`,
        {
          dokumen: dokumen,
          pdfDokumen: pdfDokumen,
          jenisKeteranganId: jenisKeteranganId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Data Berhasil Diubah",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        history.push(`/admin/${param.id}`);
        window.location.reload();
      }, 1500);
    } catch (error) {
      if (error.ressponse && error.response.status === 401) {
        localStorage.clear();
        history.push("/login");
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer" data-aos="fade-left">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-4">Form Ubah Data</h1>
              <hr />
              <form onSubmit={updateData}>
                <div className="row">
                  <div className="mb-3 col-6">
                    <label
                      htmlFor="dokumen"
                      className="form-label font-weight-bold">
                      Keterangan
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="dokumen"
                      value={dokumen}
                      onChange={(e) => setDokumen(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 col-6">
                    <label
                      htmlFor="pdfDokumen"
                      className="form-label font-weight-bold">
                      Link Google Drive
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pdfDokumen"
                      value={pdfDokumen}
                      onChange={(e) => setPdfDokumen(e.target.value)}
                    />
                  </div>
                </div>

                <button type="button" className="btn-danger mt-3 mr-3">
                  <a
                    href={"/admin-berkala-kepemiluan"}
                    style={{ color: "white", textDecoration: "none" }}>
                    Batal
                  </a>
                </button>
                <button type="submit" className="btn-primary mt-3">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PutIsiInformasi;
