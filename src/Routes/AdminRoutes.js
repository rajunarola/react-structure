import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import AdminLogin from "../_Admin/AdminComponents/Login/AdminLogin";
import AdminLoginAntd from "../_Admin/AdminComponents/Login/AdminLoginAntd";
import AdminLoginYupFormik from "../_Admin/AdminComponents/Login/AdminLoginYupFormik";
import AdminSideNav from "../_Admin/_AdminLayout/AdminSideNav/AdminSideNav";
import AdminFooter from "../_Admin/_AdminLayout/MainComponent/AdminFooter";
import AdminHeader from "../_Admin/_AdminLayout/MainComponent/AdminHeader";

const AdminDashboard = lazy(() => import("../_Admin/_AdminLayout/MainComponent/AdminDashboard"));

export const routesCode = [
    { path: "/admin-dashboard", exact: true, component: AdminDashboard },
];
class AdminRoutes extends React.PureComponent {
    render() {
        return (
            <Switch>
                <Route path="/admin-login" exact component={AdminLogin} />
                <Route path="/admin-login-antd" exact component={AdminLoginAntd} />
                <Route path="/admin-login-formik" exact component={AdminLoginYupFormik} />
                <section className="admin_main_section">
                    <div className="part_one">
                        <AdminSideNav />
                    </div>
                    <div className="part_two">
                        <AdminHeader />
                        <div className="main_section_add">
                            {routesCode.map((route, i) =>
                                <Route {...route} key={i} />
                            )}
                        </div>
                        <AdminFooter />
                    </div>
                </section>
            </Switch>
        );
    }
}

export default AdminRoutes;