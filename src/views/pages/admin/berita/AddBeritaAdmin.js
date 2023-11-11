import React from "react";
import Header from "../../../../component/Header";
import Sidebar from "../../../../component/Sidebar";
import Footer from "../../../../component/Footer";

function AddBeritaAdmin() {
  return (
    <div>
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="container mt-3">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-4">Form Tambah Data</h1>
              <hr />
              <form className="row">
                <div class="mb-3 col-6">
                  <label for="exampleInputEmail1" class="form-label">
                    Author
                  </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-3 col-6">
                  <label for="exampleInputPassword1" class="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="exampleInputPassword1" class="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div></div>
                  <label for="exampleInputPassword1" class="form-label">
                    Isi Berita
                  </label>
                <div class="form-floating col-6">
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{height: "100px"}}></textarea>
                </div>
                <div class="mb-3 col-6">
                  <label for="exampleInputPassword1" class="form-label">
                    Image
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" class="btn-primary col-1">
                  Submit
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

export default AddBeritaAdmin;
