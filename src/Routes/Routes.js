import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Client/Components/Login";
import Footer from "../Client/_Layout/Footer";
import Header from "../Client/_Layout/Header";

const ClientComponent = lazy(() => import("../Client/Components/ClientMainComponent"));

export const routesCode = [
    { path: "/dashboard", exact: true, component: ClientComponent },
];

class Routes extends React.PureComponent {

    render() {

        return (
            <Switch>
                <Route to="/" exact component={Login} />
                <section className="website_main_section">
                    <Header />
                    <>
                        hi
                        {/* {routesCode.map((route, i) =>
                            <Route {...route} key={i} />
                        )} */}
                    </>
                    <Footer />
                </section>
            </Switch>
        );
    }
}

export default Routes;