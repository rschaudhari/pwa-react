import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Login from './login'
import Register from './register'
function Topbar() {
    return (
        <div className="App">
            <Router>
                <Navbar bg="primary" variant="dark">
                    <div className="container">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Link to="/"> Home </Link>
                            <Link to="/about"> About </Link>
                            <Link to="/services"> Services </Link>
                            <Link to="/login"> Login </Link>
                        </Nav>
                    </div>
                </Navbar>
                <Switch>
                    <Route component={About} exact path="/about"></Route>
                    <Route component={Services} exact path="/services"></Route>
                    <Route component={Login} exact path = "/login"></Route>
                    <Route component={Register} exact path = "/register"></Route>
                    <Route component={Home} exact path="/"></Route>
                </Switch>
            </Router>
        </div>
    )
}
export default Topbar;