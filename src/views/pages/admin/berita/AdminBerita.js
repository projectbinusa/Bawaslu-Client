import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_DUMMY } from "../../../../utils/base_URL";
import Swal from "sweetalert2";
import "../../../../../src/css/adminBerita.css";

import {
  IconButton,
  InputAdornment,
  Pagination,
  TextField,
} from "@mui/material";

function AdminBerita() {
  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState([""]);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [id, setId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalElements: 0,
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAll = async (page) => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/berita/all?page=${
          page - 1
        }&size=${rowsPerPage}&sortBy=id&sortOrder=asc`
      );
      setList(response.data.data.content);
      console.log(response.data.data.content);
      setPaginationInfo({
        totalPages: response.data.data.totalPages,
        totalElements: response.data.data.totalElements,
      });
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const getAll1 = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/category-berita/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setList1(response.data.data.content);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const deleteData = async (id) => {
    Swal.fire({
      title: "Apakah Anda Ingin Menghapus?",
      text: "Perubahan data tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_DUMMY}/bawaslu/api/berita/delete/` + id, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Dihapus!",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              window.location.reload();
            }, 1500);
          });
      }
    });
  };

  const deleteData1 = async (id) => {
    Swal.fire({
      title: "Apakah Anda Ingin Menghapus Kategori Berita?",
      text: "Seluruh berita dalam kategori ini akan ikut terhapus dan data tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${API_DUMMY}/bawaslu/api/category-berita/delete/` + id, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Dihapus!",
              showConfirmButton: false,
              timer: 1500,
            });

            setTimeout(() => {
              window.location.reload();
            }, 1500);
          });
      }
    });
  };

  useEffect(() => {
    getAll(currentPage);
    getAll1();
  }, [currentPage, rowsPerPage]);

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
    setCurrentPage(1);
  };

  const filteredList = list.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  console.log(filteredList);

  const totalPages = Math.ceil(filteredList.length / rowsPerPage);

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3 app-main__outer">
          <div className="ml-2 row g-3 align-items-center d-lg-none d-md-flex">
            <div className="col-auto">
              <label className="form-label mt-2">Rows per page:</label>
            </div>
            <div className="col-auto">
              <select
                className="form-select form-select-xl w-auto"
                onChange={handleRowsPerPageChange}
                value={rowsPerPage}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
          <input
            type="search"
            className="form-control widget-content-right w-100 mt-2 md-2 d-lg-none d-md-block"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="main-card mb-3 card">
            <div className="card-header" style={{ display: "flex" }}>
              <p className="mt-3">Berita</p>
              <div className="ml-2 row g-3 align-items-center d-lg-flex d-none d-md-none">
                <div className="col-auto">
                  <label className="form-label mt-2">Rows per page:</label>
                </div>
                <div className="col-auto">
                  <select
                    className="form-select form-select-sm"
                    onChange={handleRowsPerPageChange}
                    value={rowsPerPage}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                </div>
              </div>
              <div className="d-flex ml-auto gap-3">
                <input
                  type="search"
                  className="form-control widget-content-right w-75 d-lg-block d-none d-md-none"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="btn-actions-pane-right">
                  <div role="group" className="btn-group-sm btn-group">
                    <button className="active btn-focus p-2 rounded">
                      <a
                        style={{ color: "white", textDecoration: "none" }}
                        href="/add-berita-admin"
                      >
                        Tambah Berita
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="table-responsive"
              style={{ overflowY: "auto", maxHeight: "60vh" }}
            >
              <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">
                      No
                    </th>
                    <th scope="col" className="text-center">
                      Judul Berita
                    </th>
                    <th scope="col" className="text-center">
                      Penulis Berita
                    </th>
                    <th scope="col" className="text-center">
                      Tanggal Dibuat
                    </th>
                    <th scope="col" className="text-center">
                      Image
                    </th>
                    <th scope="col" className="text-center">
                      Aksi
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {list.map((berita, no) => {
                    return (
                      <tr key={no}>
                        <td className="text-center">{no + 1}</td>
                        <td className="text-center">{berita.judulBerita}</td>
                        <td className="text-center">{berita.author}</td>
                        <td className="text-center">{berita.createdDate}</td>
                        <td className="text-center">
                          <img
                            src={berita.image}
                            alt="berita-image"
                            style={{ height: "4.5rem", width: "4.5rem" }}
                          />
                        </td>
                        <td data-label="Aksi" className="text-center">
                          <button type="button" className="btn-primary btn-sm mr-2">
                            <a
                              style={{ color: "white", textDecoration: "none" }}
                              href={`/edit-berita-admin/${berita.id}`}
                            >
                              {" "}
                              <i className="fa-solid fa-pen-to-square"></i>
                            </a>
                          </button>

                          <button
                            onClick={() => deleteData(berita.id)}
                            type="button"
                            className="btn-danger btn-sm"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>

                {/* with pagination */}
                {/* <tbody>
                  {list.map((berita, index) => {
                    return (
                      <tr key={index}>
                        <td data-label="No : " className=" text-muted">
                          {index + 1}
                        </td>
                        <td data-label="Author : ">{berita.author}</td>
                        <td data-label="Created Date : ">
                          {berita.createdDate}
                        </td>
                        <td data-label="Gambar : ">
                          {berita.image ? (
                            <img
                              src={berita.image}
                              alt={`Image ${index + 1}`}
                              onError={(e) =>
                                console.error("Error loading image:", e)
                              }
                            />
                          ) : (
                            "No Image"
                          )}
                        </td>
                        <td data-label="Judul Berita : " className="">
                          {berita.judulBerita}
                        </td>
                        <td data-label="Aksi : " className="text-center d-flex">
                          <button type="button" className="btn-primary btn-sm mr-2">
                            <a
                              style={{ color: "white", textDecoration: "none" }}
                              href="/edit-berita-admin"
                            >
                              {" "}
                              <i className="fa-solid fa-pen-to-square"></i>
                            </a>
                          </button>

                          <button
                            onClick={() => deleteData(berita.id)}
                            type="button"
                            className="btn-danger btn-sm"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody> */}
                {/* end */}
              </table>
            </div>
            <div className="card-header mt-3 d-flex justify-content-center">
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(event, value) => setCurrentPage(value)}
                showFirstButton
                showLastButton
                color="primary"
              />
            </div>
          </div>

          {/* Category */}
          <div className="main-card mb-3 card">
            <div className="card-header" style={{ display: "flex" }}>
              Kategori Berita
              <div className="btn-actions-pane-right">
                <div role="group" className="btn-group-sm btn-group">
                  <button className="active btn-focus p-2 rounded">
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="/tambah-category-berita"
                    >
                      Tambah Kategori Berita
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="table-responsive"
              style={{ overflowY: "auto", maxHeight: "60vh" }}
            >
              <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Kategory Berita</th>
                    <th className="text-center">Tanggal Dibuat</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {list1.map((kategory, index) => {
                    return (
                      <tr key={index}>
                        <td data-label="No" className="text-center text-muted">
                          {index + 1}
                        </td>
                        <td data-label="Category" className="text-center">
                          {kategory.category}
                        </td>
                        <td data-label="Created Date" className="text-center">
                          {kategory.createdDate}
                        </td>
                        <td data-label="Aksi" className="text-center">
                          <button type="button" className="btn-primary btn-sm mr-2">
                            <a
                              style={{ color: "white", textDecoration: "none" }}
                              href={`/edit-category-berita/${kategory.id}`}
                            >
                              {" "}
                              <i className="fa-solid fa-pen-to-square"></i>
                            </a>
                          </button>

                          <button
                            onClick={() => deleteData1(kategory.id)}
                            type="button"
                            className="btn-danger btn-sm"
                          >
                            <i className="fa-solid fa-trash"></i>
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

export default AdminBerita;