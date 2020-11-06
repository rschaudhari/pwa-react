import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect} from 'react-router-dom';
import Home from './views/Home';

import Login from './views/login'
import Register from './views/register'
import Users from './Users'
import Dashboard from './views/Dashboard'
import machineOperator from './operators/machineOperator';
import labOperator from './operators/labOperator';
import supervisorOperator from './operators/supervisorOperator';
import Convertor from './Convertor';
 

function App() {
    return (
        <div className="App">
            
            <Router>
                <Switch>
                    <Route component={Login} exact path="/login"></Route>
                    <Route component={Register} exact path="/register"></Route>
                    <Route component={Users} exact path="/user"></Route>
                    <Route component={Home} exact path="/home"></Route>
                    <Route component={Dashboard} exact path="/"></Route>
                    <Route component={machineOperator} exact path="/machineOperator"></Route>
                    <Route component={labOperator} exact path="/labOperator"></Route>
                    <Route component={supervisorOperator} exact path="/supervisorOperator"></Route>
                    <Route component={Convertor} exact path="/Convertor"></Route>

                    <Redirect to="/"></Redirect>
                </Switch>
            </Router>
        </div>
    )
}
export default App;



