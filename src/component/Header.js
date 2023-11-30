import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import { API_DUMMY } from "../utils/base_URL";
import axios from "axios";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [informasi, setInformasi] = useState([]);
  const getInformasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-informasi/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setInformasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  const [regulasi, setRegulasi] = useState([]);
  const getRegulasi = async () => {
    try {
      const response = await axios.get(
        `${API_DUMMY}/bawaslu/api/jenis-regulasi/all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setRegulasi(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Terjadi Kesalahan", error);
    }
  };

  useEffect(() => {
    getInformasi();
    getRegulasi();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isMobile = windowWidth < 992;

  const logout = () => {
    Swal.fire({
      title: "Keluar Dari Akun Anda ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success Logout",
          showConfirmButton: false,
          timer: 1500,
        });
        //Untuk munuju page selanjutnya
        history.push("/login");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        localStorage.clear();
      }
    });
  };
  return (
    <>
      {/* <div class="app-header header-shadow d-lg-flex d-none">
        <div class="app-header__logo">
          <img
            style={{ width: "60%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/Logo_Bawaslu.png"
          />
          <div class="header__pane ml-auto">
            <div>
              <button
                type="button"
                class="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className={`hamburger hamburger--elastic toggle-btn mobile-toggle-nav ${
                menuOpen ? "is-active" : ""
              }`}
              onClick={toggleMenu}
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div
          id="Iitechie_main_menu"
          className={`app-header__content navbar-collapse ${
            menuOpen ? "sopen" : ""
          }`}>
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <button
                    onClick={logout}
                    type="button"
                    className="btn-shadow p-1 btn-danger btn-sm">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </div>
              </div>
            </div>{" "}
          </div>
          <ul className={`navbar-nav ${menuOpen ? "menu-open" : ""}`}>
            <li className="nav-item">
              <a href="javascript:void(0);" className="nav-link">
                <i className="nav-link-icon fa fa-database"> </i>
                Statistics
              </a>
            </li>
            <li className="btn-group nav-item">
              <a href="javascript:void(0);" className="nav-link">
                <i className="nav-link-icon fa fa-edit"></i>
                Projects
              </a>
            </li>
            <li className="dropdown nav-item">
              <a href="javascript:void(0);" className="nav-link">
                <i className="nav-link-icon fa fa-cog"></i>
                Settings
              </a>
            </li>
          </ul>{" "}
        </div>
      </div> */}
      <div class="app-header header-shadow">
        <div class="app-header__logo">
        <img
            style={{ width: "60%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/Logo_Bawaslu.png"
          />
          <div class="header__pane ml-auto">
            <div>
              <button
                type="button"
                class="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="app-header__mobile-menu">
          <div>
            <button
              type="button"
              class="hamburger hamburger--elastic mobile-toggle-nav">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <div class="app-header__menu">
          <span>
            <button
              onClick={logout}
              type="button"
              className="btn-shadow p-1 btn-danger btn-sm">
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </span>
        </div>{" "}
        <div class="app-header__content">
          <div class="app-header-left"></div>
          <div class="app-header-right">
            <div class="header-btn-lg pr-0">
              <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                  <div class="widget-content-left"></div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Header;
