import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./views/pages/Home";
import SertaMerta from "./views/pages/informasi/SertaMerta";
import './css/style.css';

import PermintaanInformasi from "./views/prosedur/PermintaanInformasi";
import PermohonanKeberatan from "./views/prosedur/PermohonanKeberatan";
import WaktuLayanan from "./views/prosedur/WaktuLayanan";

import Profil from "./views/pages/Profil";
import BiayaLayanan from "./views/prosedur/BiayaLayanan";
import PenyelesaianSengketa from "./views/prosedur/PenyelesaianSengketa";
import Pengumuman from "./views/pages/pengumuman/Pengumuman";
import eLibrary from "./views/pages/eLibrary";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profil" component={Profil} exact />
          <Route path="/serta-merta" component={SertaMerta} exact />
          <Route path="/permintaan" component={PermintaanInformasi} exact />
          <Route path="/permohonan" component={PermohonanKeberatan} exact />
          <Route path="/waktu" component={WaktuLayanan} exact />
          <Route path="/biaya" component={BiayaLayanan} exact />
          <Route path="/penyelesaian" component={PenyelesaianSengketa} exact />
          <Route path="/pengumuman" component={Pengumuman} exact />
          <Route path="/library" component={eLibrary} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
