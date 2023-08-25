import React from 'react'
import Side from "../../Components/Sidebar/Side";
import Charts1 from "../../Components/Charts/Charts1";
import Charts2 from "../../Components/Charts/Charts2";
import Charts3 from '../../Components/Charts/Charts3';

const Threat = () => {
  return (
    <body id="page-top">
      <div id="wrapper">
        <Side />
        <div className="d-flex flex-column">
          <div id="content">
            <div className="container">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Threat Intelligence</h1>
              </div>

              <div className="row">
                <div className="bg-light">
                  <div className="row px-2">
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>A</h3>
                      <Charts3 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>B</h3>
                      <Charts3 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>C</h3>
                      <Charts3 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>D</h3>
                      <Charts3 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>E</h3>
                      <Charts3 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3>F</h3>
                      <Charts3 />
                    </div>
                    <div className="col-md-12 col-lg-12 col-12 mb-4">
                      <h3>G</h3>
                      <Charts2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Threat