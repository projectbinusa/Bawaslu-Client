import React from "react";
import Navbar from "../../component/Navbar";
import "../pages/Profil.css";
import Visi from "../../aset/visi.svg";
import Tugas from "../../aset/tugas.svg"
import Footer from "../../component/Footer";

const Profil = () => {
  return (
    <>
      <div className="div">
        <Navbar />
        <div className="div" style={{ padding: "30px" }}>
          <div>
            <div>
              <h1 style={{ fontSize: "57px" }}>PROFIL SINGKAT PPID</h1>
              <h1>____________</h1>

              <p>
                Bawaslu Kabupaten Boyolali menilai bahwa keterbukaan informasi
                tidak hanya terkait dengan amanat regulasi atau undang-undang.
                Keterbukaan informasi bagian dari kewajiban yang memang harus
                dipatuhi. Sebab, publik memiliki hak atas informasi. Untuk
                itulah Bawaslu Kabupaten Boyolali membentuk Pejabat Pengelola
                Informasi dan Dokumentasi (PPID). PPID ini dibentuk untuk
                menjawab kebutuhan atas hak informasi publik.
              </p>
              <p>
                Selaras dengan amanat UU No. 14 Tahun 2008 tentang keterbukaan
                Informasi yang optimal kepada masyarakat, Kabupaten Boyolali
                sebagai badan publik berusaha memenuhi kebutuhan masyarakat akan
                akses informasi Pengawasan Pemilu di Indonesia. Bersama layanan
                Publik Online ini, kami berusaha dapat memenuhi hak masyarakat
                atas informasi publik yang cepat, akurat dan efektif.
              </p>
              <p>
                Layanan ini merupakan sarana layanan online bagi pemohon
                informasi publik sebagai salah satu wujud pelaksanaan
                keterbukaan informasi publik di Kabupaten Boyolali.
              </p>

              <div>
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    width: "170px",
                    borderRadius: "10px",
                    border: "1px solid black",
                  }}
                >
                  SELENGKEPANYA{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-caret-right-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <img
                src={Visi}
                style={{
                  width: "500px",
                }}
              />
            </div>
            <div style={{ textAlign: "center", width: "600px" }}>
              <h1>Visi</h1>
              <p>
                Terwujudnya Bawaslu sebagai Lembaga Pengawal Terpercaya dalam
                Penyelenggaraan Pemilu Demokratis, Bermartabat, dan Berkualitas.
              </p>
              <br></br>
              <h1>MISI</h1>
              <ol>
                <li>
                  Memberikan pelayanan informasi yang prima dan memuaskan
                  pemenuhan hak publik atas informasi
                </li>
                <li>
                  Mendorong keterlibatan publik atas hak informasi guna
                  terwujudnya pengawasan partisipatif dalam pemilu dan pilkada.
                </li>
                <li>
                  Mempraktikan prinsip transparan dan akuntabal guna keterbukaan
                  proses pemilu dan pilkada.
                </li>
              </ol>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>

        
          <div  >
            <div style={{ display: "flex", justifyContent: "center", alignItems:"center", gap:"15px" }}>
              
              <div style={{width:"600px"}}>
              <div>
                <h1>Tugas, Fungsi, & Wewenang</h1>
              </div>
                <ol>
                  <li>
                    Menyediakan, menyimpan, mendokumentasikan dan mengamankan
                    informasi;
                  </li>
                  <li>
                    Memberikan layanan informasi publik yang cepat, tepat,
                    efisien dan gratis;
                  </li>
                  <li>
                    Menyusun dan menetapkan standar operasional prosedur (SOP)
                    informasi publik;
                  </li>
                  <li>
                    Melakukan klasifikasi terhadap informasi dan/atau
                    pengubahannya
                  </li>
                  <li>
                    Menetapkan informasi yang dikecualikan yang telah habis
                    jangka waktu pengecualiannya sebagai informasi yang dapat
                    diakses;
                  </li>
                  <li>
                    Menetapkan pertimbangan tertulis atas setiap kebijakan yang
                    diambil untuk memenuhi hak setiap orang atas informasi
                    publik.
                  </li>
                </ol>
              </div>
              <div>
                <img src={Tugas}  style={{
                  width: "500px",
                }}/>
              </div>
            </div>
          </div>
        </div>
<Footer/>
      </div>
    </>
  );
};
export default Profil;
