import React from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";
import { useState } from "react";
import { API_DUMMY } from "../../../../utils/base_URL";
import axios from "axios";
import { useEffect } from "react";

function AdminPermohonanKeberatan() {
  const [list, setList] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/permohonan-keberatan`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("terjadi kesalahan", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);
  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div class="main-card mb-3 card">
            <div class="card-header">Permohonan Keberatan</div>
            <div class="table-responsive overflow-x-scroll">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th className="text-left">No</th>
                    <th className="text-left">Email</th>
                    <th className="text-left">Alamat</th>
                    <th className="text-left">No Telp</th>
                    <th className="text-left">Tags</th>
                    <th className="text-left">Nomor identitas</th>
                    <th className="text-left">Jenis identitas</th>
                    <th className="text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((informasi, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-llef">{index + 1}</td>
                        <td className="text-llef">{informasi.email}</td>
                        <td className="text-llef">{informasi.nama}</td>

                        <td className="text-llef">{informasi.alamat}</td>
                        <td className="text-llef">{informasi.noTelp}</td>

                        <td className="text-llef">{informasi.nomorIndentitas}</td>
                        <td className="text-llef">{informasi.jenisIdentitas}</td>
                        <td>
                          <button  type="button" class="btn-primary mr-2 btn-sm">
                            <a className="text-light" href={"/detail-permohonan-keberatan/" + informasi.id}><i class="fas fa-info-circle"></i></a>
                          </button>
                          <button
                            // onClick={() => deleteData(informasi.id)}
                            type="button"
                            className="bg-danger btn-sm text-light">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminPermohonanKeberatan;
