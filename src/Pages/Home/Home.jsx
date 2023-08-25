import React from "react";
import Charts1 from "../../Components/Charts/Charts1";
import Side from "../../Components/Sidebar/Side";

const Home = () => {
  return (
    <body id="page-top">
      <div id="wrapper">
        <Side />
        <div className="d-flex flex-column">
          <div id="content">
            <div className="container">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Network</h1>
              </div>

              <div className="row">
                <div className="bg-light">
                  <div className="row px-2">
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>BW Utilization</h3>
                      <Charts1 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>Top Clien</h3>
                      <Charts1 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>Top Server</h3>
                      <Charts1 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>Top BW App</h3>
                      <Charts1 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>Top SosMed</h3>
                      <Charts1 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>Top SosMed</h3>
                      <Charts1 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
