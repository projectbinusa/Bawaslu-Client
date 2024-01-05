import React from 'react'

function Bawaslu() {
  return (
    <div
    className="widget widget_catagory"
    style={{ background: "#F1F6F9", overflow: "hidden", boxShadow: " rgba(47, 60, 95, 0.24) 0px 6px 10px",
    border: "1px solid #6DB9EF" }}>
    <h4 className="widget-title">
      Tautan{" "}
      <span className="text-primary">
        <strong>Lembaga</strong>
      </span>
    </h4>
    <ul className="catagory-items">
      <li>
        <a href="https://bawaslu.go.id/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/Bawaslu-RI-300x73-1.png"
            alt=""
          />
        </a>
      </li>
      <li>
        <a href="https://dkpp.go.id/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/dkpp-300x73-1.png"
            alt=""
          />
        </a>
      </li>
      <li>
        <a href="https://www.mkri.id/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/MAHKAMAKONSTITUSI-300x73-1.png"
            alt=""
          />
        </a>
      </li>
      <li>
        <a href="https://www.kpu.go.id/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/KPU-300x73-1.png"
            alt=""
          />
        </a>
      </li>
      <li>
        <a href="https://jateng.bawaslu.go.id/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://boyolali.bawaslu.go.id/cepogo/2023/09/bawaslu-jateng-300x73-1.png"
            alt=""
          />
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Bawaslu