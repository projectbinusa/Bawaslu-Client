import React from "react";

function Register() {
  return (
    <>
      <div class="container d-flex justify-content-center align-items-center min-vh-100">
        {/* <!----------------------- Login Container --------------------------> */}

        <div class="row border rounded-5 p-3 bg-white shadow box-area">
          {/* <!--------------------------- Left Box -----------------------------> */}

          <div
            class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
            style={{ background: "#103cbe" }}
          >
            <div class="featured-image mb-3">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/form-4721284-3927997.png"
                class="img-fluid"
                style={{ width: "250px" }}
              />
            </div>
          </div>

          {/* <!-------------------- ------ Right Box ----------------------------> */}

          <div class="col-md-6 right-box max-h-screen">
            <form class="row align-items-center">
              <div class="header-text">
                <h2>
                  <img
                    style={{ width: "40px" }}
                    src="https://jombang.bawaslu.go.id/wp-content/uploads/2019/04/Logo-Bawaslu-2018-Icon-PNG-HD.png"
                    alt=""
                  /> Register
                </h2>
                <p>Buat Akun Sekarang Agar Bisa Login</p>
              </div>
              <div class="form-group mb-3">
                <input
                  type="email"
                  class="form-control form-control-lg bg-light fs-6"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group mb-3">
                <input
                  type="password"
                  class="form-control form-control-lg bg-light fs-6"
                  name="Password"
                  placeholder="Password"
                  required
                />
              </div>
              <p style={{ fontSize: "13px" }}>
                * Password Harus Minimal 8 Karakter Dan Ada Huruf Besar Dan
                Kecil
              </p>
              <div class="form-group mb-3 d-flex justify-content-between">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="show-password"
                  />
                  <label
                    for="formCheck"
                    class="form-check-label text-secondary"
                  >
                    <small>Tampilkan Password</small>
                  </label>
                </div>
              </div>
              <div class="input-group mb-3">
                <button
                  type="submit"
                  name="submit"
                  class="btn btn-lg btn-primary w-100 fs-6"
                >
                  Register
                </button>
              </div>
              <div class="row">
                <small>
                  Sudah Memiliki Akun Silahkan{" "}
                  <a href="/absensi/auth/">Login</a>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
