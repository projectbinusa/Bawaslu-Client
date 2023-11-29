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
import PenangananPelanggaran from "./views/pages/menu footer/PenangananPelanggaran";
import TakBerkategori from "./views/pages/menu footer/TakBerkategori,";
import OSDMdanDiklat from "./views/pages/menu footer/OSDMdanDiklat";
import DialogKehumasan from "./views/pages/menu footer/DialogKehumasan";
import PestaDemokrasi from "./views/pages/menu footer/PestaDemokrasi";
import PenandatangananMou from "./views/pages/menu footer/PenandatangananMou";
import VerifikasiAdministrasi from "./views/pages/menu footer/VerifikasiAdministrasi";
import PemilihSosialisasi from "./views/pages/menu footer/PemilihSosialisasi";
import TandatgnNPHD from "./views/pages/menu footer/TandatgnNPHD";
import GpAnsor from "./views/pages/menu footer/GpAnsor"

// import AdminSertaMerta from "./views/pages/admin/informasi/AdminSertaMerta";
import AdminPengumuman from "./views/pages/admin/pengumuman/AdminPengumuman";
import AddPengumuman from "./views/pages/admin/pengumuman/AddPengumuman";
import EditPengumuman from "./views/pages/admin/pengumuman/EditPengumuman";

import Index from "./views/pages/admin/informasi/Index";

import AddMenuRegulasi from "./views/pages/admin/daftarRegulasi/MenuRegulasi/AddMenuRegulasi";
// import AddMenuRegulasi "./"

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
import AddJenisKeterangan from "./views/pages/admin/informasi/AddJenisKeterangan";
import EditJenisKeterangan from "./views/pages/admin/informasi/EditJenisKeterangan";
import IsiKeterangan from "./views/pages/admin/informasi/isiKeterangan/IsiKeterangan";
import AddIsiKeteranganInformasi from "./views/pages/admin/informasi/isiKeterangan/AddIsiKeteranganInformasi";
import EditIsiKeterangan from "./views/pages/admin/informasi/isiKeterangan/EditIsiKeterangan";
import RegulasiAdmin from "./views/pages/admin/daftarRegulasi/MenuRegulasi/MenuRegulasi";
import EditRegulasi from "./views/pages/admin/daftarRegulasi/MenuRegulasi/MenuEditRegulasi";
import MenuRegulasi from "./views/pages/admin/daftarRegulasi/Regulasi/Regulasi";
import CategoryBerita from "./views/pages/CategoryBerita";
import Informasii from "./views/pages/informasi/Informasii";
import IsiPengumuman from "./views/pages/pengumuman/IsiPengumuman";
import PageBerita from "./views/PageBerita";
import IsiRekap from "./views/pages/rekap_berita/IsiRekap";
import RekapBerita from "./views/pages/rekap_berita/RekapBerita";
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
          <Route path="/rekap-berita/:tahun_bulan" component={RekapBerita} exact />
          <Route path="/isi-rekap/:judulBerita/:id" component={IsiRekap} exact />
          <Route path="/category-berita/:category/:id" component={CategoryBerita} exact />
          {/* daftar informasi */}
          <Route path="/informasi-serta-merta" component={SertaMerta} exact />
          <Route path="/informasi-setiap-saat" component={SetiapSaat} exact />
          <Route path="/informasi-berkala" component={InformasiBerkala} exact />
          <Route path="/informasi-dikecuali" component={Dikecualikan} exact />
          <Route path="/informasi/:namaInformasi/:id" component={Informasii} exact />
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
          {/* daftar regulasi */}
          <Route path="/admin-regulasi/:jenisRegulasi/:id" component={MenuRegulasi} exact />
          <Route path="/add-menu-regulasi" component={AddMenuRegulasi} exact />
          <Route path="/edit/:menuRegulasi/:id" component={EditRegulasi} exact />
          <Route path="/add/:menuRegulasi/:id" component={RegulasiAdmin} exact />
          <Route path="/edit/:regulasi/:id" component={EditRegulasi} exact />
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
             {/* admin informasi */}
          <Route path="/admin/:namaInformasi/:id" component={Index} exact />
          <Route
            path="/tambah-jenis-keterangan"
            component={AddJenisKeterangan}
            exact
          />
          <Route path="/edit-jenis-keterangan/:keterangan/:id" component={EditJenisKeterangan} exact />
          <Route path="/isi-keterangan/:keterangan/:id" component={IsiKeterangan} exact />
          <Route path="/tambah-isi-keterangan/:id" component={AddIsiKeteranganInformasi} exact />
          <Route path="/edit-isi-keterangan/:id" component={EditIsiKeterangan} exact />
          {/* rekap data perbulan */}
          <Route path="/kehumasan" component={Kehumasan} exact />
          <Route path="/pencegahan" component={Pencegahan} exact />
          <Route path="/sosialisasi" component={Sosialisasi} exact />

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
            component={PenangananPelanggaran}
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
          <Route
            path="/pemilu-partisipatif"
            component={PemiluPartisipatif}
            exact
          />
          <Route
            path="/kpu"
            component={Kpu}
            exact
          />
          <Route
            path="/pemilu-bermartabat"
            component={PemiluBermartabat}
            exact
          />
          <Route
            path="/kecamatan-selo"
            component={KecamatanSelo}
            exact
          />
          <Route
            path="/kampanye-pemilu"
            component={KampanyePemilu}
            exact
          />
          <Route
            path="/perkuat-pemahaman"
            component={PerkuatPemahaman}
            exact
          />
          <Route
            path="/pengumuman-calon-anggota-bawaslu"
            component={PengumumanCalonAnggota}
            exact
          />
          <Route
            path="/pengumumn-hasil-kesehatan"
            component={PengumumanHasiltesKesehatan}
            exact
          />
          <Route
            path="/pengumuman-hasil-tes-wawancara"
            component={PengumumanHasiltesWawancara}
            exact
          />
          <Route
            path="/pengumuman-perpanjangan-tes-tertulis"
            component={PengumumanPerpanjangantesTertulis}
            exact
          />
          <Route
            path="/pengumuman-pelaksanaan-tes-psikologi"
            component={PengumumanPelaksanaan}
            exact
          />
          <Route
            path="/pengumuman-hasil-seleksi"
            component={PengumumanHasilSeleksi}
            exact
          />
          <Route
            path="/pengumuman-lowongan-pekerjaan"
            component={PengumumanLowonganSatpam}
            exact
          />
          <Route
            path="/isi-pengumuman/:judulPengumuman/:id"
            component={IsiPengumuman}
            path="/page-berita/:judulBerita/:id"
            component={PageBerita}
            exact
          />
          <Route
            path="/penyelesaian-sengketa-footer"
            component={PenyelesaianSengketaFooter}
            exact
          />
          {/* <Route
            path="/penyelesaian-sengketa-footer"
            component={PenyelesaianSengketaFooter}
            exact
          /> */}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
