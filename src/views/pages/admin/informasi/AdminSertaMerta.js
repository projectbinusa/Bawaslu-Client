import React, { useEffect, useState } from 'react'
import Header from '../../../../component/Header';
import Sidebar from '../../../../component/Sidebar';
import Footer from '../../../../component/Footer';
import axios from 'axios';
import { API_DUMMY } from '../../../../utils/base_URL';

function AdminSertaMerta() {
  const [list, setList] = useState([]);
  const ById = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenisinformasi/1`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    ById();
  }, []);

  return (
    <div>
    <Header />
    <div className="app-main">
      <Sidebar />
      <div className="container mt-3 app-main__outer">
        <div class="main-card mb-3 card">
          <div class="card-header">
            Informasi Serta Merta
          </div>
          <div class="table-responsive">
            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
              <thead>
                <tr>
                  <th className="text-center">No</th>
                  <th className="text-center">DOkumen</th>
                  <th className="text-center">Lihat / Download</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                      <td class="text-center">
                        <button type="button" class="btn-primary btn-sm mr-2">
                          <i class="fa-solid fa-pen-to-square"></i>
                        </button>

                        <button type="button" class="btn-danger btn-sm">
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default AdminSertaMerta