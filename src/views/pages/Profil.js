import React from "react";
import Navbar from "../../component/Navbar";
import "../pages/Profil.css";
import Visi from "../../aset/visi.svg";
import Tugas from "../../aset/tugas.svg"
import Footer from "../../component/Footer";
import misi from "../../aset/undraw_stepping_up_g6oo.svg"
import visi from "../../aset/undraw_visual_data_re_mxxo.svg";
import undraw from "../../aset/undraw_hiring_re_yk5n.svg";
import Navbar from "../../component/Navbar";

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
      <div className="alert" style={{
margin:"0",
        backgroundColor:"lightgray",
        borderRadius:"100px 100px 0px 0px"
      }}>
        <div style={{padding:"10px"}} class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Sejarah pengawasan pemilu{" "}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
          {/* <h1>Profil</h1> */}
          <div className="head">
            {/* <h1 style={{ textAlign: "center", padding: "10px" }}>
              Our Services
            </h1> */}

            <div className="icon1">
              <div>
                {" "}
                {/* <span>
                  <img src={undraw} alt="undraw" className="undraw" />
                </span> */}
              </div>
              <div className="profil">
                <h2>PROFIL</h2>
                <p style={{ width: "600px", alignItems: "end" }}>
                  Badan Pengawas Pemilu adalah lembaga negara yang memiliki
                  tugas pokok dan fungsi melakukan pengawasan terhadap seluruh
                  tahapan pemilihan umum . Melalui website ini, kami akan selalu
                  memperbaharui informasi terkait pengawasan dan pemantauan
                  pemilu.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop:"20%",
                marginRight:"30%",
              }}
            >
              <div class="accordion-body">
                <strong>sejarah pengawasan pemilu adalah, </strong>Awal Mula:
                Pengawasan pemilu telah ada sejak pemilihan umum pertama di
                beberapa negara pada abad ke-18 dan ke-19. Pada awalnya,
                pengawasan dilakukan oleh pemerintah atau pihak yang
                berkepentingan, tanpa keterlibatan pihak independen.
                Perkembangan Masyarakat Sipil: Pada abad ke-19 dan awal abad
                ke-20, muncul gerakan masyarakat sipil yang mendorong untuk
                pembentukan badan pengawas independen. Organisasi seperti League
                of Women Voters di Amerika Serikat adalah contoh awal gerakan
                ini. Badan Pengawas Independen: Seiring berjalannya waktu,
                banyak negara mulai membentuk badan pengawas independen, seperti
                Komisi Pemilihan Umum (KPU) di Indonesia, Election Commission di
                India, dan Federal Election Commission (FEC) di Amerika Serikat.
                Badan ini bertugas mengawasi proses pemilihan umum, memastikan
                keadilan, dan melibatkan masyarakat dalam pengawasan. Penggunaan
                Teknologi: Dengan perkembangan teknologi, pengawasan pemilu juga
                telah berubah. Penggunaan teknologi seperti sistem informasi
                pemilih dan pemungutan suara elektronik telah menjadi bagian
                dari usaha untuk meningkatkan transparansi dan efisiensi dalam
                pemilihan. Partisipasi Masyarakat: Seiring dengan perkembangan
                demokrasi, masyarakat semakin terlibat dalam pengawasan pemilu.
                Observers pemilu, kelompok advokasi, dan media independen
                berperan penting dalam memastikan proses pemilihan umum berjalan
                secara adil dan transparan. Isu dan Tantangan: Meskipun ada
                kemajuan dalam sejarah pengawasan pemilu, masih ada isu dan
                tantangan, seperti manipulasi pemilih, kecurangan, dan ancaman
                terhadap proses demokratis. Pengawasan yang efektif terus
                menjadi fokus untuk memastikan pemilu yang bersih dan kredibel.
                Sejarah pengawasan pemilu mencerminkan evolusi konsep demokrasi
                dan partisipasi masyarakat dalam memastikan proses pemilihan
                umum yang adil dan transparan.
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
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Profil Impian
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"

              className="alert"
              style={{
                margin: "0",
                backgroundColor: "lightgray",
                borderRadius: "100px 100px 0px 0px",
                marginRight:"30%"
              }}
            >
              <div class="accordion-body">
                <strong>profil impian,</strong> It is Profil impian Bawaslu akan
                mencerminkan citra lembaga yang kuat, adil, dan dipercayai oleh
                masyarakat untuk menjaga integritas dan keberlanjutan proses
                demokratis di negara tersebut.
              </div>
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

    
      </div>
    
    </div>
    <Footer />

        </div>
      </div>
        <Footer />
    </div>
    
  );
};
export default Profil;
