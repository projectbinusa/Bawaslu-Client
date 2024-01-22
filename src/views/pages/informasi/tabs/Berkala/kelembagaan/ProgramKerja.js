import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_DUMMY } from "../../../../../../utils/base_URL";

function ProgramKerja() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_DUMMY}/bawaslu/api/jenis-keterangan/24/isi-informasi?page=0&size=10&sortBy=id&sortOrder=desc`
        );
        setData(response.data.data); // Mengasumsikan properti data berisi array informasi
      } catch (error) {
        console.error("Error saat mengambil data:", error);
      }
    };

    fetchData();
  }, []); // Array dependensi kosong agar data diambil hanya sekali saat komponen dimuat

  return (
    <div className="responsive-3">
      <div className="card-body bg-body-tertiary table-container rounded">
        <table className="table table1 responsive-3 table-striped table-hover border rounded">
          <thead>
            <tr>
              <th className="text-center"> Dokumen</th>
              <th className="text-center"> Pdf Document</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.content.map((item) => (
                <React.Fragment key={item.id}>
                  <tr>
                    <td className="" data-cell="dokumen" scope="row"  style={{ width: "500px" }}>
                      {item.dokumen}
                    </td>
                    <td className=""  style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                      }}>
                      <a href={item.pdfDokumen}>
                        <button
                          className="bg-primary text-light"
                          style={{
                            border: "none",
                            padding: "7px",
                            paddingLeft: "13px",
                            paddingRight: "13px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          <i className="fa-solid fa-download"></i>
                        </button>
                      </a>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProgramKerja;
