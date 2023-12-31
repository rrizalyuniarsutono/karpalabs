import React, { useState, useEffect } from 'react';
import Side from "../../Components/Sidebar/Side";
import Charts1 from "../../Components/Charts/Charts1";
import Charts2 from "../../Components/Charts/Charts2";
import style from "./style.module.css";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const preferredMode = localStorage.getItem('preferredMode');
    if (preferredMode === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('preferredMode', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('preferredMode', 'light');
    }
  }, [isDarkMode]);

  return (
    <body id="page-top">
      <div id="wrapper">
        <Side />
        <div className="d-flex flex-column">
          <div id="content">
            <div className={`container ${style.mode} ${isDarkMode ? style.dark : ""}`}>
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Network</h1>
                <button className='' onClick={() => setIsDarkMode(!isDarkMode)}>
                  Dark Mode
                </button>
              </div>

              <div className="row">
                <div className={`${style.mode} ${isDarkMode ? style.dark : ""}`}>
                  <div className="row px-1">
                    {/* <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3 className="text-white">BW Utilization</h3>
                      <Charts1 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3 className="text-white">Top Clien</h3>
                      <Charts1 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3 className="text-white">Top Server</h3>
                      <Charts1 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3 className="text-white">Top BW App</h3>
                      <Charts1 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3 className="text-white">Top SosMed</h3>
                      <Charts1 />
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 mb-4">
                      <h3 className="text-white">Top SosMed</h3>
                      <Charts1 />
                    </div> */}
                    {/* <div className="col-md-12 col-lg-12 col-12 mb-4">
                      <h3 className="text-white">Charts</h3>
                      <Charts2 />
                    </div> */}
                    <div className="col-md-12 col-lg-12 col-12 mb-4">
                      <iframe
                        src="https://saas.packetvisions.com/s/pvx-default-space/app/dashboards?auth_provider_hint=anonymous1#/view/1c622b0e-0961-418e-a5a5-24f2c1aa958d?embed=true&_g=(refreshInterval:(pause:!t,value:60000),time:(from:now-15m,to:now))&_a=(panels:!((embeddableConfig:(enhancements:(),hidePanelTitles:!f),gridData:(h:12,i:'2',w:16,x:0,y:27),id:e13d3654-455e-43aa-9c3e-d6178779d9d3,panelIndex:'2',title:'Network%20Transport',type:visualization,version:'8.8.1'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f),gridData:(h:12,i:'4',w:16,x:32,y:27),id:'8e9eee1f-51e4-4d55-a71e-6ad82afa339e',panelIndex:'4',title:'Network%20Traffic%20Direction',type:visualization,version:'8.8.1'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,vis:(legendOpen:!t)),gridData:(h:12,i:'5',w:16,x:0,y:15),id:'2556f109-1a93-493f-907d-9dd45d0b1fe0',panelIndex:'5',title:'Top%20DNS%20Domains',type:visualization,version:'8.8.1'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f,vis:(legendOpen:!t)),gridData:(h:12,i:'6',w:16,x:16,y:15),id:'9ab191cb-0cdf-41af-8aea-dd339c10e453',panelIndex:'6',title:'Top%20URL%20Domains',type:visualization,version:'8.8.1'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f),gridData:(h:12,i:'7',w:16,x:32,y:15),id:'7084d9f3-e517-46f7-8d56-f8de7f1537d7',panelIndex:'7',title:'Top%20SSL%20Servers',type:visualization,version:'8.8.1'),(embeddableConfig:(attributes:(description:'',layerListJSON:'%5B%7B%22locale%22:%22autoselect%22,%22sourceDescriptor%22:%7B%22type%22:%22EMS_TMS%22,%22isAutoSelect%22:true,%22lightModeDefault%22:%22road_map_desaturated%22%7D,%22id%22:%22df6e65d4-cbd1-4d72-93cc-c639a7321eaf%22,%22label%22:null,%22minZoom%22:0,%22maxZoom%22:24,%22alpha%22:1,%22visible%22:true,%22style%22:%7B%22type%22:%22EMS_VECTOR_TILE%22,%22color%22:%22%22%7D,%22includeInFitToBounds%22:true,%22type%22:%22EMS_VECTOR_TILE%22%7D,%7B%22alpha%22:0.75,%22disableTooltips%22:false,%22id%22:%22d230ac8b-1280-4e9a-817c-1eada51ee7a0%22,%22includeInFitToBounds%22:true,%22joins%22:%5B%5D,%22label%22:%22Destination%20Geo%22,%22maxZoom%22:24,%22minZoom%22:0,%22sourceDescriptor%22:%7B%22applyForceRefresh%22:true,%22applyGlobalQuery%22:true,%22applyGlobalTime%22:true,%22geoField%22:%22destination.geo.location%22,%22id%22:%2221f89852-b632-4d62-ab01-2b59f5c67daa%22,%22metrics%22:%5B%7B%22type%22:%22count%22%7D%5D,%22requestType%22:%22point%22,%22resolution%22:%22MOST_FINE%22,%22type%22:%22ES_GEO_GRID%22,%22indexPatternId%22:%22filebeat-*%22%7D,%22style%22:%7B%22isTimeAware%22:true,%22properties%22:%7B%22fillColor%22:%7B%22options%22:%7B%22color%22:%22Yellow%20to%20Red%22,%22colorCategory%22:%22palette_0%22,%22field%22:%7B%22name%22:%22doc_count%22,%22origin%22:%22source%22%7D,%22fieldMetaOptions%22:%7B%22isEnabled%22:false,%22sigma%22:3%7D,%22type%22:%22ORDINAL%22%7D,%22type%22:%22DYNAMIC%22%7D,%22icon%22:%7B%22options%22:%7B%22value%22:%22marker%22%7D,%22type%22:%22STATIC%22%7D,%22iconOrientation%22:%7B%22options%22:%7B%22orientation%22:0%7D,%22type%22:%22STATIC%22%7D,%22iconSize%22:%7B%22options%22:%7B%22field%22:%7B%22name%22:%22doc_count%22,%22origin%22:%22source%22%7D,%22fieldMetaOptions%22:%7B%22isEnabled%22:false,%22sigma%22:3%7D,%22maxSize%22:18,%22minSize%22:7%7D,%22type%22:%22DYNAMIC%22%7D,%22labelBorderColor%22:%7B%22options%22:%7B%22color%22:%22%23FFFFFF%22%7D,%22type%22:%22STATIC%22%7D,%22labelBorderSize%22:%7B%22options%22:%7B%22size%22:%22SMALL%22%7D%7D,%22labelColor%22:%7B%22options%22:%7B%22color%22:%22%23000000%22%7D,%22type%22:%22STATIC%22%7D,%22labelPosition%22:%7B%22options%22:%7B%22position%22:%22CENTER%22%7D%7D,%22labelSize%22:%7B%22options%22:%7B%22size%22:14%7D,%22type%22:%22STATIC%22%7D,%22labelText%22:%7B%22options%22:%7B%22value%22:%22%22%7D,%22type%22:%22STATIC%22%7D,%22labelZoomRange%22:%7B%22options%22:%7B%22maxZoom%22:24,%22minZoom%22:0,%22useLayerZoomRange%22:true%7D%7D,%22lineColor%22:%7B%22options%22:%7B%22color%22:%22%233d3d3d%22%7D,%22type%22:%22STATIC%22%7D,%22lineWidth%22:%7B%22options%22:%7B%22size%22:1%7D,%22type%22:%22STATIC%22%7D,%22symbolizeAs%22:%7B%22options%22:%7B%22value%22:%22circle%22%7D%7D%7D,%22type%22:%22VECTOR%22%7D,%22type%22:%22GEOJSON_VECTOR%22,%22visible%22:true%7D%5D',mapStateJSON:'%7B%22adHocDataViews%22:%5B%5D,%22zoom%22:4.55,%22center%22:%7B%22lon%22:111.78878,%22lat%22:0.13455%7D,%22timeFilters%22:%7B%22from%22:%22now-24h%2Fh%22,%22to%22:%22now%22%7D,%22refreshConfig%22:%7B%22isPaused%22:true,%22interval%22:60000%7D,%22query%22:%7B%22query%22:%22%22,%22language%22:%22kuery%22%7D,%22filters%22:%5B%5D,%22settings%22:%7B%22autoFitToDataBounds%22:false,%22backgroundColor%22:%22%23ffffff%22,%22customIcons%22:%5B%5D,%22disableInteractive%22:false,%22disableTooltipControl%22:false,%22hideToolbarOverlay%22:false,%22hideLayerControl%22:false,%22hideViewControl%22:false,%22initialLocation%22:%22LAST_SAVED_LOCATION%22,%22fixedLocation%22:%7B%22lat%22:0,%22lon%22:0,%22zoom%22:2%7D,%22browserLocation%22:%7B%22zoom%22:2%7D,%22keydownScrollZoom%22:false,%22maxZoom%22:24,%22minZoom%22:0,%22showScaleControl%22:false,%22showSpatialFilters%22:true,%22showTimesliderToggleButton%22:true,%22spatialFiltersAlpa%22:0.3,%22spatialFiltersFillColor%22:%22%23DA8B45%22,%22spatialFiltersLineColor%22:%22%23DA8B45%22%7D%7D',title:'Destination%20Geo',uiStateJSON:'%7B%22isLayerTOCOpen%22:false,%22openTOCDetails%22:%5B%5D%7D'),enhancements:(),hiddenLayers:!(),hidePanelTitles:!f,isLayerTOCOpen:!f,mapBuffer:(maxLat:66.51326,maxLon:180,minLat:-66.51326,minLon:-180),mapCenter:(lat:9.62348,lon:13.8952,zoom:1.28),openTOCDetails:!()),gridData:(h:15,i:'7c14f193-ee4d-44e7-993f-6f756012edff',w:48,x:0,y:0),panelIndex:'7c14f193-ee4d-44e7-993f-6f756012edff',type:map,version:'8.8.1'),(embeddableConfig:(enhancements:()),gridData:(h:12,i:'2987579f-0d13-45db-b0c5-6ff70f6792dc',w:16,x:16,y:27),id:b2cb1e79-f810-43a4-807e-5d9d1eacb879,panelIndex:'2987579f-0d13-45db-b0c5-6ff70f6792dc',type:visualization,version:'8.8.1'),(embeddableConfig:(enhancements:(),hiddenLayers:!(),isLayerTOCOpen:!f,mapBuffer:(maxLat:66.51326,maxLon:180,minLat:-66.51326,minLon:-180),mapCenter:(lat:9.62348,lon:13.8952,zoom:1.28),openTOCDetails:!()),gridData:(h:15,i:'81f1e6de-b5dd-4111-a348-18502eea7fbe',w:48,x:0,y:56),id:'63de17ae-00b5-43b2-9cdd-6314caf4f03f',panelIndex:'81f1e6de-b5dd-4111-a348-18502eea7fbe',type:map,version:'8.8.1'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:'34e6acdf-d6d5-4404-9d0c-d170b4ceab3d',w:24,x:0,y:39),id:f00ad073-f416-472c-af78-9ff3c55eb825,panelIndex:'34e6acdf-d6d5-4404-9d0c-d170b4ceab3d',type:visualization,version:'8.8.1'),(embeddableConfig:(enhancements:()),gridData:(h:15,i:'028ed50d-f090-4489-ae6d-7dfc89b96cd2',w:24,x:24,y:39),id:c1607521-905e-4f58-acd4-fa95eb08ba9e,panelIndex:'028ed50d-f090-4489-ae6d-7dfc89b96cd2',type:visualization,version:'8.8.1')))&hide-filter-bar=true"
                        height={800}
                        width={1000}
                      />
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
