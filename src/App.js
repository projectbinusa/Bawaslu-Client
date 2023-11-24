import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./views/pages/Home";
import SertaMerta from "./views/pages/informasi/SertaMerta";
import SetiapSaat from "./views/pages/informasi/SetiapSaat";
import "./css/style.css";
import Profil from "./views/pages/Profil";
import Pengumuman from "./views/pages/pengumuman/Pengumuman";
import eLibrary from "./views/pages/eLibrary";
import CalonAnggotaBawaslu from "./views/pages/pengumuman/CalonAnggotaBawaslu";
import Berita from "./views/pages/Berita";
import Login from "./views/pages/auth/Login";
import Register from "./views/pages/auth/Register";
import Dikecualikan from "./views/pages/informasi/Dikecualikan";
import FormPermohonanInformasi from "./views/pages/form/FormPermohonanInformasi";
import FormPermohonanKeberatan from "./views/pages/form/FormPermohonanKeberatan";
import InformasiBerkala from "./views/pages/informasi/InformasiBerkala";
import Regulasi from "./views/pages/daftarRegulasi/Regulasi";
import November from "./views/pages/rekap_berita/November";
import AdminFormInformasi from "./views/pages/admin/adminForm/AdminFormInformasi";
import AddBeritaAdmin from "./views/pages/admin/berita/AddBeritaAdmin";
import AdminBerita from "./views/pages/admin/berita/AdminBerita";
import EditBeritaAdmin from "./views/pages/admin/berita/EditBeritaAdmin";
import AdminPermohonanInformasi from "./views/pages/admin/permohonan/AdminPermohonanInformasi";
import AdminPermohonanKeberatan from "./views/pages/admin/permohonan/AdminPermohonanKeberatan";
import DetailPermohonanInformasi from "./views/pages/admin/permohonan/detail/DetailPermohonanInformasi";
import DetailPermohonanKeberatan from "./views/pages/admin/permohonan/detail/DetailPermohonanKeberatan";
import Kehumasan from "./views/pages/menu footer/Kehumasan";
import Pencegahan from "./views/pages/menu footer/Pencegahan";
import Sosialisasi from "./views/pages/menu footer/Sosialisasi";
import WaktuLayanan from "./views/pages/prosedur/WaktuLayanan";
import BiayaLayanan from "./views/pages/prosedur/BiayaLayanan";
import PermohonanKeberatan from "./views/pages/prosedur/PermohonanKeberatan";
import PenyelesaianSengketa from "./views/pages/prosedur/PenyelesaianSengketa";
import Maklumat from "./views/pages/daftarRegulasi/Maklumat";
import LayananInformasi from "./views/pages/form/LayananInformasi";
import PermintaanInformasi from "./views/pages/prosedur/PermintaanInformasi";
import Dip from "./views/pages/daftarRegulasi/Dip";
import InformasiStandarProsedur from "./views/pages/daftarRegulasi/InformasiStandarProsedur";
// import AdminSertaMerta from "./views/pages/admin/informasi/AdminSertaMerta";
import AdminPengumuman from "./views/pages/admin/pengumuman/AdminPengumuman";
import AddPengumuman from "./views/pages/admin/pengumuman/AddPengumuman";
import EditPengumuman from "./views/pages/admin/pengumuman/EditPengumuman";

import Index from "./views/pages/admin/informasi/Index";

import AddMenuRegulasi from "./views/pages/admin/informasi/AddMenuRegulasi";
// import AddMenuRegulasi "./"
import TakBerkategori from "./views/pages/menu footer/TakBerkategori,";
import OSDMdanDiklat from "./views/pages/menu footer/OSDMdanDiklat";
import PenangananPelanggaran from "./views/pages/menu footer/PenangananPelanggaran";
import DialogKehumasan from "./views/pages/menu footer/DialogKehumasan";
import PestaDemokrasi from "./views/pages/menu footer/PestaDemokrasi";
import PenandatangananMou from "./views/pages/menu footer/PenandatangananMou";
import PaswasluKecamatan from "./views/pages/menu footer/PaswasluKecamatan";
import VerifikasiAdministrasi from "./views/pages/menu footer/VerifikasiAdministrasi";
import PemilihSosialisasi from "./views/pages/menu footer/PemilihSosialisasi";
import TandatgnNPHD from "./views/pages/menu footer/TandatgnNPHD";
import GpAnsor from "./views/pages/menu footer/GpAnsor";
import PemiluPartisipatif from "./views/pages/menu footer/PemiluPartisipatif";
import Kpu from "./views/pages/menu footer/Kpu";
import PemiluBermartabat from "./views/pages/menu footer/PemiluBermartabat";
import KecamatanSelo from "./views/pages/menu footer/KecamatanSelo";
import KampanyePemilu from "./views/pages/menu footer/KampanyePemilu";
import PerkuatPemahaman from "./views/pages/menu footer/PerkuatPemahaman";
import PengumumanCalonAnggota from "./views/pages/menu footer/PengumumanCalonAnggota";
import PengumumanHasiltesKesehatan from "./views/pages/menu footer/PengumumanHasiltesKesehatan";
import PengumumanHasiltesWawancara from "./views/pages/menu footer/PengumumanHasiltesWawancara";
import PengumumanPerpanjangantesTertulis from "./views/pages/menu footer/PengumumanPerpanjangantesTertulis";
import PengumumanPelaksanaan from "./views/pages/menu footer/PengumumanPelaksanaan";
import PengumumanHasilSeleksi from "./views/pages/menu footer/PengumumanHasilSeleksi";
import PengumumanLowonganSatpam from "./views/pages/menu footer/PengumumanLowonganSatpam";
import PenyelesaianSengketaFooter from "./views/pages/menu footer/PenyelesaianSengketaFooter";
import PengumumanFooter from "./views/pages/menu footer/PengumumanFooter";
import Kanal from "./views/pages/informasi/Kanal";
// test
function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          {/* auth */}
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          {/* page */}
          <Route path="/" component={Home} exact />
          <Route path="/profil" component={Profil} exact />
          <Route path="/pengumuman" component={Pengumuman} exact />
          <Route path="/library" component={eLibrary} exact />
          <Route path="/berita" component={Berita} exact />
          {/* daftar informasi */}
          <Route path="/informasi-serta-merta" component={SertaMerta} exact />
          <Route path="/informasi-setiap-saat" component={SetiapSaat} exact />
          <Route path="/informasi-berkala" component={InformasiBerkala} exact />
          <Route path="/informasi-dikecuali" component={Dikecualikan} exact />
          {/* form online */}
          <Route
            path="/form-permohonan-keberatan"
            component={FormPermohonanKeberatan}
            exact
          />
          <Route
            path="/form-permohonan-informasi"
            component={FormPermohonanInformasi}
            exact
          />
          {/* prosedur */}
          <Route path="/waktu-layanan" component={WaktuLayanan} exact />
          <Route
            path="/layanan-informasi-berbasis-android"
            component={LayananInformasi}
            exact
          />
          <Route path="/biaya-pelayanan" component={BiayaLayanan} exact />
          <Route
            path="/prosedur-permintaan-informasi"
            component={PermintaanInformasi}
            exact
          />
          <Route
            path="/prosedur-permohonan-keberatan"
            component={PermohonanKeberatan}
            exact
          />
          <Route
            path="/prosedur-permohonan-penyelesaian-sengketa-informasi"
            component={PenyelesaianSengketa}
            exact
          />
          <Route
            path="/pengumuman-calon-anggota-bawaslu-kabupaten-kota-terpilih-provinsi-jawa-tengah"
            component={CalonAnggotaBawaslu}
            exact
          />
          {/* daftar regulasi */}
          <Route path="/maklumat-pelayanan" component={Maklumat} exact />
          <Route path="/regulasi" component={Regulasi} exact />
          <Route path="/dip" component={Dip} exact />
          <Route
            path="/standar-operasional-prosedur"
            component={InformasiStandarProsedur}
            exact
          />
          {/* admin */}
          <Route
            path="/admin-permohonan-informsi"
            component={AdminFormInformasi}
            exact
          />
          <Route path="/add-berita-admin" component={AddBeritaAdmin} exact />
          <Route path="/edit-berita-admin" component={EditBeritaAdmin} exact />
          <Route path="/admin-berita" component={AdminBerita} exact />
          <Route path="/admin-pengumuman" component={AdminPengumuman} exact />
          <Route path="/add-pengumuman" component={AddPengumuman} exact />
          <Route path="/edit-pengumuman/:id" component={EditPengumuman} exact />
          <Route path="/kanal" component={Kanal} exact />
          <Route
            path="/admin-permohonan-informasi"
            component={AdminPermohonanInformasi}
            exact
          />
          <Route
            path="/admin-permohonan-keberatan"
            component={AdminPermohonanKeberatan}
            exact
          />
          <Route path="/admin/:jenisRegulasi/:id" component={Index} exact />
          <Route path="/add-menu-regulasi" component={AddMenuRegulasi} exact />
          {/* <Route path="/admin-informasi-serta-merta" component={AdminSertaMerta} exact /> */}
          <Route
            path="/detail-permohonan-informasi/:id"
            component={DetailPermohonanInformasi}
            exact
          />
          <Route
            path="/detail-permohonan-keberatan/:id"
            component={DetailPermohonanKeberatan}
            exact
          />
          {/* rekap data perbulan */}
          <Route path="/rekap-berita/:tahun_bulan" component={November} exact />
          <Route path="/rekap-berita/:tahun_bulan" component={November} exact />
          <Route path="/kehumasan" component={Kehumasan} exact />
          <Route path="/pencegahan" component={Pencegahan} exact />
          <Route path="/sosialisasi" component={Sosialisasi} exact />
          <Route
            path="/penyelesaian-sengketa"
            component={PenyelesaianSengketa}
            exact
          />
          <Route
            path="/penanganan-pelanggaran"
            component={PenangananPelanggaran}
            exact
          />
          <Route path="/tak-berkategori" component={TakBerkategori} exact />
          <Route path="/OSDM-dan-Diklat" component={OSDMdanDiklat} exact />
          <Route path="/pengumuman-footer" component={PengumumanFooter} exact />
          <Route
            path="/dialog-interaktif-isu-pemilu-di-sosial-media"
            component={DialogKehumasan}
            exact
          />
          <Route
            path="/pesta-demokrasi-semakin-dekat-bawaslu-diminta-menjadi-narasumber-sosialisasi-pemilu-2024"
            component={PestaDemokrasi}
            exact
          />
          <Route
            path="/bawaslu-boyolali-bersama-uns-lakukan-penandatanganan-mou"
            component={PenandatangananMou}
            exact
          />
          <Route
            path="/bawaslu-boyolali-adakan-rakor-penanganan-pelanggaran-bersama-panwaslu-kecamatan"
            component={PaswasluKecamatan}
            exact
          />
          <Route
            path="/bawaslu-mengawasi-verifikasi-administrasi-perbaikan-dokumen-persyaratan-bakal-calon-dprd-kab-kota"
            component={VerifikasiAdministrasi}
            exact
          />
          <Route
            path="/panwaslu-kecamatan-karanggede-lakukan-kegiatan-sosialisasi-denga-pemilih-pemula"
            component={PemilihSosialisasi}
            exact
          />
          <Route
            path="/bawaslu-boyolali-tandatangani-nphd-pendanaan-pemilukada-2024"
            component={TandatgnNPHD}
            exact
          />
          <Route
            path="/gp-ansor-dan-panwaslu-musuk-jalin-kerjasama"
            component={GpAnsor}
            exact
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
