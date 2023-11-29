import React, { useState, useEffect } from "react";
import Footer from "../../../../component/Footer";
import Sidebar from "../../../../component/Sidebar";
import Header from "../../../../component/Header";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";
import Swal from "sweetalert2";

function EditJenisKeterangan() {
  const [keterangan, setKeterangan] = useState("");
  const [jenisInformasi, setJenisInformasi] = useState();
  const [jenisInformasii, setJenisInformasii] = useState([]);
  const param = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_DUMMY}/bawaslu/api/jenis-keterangan/getBy/` + param.id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((ress) => {
        const response = ress.data.data;
        setKeterangan(response.keterangan);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [param.id]);

  const getAllInformasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/all?page=0&size=100&sortBy=id&sortOrder=asc`
      );
      setJenisInformasii(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const update = async (e) => {
    e.preventDefault();

    const data = {
      keterangan: keterangan,
      jenisInformasi: jenisInformasi,
    };

    try {
      await axios.put(
        `${API_DUMMY}/bawaslu/api/jenis-keterangan/` + param.id,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Berhasil Mengedit Data Pengumuman",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllInformasi();
  }, []);

  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-4">Form Edit Data</h1>
              <hr />
              <form onSubmit={update}>
                <div className="row">
                  <div className="mb-3 col-lg-6">
                     <label htmlFor="exampleInputEmail1" className="form-label">
                      Jenis Informasi
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Small select example"
                      onChange={(e) => setJenisInformasi(e.target.value)}>
                      <option selected>PIlih Jenis Informasi</option>
                      {jenisInformasii.map((down) => {
                        return (
                          <option value={down.id}>{down.namaInformasi}</option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="mb-3 col-lg-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Keterangan
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={keterangan}
                      onChange={(e) => setKeterangan(e.target.value)}
                    />
                  </div>
                </div>
                <button type="reset" className="btn-danger mt-3 mr-3">
                  Batal
                </button>
                <button type="submit" className="btn-primary mt-3">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditJenisKeterangan;
