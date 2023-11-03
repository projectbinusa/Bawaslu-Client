import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import ReactOwlCarousel from "react-owl-carousel";


function SertaMerta() {
  const options = {
    items: 1, // Jumlah item yang akan ditampilkan dalam satu slide
    nav: true, // Tombol navigasi
    dots: true, // Indikator titik
  };

  return (
    <div className="testimonial-area bg-sky pd-top-115 pd-bottom-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center">
              <h5 className="sub-title double-line">Client Feedback</h5>
              <h2 className="title">Check what’s our client say</h2>
              <p className="content">
                Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas augue atpellentesque laoreet
              </p>
            </div>
          </div>
        </div>
        {/* <ReactOwlCarousel options={options}> */}
          <div className="item">
            <div className="single-testimonial-inner style-4">
              <img className="shaddow-img" src="" alt="img" />
              <div className="details">
                <p>
                  Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat leo egetendum sodales augue nec atpellentesque semper
                </p>
                <h4>Karshin Kumar</h4>
                <span className="designation">Founder</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="single-testimonial-inner style-4">
              <img className="shaddow-img" src="" alt="img" />
              <div className="details">
                <p>
                  Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat leo egetendum sodales augue nec atpellentesque semper
                </p>
                <h4>Necola Amar</h4>
                <span className="designation">HR</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="single-testimonial-inner style-4">
              <img className="shaddow-img" src="" alt="img" />
              <div className="details">
                <p>
                  Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat leo egetendum sodales augue nec atpellentesque semper
                </p>
                <h4>Forgan Arit</h4>
                <span className="designation">Manager</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="single-testimonial-inner style-4">
              <img className="shaddow-img" src="" alt="img" />
              <div className="details">
                <p>
                  Duis leo. Sed fringilla maurisamet nibh. odales sagittionsequat leo egetendum sodales augue nec atpellentesque semper
                </p>
                <h4>Wilton Fork</h4>
                <span className="designation">Co-Founder</span>
              </div>
            </div>
          </div>
        {/* </ReactOwlCarousel> */}
      </div>
    </div>
  );
}

export default SertaMerta;
