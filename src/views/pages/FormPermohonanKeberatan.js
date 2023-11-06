import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import info from "../../aset/undraw_settings_tab_mgiw.svg";

const FormPermohonaKeberatan = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="head">
          <div className="form">
            <div>
              {" "}
              <h1 style={{ fontSize: "57px" }} className="h1">
                FORM PERMOHONAN KEBERATAN
              </h1>
              <h1>__________</h1>
            </div>
            <div className="info">
              <img src={info} className="img" />
            </div>
          </div>
          <div
            className="option"
            style={{ display: "flex", justifyContent: "center", gap: "50px" }}
          >
            <div>
              <form>
                <p style={{}}>Nama Pemohon:</p>
                <input style={{ width: "500px" }} />
                <p style={{ fontSize: "13px" }}>0 of 30 max characters</p>
                <br></br>
                <p>Alamat Pemohon:</p>
                <textarea style={{ width: "500px", height: "80px" }} />
                <p style={{ fontSize: "13px" }}>0 of 60 max characters</p>
                <br></br>
                <p>Nomor Identitas Pemohon:</p>
                <input style={{ width: "500px" }} />
                <p style={{ fontSize: "13px" }}>0 of 30 max characters</p>
                <br></br>
                <p>Jenis Identitas:</p>
                <select style={{ width: "500px" }}>
                  <option>KTP (Kartu Tanda Penduduk)</option>
                  <option>SIM (Surat Izin Mengemudi)</option>
                  <option>KTM (Kartu Tanda Mahasiswa)</option>
                </select>
                <br></br>
                <br></br>
                <p>Nomor Telp/HP:</p>
                <input style={{ width: "500px" }} />
                <p style={{ fontSize: "13px" }}>0 of 30 max characters</p>
                <br></br>
                <p>Email:</p>
                <textarea style={{ width: "500px" }} />
                <p style={{ fontSize: "13px" }}>0 of 30 max characters</p>
                <br></br>
                <p>Kasus Posisi:</p>
                <textarea style={{ width: "500px", height: "80px" }} />
                <p style={{ fontSize: "13px" }}>0 of 100 max characters</p>
                <br></br>
                <p>Tujuan Penggunaan Informasi:</p>
                <textarea style={{ width: "500px", height: "80px" }} />
                <p style={{ fontSize: "13px" }}>0 of 100 max characters</p>
                <br></br>
                <select>
                  <option>Permohonan Informasi Ditolak</option>
                  <option>Informasi Berkala Tidak Disediakan</option>
                  <option>Permintaan Informasi Tidak Ditanggapi</option>
                  <option>
                    Permintaan Informasi Ditanggapi Tidak Seperti Yang Diminta{" "}
                  </option>
                  <option>Permintaan Informasi Tidak Dipenuhi</option>
                  <option>Biaya yang Dikenakan Tidak Wajar</option>
                  <option>
                    Informasi Disampaikan Pada Jangka Waktu Yang Sudah
                    Ditentukan
                  </option>
                </select>
                <br></br>
                <br></br>
                <p>Upload Photo Identitas (.jpg) size max 1mb </p>
                <div style={{
                    gap:"10px",
                    display:"flex",
                }}>
                  {" "}
                  <div><button style={{ borderRadius: "15px", width: "105px",border:"1px solid black" }}>
                    Pilih File
                  </button></div>
                  <div> <button style={{ borderRadius: "15px", width: "105px", backgroundColor:"", border:"1px solid black" }}>Kirim</button></div>
                  
                 
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default FormPermohonaKeberatan;
