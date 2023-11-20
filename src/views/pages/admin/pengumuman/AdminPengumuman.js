import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_DUMMY } from "../../../../utils/base_URL";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function AdminPengumuman() {
  const [list, setList] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get(`${API_DUMMY}/bawaslu/api/pengumuman`);
      setList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const deleteData = async (id) => {
    Swal.fire({
      title: "Anda Ingin Menghapus Data ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
      cancelButtonText: "Cencel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${API_DUMMY}/bawaslu/api/pengumuman/` + id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        Swal.fire({
          icon: "success",
          title: "Dihapus!",
          showConfirmButton: false,
        });
      }
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  };

  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div class="main-card mb-3 card">
            <div class="card-header">
              Pengumuman
              <div class="btn-actions-pane-right">
                <div role="group" class="btn-group-sm btn-group">
                  <button class="active btn-focus p-2 rounded">
                    <a
                      href="/add-pengumuman"
                      className="text-light"
                      style={{ textDecoration: "none" }}>
                      {" "}
                      Tambah Pengumuman
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Author</th>
                    <th className="text-center">Isi pengumuman</th>
                    <th className="text-center">Image</th>

                    <th className="text-center">Judul Pengumuan</th>
                    <th className="text-center">Tags</th>

                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((pengumuman, index) => {
                    return (
                      <tr key={index}>
                        <td class="text-center text-muted">{pengumuman.id}</td>
                        <td className="text-center">{pengumuman.author}</td>
                        <td class="text-center">{pengumuman.isiPengumuman}</td>
                        <td class="text-center">
                          <img src={pengumuman.image} />
                        </td>
                        <td class="text-center">
                          {pengumuman.judulPengumuman}
                        </td>
                        <td class="text-center">{pengumuman.tags}</td>

                        <td class="text-center">
                          <button type="button" class="btn-primary btn-sm mr-2">
                           <a style={{color:"white", textDecoration:"none"}} href={"/edit-pengumuman/" + pengumuman.id}> <i class="fa-solid fa-pen-to-square"></i></a>
                          </button>

                          <button type="button" onClick={() => deleteData(pengumuman.id)} class="btn-danger btn-sm">
                            <i class="fa-solid fa-trash"></i>
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
    </div>
  );
}

export default AdminPengumuman;
