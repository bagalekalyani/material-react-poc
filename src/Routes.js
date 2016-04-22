let React = require('react');
let { Router, Route, IndexRoute } = require('react-router');
import {App} from './js/containers';
import Home from './js/component/Home';
import Dashboard from './js/component/Dashboard';
import DashboardHome from './js/component/DashboardHome';

var Routes = (
    <Router>

        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>

        <Route path="dashboard" component={Dashboard}>
            <IndexRoute component={DashboardHome}/>
            <Route path="home" component={DashboardHome}/>
        </Route>

    </Router>
);

export default Routes;
