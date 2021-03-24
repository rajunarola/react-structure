import React, { lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "../Client/Components/Login";
import Footer from "../Client/_Layout/Footer";
import Header from "../Client/_Layout/Header";
const ClientMainComponent = lazy(() => import("../Client/Components/ClientMainComponent"));
const ClientMainComponentAntd = lazy(() => import("../Client/Components/ClientMainComponentAntd"));
const ClientTableDataViaRedux = lazy(() => import("../Client/Components/ClientTableDataViaRedux"));

export const routesCode = [
    { path: "/client-dashboard", exact: true, component: ClientMainComponent },
    { path: "/client-dashboard-antd", exact: true, component: ClientMainComponentAntd },
    { path: "/client-dashboard-redux", exact: true, component: ClientTableDataViaRedux }
];

class Routes extends React.PureComponent {

    render() {

        return (
            <Switch>
                <Route path="/" exact component={Login} />
                <section className="website_main_section">
                    <Header />
                    <>
                        {routesCode.map((route, i) =>
                            <Route {...route} key={i} />
                        )}
                    </>
                    <Footer />
                </section>
            </Switch>
        );
    }
}

export default withRouter(Routes);