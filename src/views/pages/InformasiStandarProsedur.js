import React from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import "../../css/LayananInformasi.css"


const InformasiStandarProsedur = () => {
  return (
    <>
      <div>
        <Navbar />
        <div style={{ padding: "15px", marginBottom:"0px" }} className="table">
          <div>
            <h1 style={{ width: "550px", fontSize: "50px" }}>
              STANDAR OPERASIONAL PROSEDUR (SOP)
            </h1>
            <h1>_____</h1>
          </div>
          <br></br>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <table class="table border border-black" style={{ width: "800px" }}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Dokumen</th>
                  <th scope="col">Unduh/Liat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>SOP PELAYANAN INFORMASI</td>
                  <td>
                    <button
                      style={{
                        borderRadius: "10px",
                        border: "1px solid black",
                      }}
                    >
                      Unduh
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>SOP PENANGANAN KEBERATAN INFORMASI</td>
                  <td>
                    <button
                      style={{
                        borderRadius: "10px",
                        border: "1px solid black",
                      }}
                    >
                      Unduh
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>SOP PENANGANAN SENGKETA INFORMASI</td>
                  <td>
                    <button
                      style={{
                        borderRadius: "10px",
                        border: "1px solid black",
                      }}
                    >
                      Unduh
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>SOP PENGELOLAAN INFORMASI DIKECUALIKAN</td>
                  <td>
                    <button
                      style={{
                        borderRadius: "10px",
                        border: "1px solid black",
                      }}
                    >
                      Unduh
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td> SOP PENGELOLAAN INFORMASI PUBLIK</td>
                  <td>
                    <button
                      style={{
                        borderRadius: "10px",
                        border: "1px solid black",
                      }}
                    >
                      Unduh
                    </button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">6</th>
                  <td> SOP PENYAMPAIAN LAYANAN INFORMASI</td>
                  <td>
                    <button
                      style={{
                        borderRadius: "10px",
                        border: "1px solid black",
                      }}
                    >
                      Unduh
                    </button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">7</th>
                  <td>SOP PENYUSUNAN DAFTAR INFORMASI PUBLIK</td>
                  <td>
                    <button
                      style={{
                        borderRadius: "10px",
                        border: "1px solid black",
                      }}
                    >
                      Unduh
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>SOP UJI KONSEKUENSI</td>
                  <td>
                    <button
                      style={{
                        borderRadius: "10px",
                        border: "1px solid black",
                      }}
                    >
                      Unduh
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default InformasiStandarProsedur;
