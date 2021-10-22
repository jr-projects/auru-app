import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Course from "../pages/course";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

const Routers = () => {
    return(
        <>
            <Router>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/course/:id" component={Course}></Route>
                    <Route path="/">
                        <Redirect to="/login"/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default Routers;