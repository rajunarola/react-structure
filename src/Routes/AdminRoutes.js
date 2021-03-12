import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import AdminLogin from "../_Admin/AdminComponents/AdminLogin";
import AdminSideNav from "../_Admin/_AdminLayout/AdminSideNav/AdminSideNav";
import AdminFooter from "../_Admin/_AdminLayout/MainComponent/AdminFooter";
import AdminHeader from "../_Admin/_AdminLayout/MainComponent/AdminHeader";

// const Dashboard = lazy(() => import("../Client/Components/Dashboard/Dashboard"));

// export const routesCode = [
//     { path: "/dashboard", exact: true, component: Dashboard },
// ];

class AdminRoutes extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route to="/admin-login" exact component={AdminLogin} />
                <section className="admin_main_section">
                    <div className="part_one">
                        <AdminSideNav />
                    </div>
                    <div className="part_two">
                        <AdminHeader />
                        <div className="main_section_add">
                            hi
                            {/* {routesCode.map((route, i) =>
                                <Route {...route} key={i} />
                            )} */}
                        </div>
                        <AdminFooter />
                    </div>
                </section>
            </Switch>
        );
    }
}

export default AdminRoutes;