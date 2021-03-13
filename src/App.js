import React, { Suspense } from "react";
import "./assets/scss/admin/custom_admin_style.scss";
import "./assets/scss/admin/custom_admin_responsive.scss";
import "./assets/scss/client/custom_client_style.scss";
import "./assets/scss/client/custom_client_responsive.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "./Routes/AdminRoutes";
import Routes from "./Routes/Routes";

function App() {


  var href = window.location.href;
  const route = href.match(/([^\/]*)\/*$/)[1];

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div></div>}>
          {route.includes('admin') ?
            <AdminRoutes /> :
            <Routes />
          }
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
