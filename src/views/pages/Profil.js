import React from "react";
import "../pages/Profil.css";
import Navbar from "../../component/Navbar";
import misi from "../../aset/undraw_stepping_up_g6oo.svg"
import visi from "../../aset/undraw_visual_data_re_mxxo.svg";
import undraw from "../../aset/undraw_hiring_re_yk5n.svg";

function Profil() {
  return (
    <div className="body">
      <Navbar />
      <div className="head">
        <h1 style={{ textAlign: "center", padding: "10px" }}>Our Services</h1>

      <div className="icon1">
        <div>
          {" "}
          <span>
            <img src={undraw} alt="undraw" className="undraw" />
          </span>
        </div>
        <div className="profil">
          <h2>PROFIL</h2>
          <p style={{ width: "600px", alignItems: "end" }}>
            Badan Pengawas Pemilu adalah lembaga negara yang memiliki tugas
            pokok dan fungsi melakukan pengawasan terhadap seluruh tahapan
            pemilihan umum . Melalui website ini, kami akan selalu memperbaharui
            informasi terkait pengawasan dan pemantauan pemilu.
          </p>
        </div>
      </div>
      <div className="icon2">
        <div className="visi">
          <h2 style={{textAlign:"center"}}>VISI</h2>
          <p style={{width:"600px"}}>
            Terwujudnya Bawaslu sebagai Lembaga Pengawal Terpercaya dalam
            Penyelenggaraan Pemilu Demokratis, Bermartabat, dan Berkualitas.
          </p>
        </div>
        <div>
            <span>
                <img src={misi} alt="misi" className="img-visi"/>
            </span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Profil;
